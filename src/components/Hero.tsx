import React, { useState, useEffect, useRef } from 'react';
import { Plus, Play } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(87);
  const [showLoadingText, setShowLoadingText] = useState(false);
  
  const baseText = 'THE AGENTIC ';
  const rollingWords = ['PROTOCOL', 'ENGINE', 'NETWORK', 'TRUST', 'LAYER', 'ECONOMY'];
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Loading percentage animation - simplified for geometric animation
  useEffect(() => {
    // Just set loading to complete immediately for geometric animation
    setLoadingPercentage(100);
    setShowLoadingText(true);
  }, []);

  // Typing and deleting animation - independent of loading
  useEffect(() => {
    const currentWord = rollingWords[currentWordIndex];
    
    // Check if currentWord exists and if we've reached ECONOMY, stop the animation
    if (!currentWord || (currentWord === 'ECONOMY' && currentText === 'ECONOMY' && !isDeleting)) {
      setIsAnimationComplete(true);
      return;
    }
    
    if (!isDeleting) {
      // Typing animation
      if (currentText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, 150); // Faster typing
      } else {
        // Finished typing, wait then start deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 800); // Shorter wait time
      }
    } else {
      // Deleting animation
      if (currentText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, 80); // Faster deleting
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        if (currentWordIndex < rollingWords.length - 1) {
          setCurrentWordIndex(prev => prev + 1);
        } else {
          // Animation complete - stay on ECONOMY
          setIsAnimationComplete(true);
        }
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, currentWordIndex, isDeleting, rollingWords]);

  return (
        <section 
          className={styles.heroSection}
          style={{
            backgroundImage: "url('/agentic-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundBlur1}></div>
        <div className={styles.backgroundBlur2}></div>
        <div className={styles.backgroundBlur3}></div>
      </div>

      {/* AI Agent Animation Overlay */}
      <div className={styles.geometricOverlay}>
        <div className={styles.geometricContainer}>
          {/* AI Agent Shapes */}
          <div className={styles.aiShape} data-shape="neural-node"></div>
          <div className={styles.aiShape} data-shape="circuit"></div>
          <div className={styles.aiShape} data-shape="data-flow"></div>
          <div className={styles.aiShape} data-shape="neural-node"></div>
          <div className={styles.aiShape} data-shape="circuit"></div>
          <div className={styles.aiShape} data-shape="data-flow"></div>
          <div className={styles.aiShape} data-shape="neural-node"></div>
          <div className={styles.aiShape} data-shape="circuit"></div>
          
          {/* AI Central Hub */}
          <div className={styles.centralCluster}>
            <div className={styles.aiHub} data-shape="ai-core">
              <div className={styles.aiCoreInner}></div>
              <div className={styles.aiCoreGlow}></div>
            </div>
          </div>
          
          {/* Neural Network Connections */}
          <div className={styles.neuralConnection} data-connection="1"></div>
          <div className={styles.neuralConnection} data-connection="2"></div>
          <div className={styles.neuralConnection} data-connection="3"></div>
          
          {/* Data Streams */}
          <div className={styles.dataStream} data-stream="1"></div>
          <div className={styles.dataStream} data-stream="2"></div>
          <div className={styles.dataStream} data-stream="3"></div>
          
          {/* Pulse Effects */}
          <div className={styles.pulseEffect}></div>
          <div className={styles.pulseEffect} style={{ '--delay': '2s' } as React.CSSProperties}></div>
          <div className={styles.pulseEffect} style={{ '--delay': '4s' } as React.CSSProperties}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Content */}
          <div className={styles.content}>
            {/* Main Headline */}
            <div className={styles.headlineSection}>
              {/* Banner */}
              <div className={styles.banner}>
                <span className={styles.bannerText}>
                  Allocators earn. Agents compete. AVS secures.
                </span>
              </div>

              <h1 className={styles.mainHeadline}>
                <span className={styles.baseText}>
                  {baseText}
                </span>
                <span className={styles.typingText}>
                  {currentText}
                  {!isAnimationComplete && <span className={styles.cursor}>|</span>}
                </span>
              </h1>
            </div>

            {/* Key Points - Card Layout */}
            <div className={styles.keyPoints}>
              <div className={styles.keyPointCard}>
                <div className={styles.keyPointIcon}>
                  <Image
                    src="/deposit-icon.png"
                    alt="Deposit"
                    width={24}
                    height={24}
                    className={styles.keyPointIconImage}
                  />
                </div>
                <div className={styles.keyPointTitle}>
                  DEPOSIT
                </div>
                <p className={styles.keyPointDescription}>
                  Deposit <strong>USDC</strong>, mint <strong className="primary">agUSD</strong>
                </p>
              </div>
              
              <div className={styles.keyPointCard}>
                <div className={styles.keyPointIcon}>
                  <Image
                    src="/earn-icon.png"
                    alt="Earn"
                    width={24}
                    height={24}
                    className={styles.keyPointIconImage}
                  />
                </div>
                <div className={styles.keyPointTitle}>
                  EARN
                </div>
                <p className={styles.keyPointDescription}>
                  Earn risk-adjusted base yield via our <strong className="primary">Morpho Agent</strong>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctaSection}>
              <a href="/app" className={styles.primaryButton}>
                <div className={styles.primaryButtonGradient}></div>
                <span className={styles.primaryButtonContent}>
                  Enter App
                  <Plus className={styles.primaryButtonIcon} />
                </span>
              </a>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className={styles.secondaryButton}
              >
                <Play className={styles.secondaryButtonIcon} />
                Watch Demo
              </button>
            </div>

                {/* Key Metrics - Modern Card Layout */}
                <div className={styles.metricsSection}>
                  {/* Left - TOTAL VALUE VERIFIED */}
                  <div className={styles.metricsLeft}>
                    <div className={styles.totalValueCard}>
                      <div className={styles.totalValueAmount}>
                        $61,228,005.85
                      </div>
                      <div className={styles.totalValueLabel}>
                        TOTAL VALUE VERIFIED
                      </div>
                    </div>
                  </div>
                  
                  {/* Right - AGENTS SCORED */}
                  <div className={styles.metricsRight}>
                    <div className={styles.agentsScoredCard}>
                      <div className={styles.agentsScoredCount}>
                        318
                      </div>
                      <div className={styles.agentsScoredLabel}>
                        AGENTS SCORED
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* Video Modal */}
          {isModalOpen && (
            <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button 
                  className={styles.modalClose}
                  onClick={() => setIsModalOpen(false)}
                >
                  ×
                </button>
                <div className={styles.videoContainer}>
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&rel=0&modestbranding=1"
                    title="Bond Credit Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.video}
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </section>
  );
};

export default Hero;