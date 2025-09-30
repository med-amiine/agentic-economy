import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import styles from './Header.module.css';
import ComingSoonModal from './ComingSoonModal';

interface HeaderProps {
  hideScrollHint?: boolean;
  showNavigation?: boolean;
}

const Header = ({ hideScrollHint = false, showNavigation = true }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);

  const handleScrollToNext = () => {
    // Find the next section after the hero section
    const heroSection = document.querySelector('section');
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background
      setIsScrolled(currentScrollY > 20);
      
      // Update scroll hint visibility
      setShowScrollHint(currentScrollY < 100);
      
      // Header visibility logic
      if (currentScrollY < 10) {
        // Always show header at the very top
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${!isHeaderVisible ? styles.hidden : ''}`}
    >
      <div className={styles.containerResponsive}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <a href="/" className={styles.logoLink}>
            </a>
          </div>

          {/* Desktop Navigation */}
          {showNavigation && (
            <nav className={styles.desktopNav}>
              <button 
                onClick={() => setIsComingSoonModalOpen(true)}
                className={styles.primaryButton}
              >
                Enter App
              </button>
            </nav>
          )}

          {/* Scroll Hint - Desktop Only */}
          {showScrollHint && !hideScrollHint && (
            <button 
              className={styles.scrollHint}
              onClick={handleScrollToNext}
              aria-label="Scroll to next section"
            >
              <span className={styles.scrollHintText}>Scroll to explore</span>
              <ChevronDown className={styles.scrollHintIcon} />
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={styles.mobileMenuIcon} />
            ) : (
              <Menu className={styles.mobileMenuIcon} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && showNavigation && (
          <div className={styles.mobileNavContainer}>
            <nav className={styles.mobileNav}>
              <button 
                onClick={() => setIsComingSoonModalOpen(true)}
                className={styles.mobilePrimaryButton}
              >
                Enter App
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isComingSoonModalOpen}
        onClose={() => setIsComingSoonModalOpen(false)}
        title="App Coming Soon"
        description="We're working hard to bring you an amazing experience. The app will be available soon with all the features you need for agentic banking."
      />
    </header>
  );
};

export default Header;