import React, { useState } from 'react';
import { DollarSign, User, ArrowRight } from 'lucide-react';

// Robot Icon Component
const Robot = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
       width="24" height="24" 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
       strokeWidth="2" 
       strokeLinecap="round" 
       strokeLinejoin="round" 
       className={className}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="8" cy="16" r="1"/>
    <circle cx="16" cy="16" r="1"/>
    <path d="M12 2v4"/>
    <path d="M8 2h8"/>
  </svg>
);

const AgentGallery = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Successfully subscribed!');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 bg-gradient-to-b from-neutral-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/3 to-blue-400/3 rounded-full blur-3xl"></div>
      </div>

      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 mb-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-heading text-white">
              Ready to build the{' '}
              <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
                future?
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-4xl mx-auto font-light">
              Choose your path into the agentic economy and be part of the next generation of financial infrastructure.
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-center space-y-6">
                {/* Heading */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Sign up for the{' '}
                    <span className="text-neutral-300 font-bold">Agentic Economy</span>{' '}
                    newsletter
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Stay updated with insights on onchain credit, agent-powered economies, and the future of capital allocation. No spam, no fluff—just the key updates and research you need to stay ahead.
                  </p>
                </div>
                
                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex justify-center gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-64 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                  
                  {/* Message */}
                  {message && (
                    <p className={`text-xs ${message.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
                      {message}
                    </p>
                  )}
                  
                  {/* Privacy Policy */}
                  <p className="text-white/50 text-xs">
                    By submitting this form I have read and acknowledged the Privacy Policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentGallery;