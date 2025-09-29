import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
          <nav className={styles.desktopNav}>
            <a href="/docs" className={styles.navLink}>
              Docs
            </a>
            <a href="/agents" className={styles.navLink}>
              Agents
            </a>
            <a href="/whitepaper" className={styles.navLink}>
              Whitepaper
            </a>
            <a href="/app" className={styles.primaryButton}>
              Enter App
            </a>
          </nav>

          {/* Scroll Hint - Desktop Only */}
          {showScrollHint && (
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
        {isMobileMenuOpen && (
          <div className={styles.mobileNavContainer}>
            <nav className={styles.mobileNav}>
              <a href="/docs" className={styles.mobileNavLink}>
                Docs
              </a>
              <a href="/agents" className={styles.mobileNavLink}>
                Agents
              </a>
              <a href="/whitepaper" className={styles.mobileNavLink}>
                Whitepaper
              </a>
              <a href="/app" className={styles.mobilePrimaryButton}>
                Enter App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;