import React from 'react';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-white py-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary-500/5 to-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Left Side - Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center group">
              <div className="relative">
                <Image
                  src="/bondcredit-logo-white.png"
                  alt="Bond Credit"
                  width={40}
                  height={40}
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              Building the infrastructure for autonomous agents to access credit, reputation, and native money in the agentic economy.
            </p>
          </div>

          {/* Right Side - Navigation Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links Column */}
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white mb-2">Quick Links</h4>
                <div className="w-8 h-0.5 bg-blue-400 mb-4"></div>
              </div>
              <div className="space-y-3">
                {['Home', 'Challenge', 'Features', 'Pricing'].map((link) => (
                  <a 
                    key={link}
                    href={`/${link.toLowerCase()}`} 
                    className="block text-sm text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white mb-2">Resources</h4>
                <div className="w-8 h-0.5 bg-blue-400 mb-4"></div>
              </div>
              <div className="space-y-3">
                {['Documentation', 'Blog', 'Status'].map((link) => (
                  <a 
                    key={link}
                    href={`/${link.toLowerCase()}`} 
                    className="block text-sm text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white mb-2">Company</h4>
                <div className="w-8 h-0.5 bg-blue-400 mb-4"></div>
              </div>
              <div className="space-y-3">
                {['About', 'Careers', 'Contact'].map((link) => (
                  <a 
                    key={link}
                    href={`/${link.toLowerCase()}`} 
                    className="block text-sm text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-blue-400/30 mb-6"></div>

        {/* Bottom Legal Links */}
        <div className="flex justify-end">
          <div className="flex items-center space-x-6 text-sm text-white">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
              <React.Fragment key={link}>
                <a 
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </a>
                {index < 2 && <span className="text-white/40">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;