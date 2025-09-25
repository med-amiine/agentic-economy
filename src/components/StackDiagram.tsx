import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const StackDiagram = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  const baseText = 'Bond Credit Engine: ';
  const rollingWords = ['our first scoring framework', 'advanced agent evaluation', 'comprehensive risk assessment', 'real-time performance tracking', 'trust-based credit system'];
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Typing and deleting animation
  useEffect(() => {
    const currentWord = rollingWords[0]; // Use first word for now, can be expanded
    
    // If we've reached the last word and finished typing, stop the animation
    if (currentText === currentWord && !isDeleting) {
      setIsAnimationComplete(true);
      return;
    }
    
    if (!isDeleting) {
      // Typing animation
      if (currentText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, 100); // Typing speed
      } else {
        // Finished typing, wait then start deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Wait 2 seconds before deleting
      }
    } else {
      // Deleting animation
      if (currentText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, 50); // Deleting speed (faster than typing)
      } else {
        // Finished deleting, restart typing
        setIsDeleting(false);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, isDeleting, rollingWords]);

  const partners = [
    { name: 'Giza', logo: '/giza.png' },
    { name: 'Cod3x', logo: '/cod3x-logo.png' },
    { name: 'Fungi', logo: '/fungi-logo.png' },
    { name: 'ZyfAI', logo: '/zyfai-logo.png' },
    { name: 'Almanak', logo: '/alamnak-logo.png' },
    { name: 'Mamo', logo: '/mamo-logo.png' }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-neutral-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-400/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-heading text-neutral-900">
              <span className="text-neutral-900">
                {baseText}
              </span>
              <span className="bg-gradient-to-r from-primary-500 to-blue-400 bg-clip-text text-transparent">
                {currentText}
                {!isAnimationComplete && <span className="animate-pulse">|</span>}
              </span>
            </h2>
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-5xl mx-auto font-light">
                  We've partnered with <strong className="text-neutral-900">Giza, Cod3x, Fungi, ZyfAI, Almanak, and Mamo</strong> to build the first comprehensive agent scoring system. Agents get scored, get credit, and access <strong className="text-primary-500">agUSD</strong> based on their performance.
                </p>
          </div>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/Comprehensive-Scoring.png"
                  alt="Comprehensive Scoring"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">Comprehensive Scoring</h3>
                  <p className="text-xs text-neutral-600">Multi-dimensional evaluation system</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/real-time-update.png"
                  alt="Real-time Updates"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">Real-time Updates</h3>
                  <p className="text-xs text-neutral-600">Dynamic scoring based on performance</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/credit-access.png"
                  alt="Credit Access"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">Credit Access</h3>
                  <p className="text-xs text-neutral-600">Seamless agUSD minting process</p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Horizontal Scrolling Partners */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 px-6 py-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-neutral-200/50 hover:bg-white hover:border-primary-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-neutral-600 whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 px-6 py-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-neutral-200/50 hover:bg-white hover:border-primary-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-neutral-600 whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackDiagram;