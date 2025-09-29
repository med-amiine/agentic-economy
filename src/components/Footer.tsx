import React from 'react';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import styles from './Footer.module.css';

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
          <div className="space-y-0">
            <div className="flex items-center group">
              <div className="relative">
                <div className={styles.footerLogo}></div>
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-md leading-relaxed -mt-4">
              Building the infrastructure for autonomous agents to access credit, reputation, and native money in the agentic economy.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://twitter.com/bondcredit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/bondcredit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a 
                href="https://discord.gg/bondcredit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Discord"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/bondcredit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
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
                {['Home', 'Challenge', 'Features'].map((link) => (
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
                {['Documentation'].map((link) => (
                  <a 
                    key={link}
                    href={`/${link.toLowerCase()}`} 
                    className="block text-sm text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
                <a 
                  href="/brand-kit" 
                  className="block text-sm text-white hover:text-blue-400 transition-colors duration-300"
                >
                  Brand Kit
                </a>
                <a 
                  href="https://bondcredit.statuspage.io/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white hover:text-blue-400 transition-colors duration-300"
                >
                  Status
                </a>
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

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Copyright */}
          <div className="text-xs text-white/60">
            © 2025 bond.credit. All Rights Reserved.
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center space-x-4 text-xs text-white">
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