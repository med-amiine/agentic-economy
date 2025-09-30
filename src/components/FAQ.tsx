import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How are scores computed?',
      answer: 'DeFi-specific factors: provenance, performance consistency, risk behavior, onchain telemetry. Bond Scores are updated in real-time based on performance. Lower scores automatically reduce credit caps, protecting the system from concentration risk.',
      category: 'Scoring'
    },
    {
      question: 'Is agUSD fully redeemable?',
      answer: 'Yes, 1:1 at the savings layer; system solvency is protected by allocator collateral, dynamic credit caps, and AVS slashing.',
      category: 'Technical'
    },
    {
      question: "What's the risks?",
      answer: 'No protocol can be considered entirely risk free, but extensive steps have been taken to minimize these risks as much as possible – the Bond Protocol code is publicly available and auditable by anyone, and has been audited by multiple smart contract auditors. Any code changes must be executed through the onchain governance processes. Additionally, there is an ongoing bug bounty campaign and service providers specializing in technical reviews and risk mitigation.',
      category: 'Risk'
    },
    {
      question: 'How does EigenCloud AVS security work?',
      answer: 'Restakers provide economic security through slashing conditions. If agents misbehave or fail to meet obligations, restaker funds are at risk, aligning incentives.',
      category: 'Security'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 bg-gradient-to-b from-neutral-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/3 rounded-full blur-3xl"></div>
      </div>

      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-heading text-neutral-900">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-primary-500 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto font-light">
              Everything you need to know about Bond Credit and the agentic economy.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl overflow-hidden hover:bg-white hover:border-primary-200/50 hover:shadow-xl transition-all duration-300">
              <button
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-blue-50/50 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-primary-500 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-neutral-400 group-hover:text-primary-500 transition-all duration-300" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-8 pt-0 animate-in">
                  <div className="text-neutral-600 leading-relaxed text-sm border-t border-neutral-200/50 pt-6">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;