import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Mailchimp API integration
    const API_KEY = "f1f1037efb1ffc6b7ca8e61f67748933-us12";
    const LIST_ID = "2757bdf9d8";
    const DATACENTER = "us12"; // Extract from API key
    
    console.log('Newsletter subscription request for:', email);
    console.log('Using Mailchimp API with List ID:', LIST_ID);
    
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    const data = await response.json();
    console.log('Mailchimp API response:', { status: response.status, data });

    if (response.ok) {
      return res.status(200).json({ message: 'Successfully subscribed!' });
    } else {
      if (data.title === 'Member Exists') {
        return res.status(400).json({ error: 'This email is already subscribed' });
      }
      
      console.error('Mailchimp API error:', data);
      return res.status(400).json({ 
        error: data.detail || data.title || 'Failed to subscribe. Please try again.' 
      });
    }
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
