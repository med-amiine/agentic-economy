import React from 'react';
import Image from 'next/image';
import styles from './WhyBond.module.css';

const WhyBond = () => {
  return (
    <section id="features" className={styles.whyBondSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundBlur1}></div>
        <div className={styles.backgroundBlur2}></div>
      </div>

      
      <div className={`${styles.container} container-custom`}>
        <div className={styles.content}>
          <div className={styles.headlineSection}>
            <h2 className={styles.mainHeadline}>
              Credit & Money for the{' '}
              <span className={styles.gradientText}>
                Agentic Economy
              </span>
            </h2>
            <p className={styles.subtitle}>
              Agents already allocate billions, but lack credit, reputation, and native money. Bond builds all three:{' '}
              <strong>trust-scored credit vaults</strong>,{' '}
              <strong>AVS-insured guarantees</strong>, and{' '}
              <strong className="primary">agUSD</strong>, the{' '}
              <strong>unified</strong> stablecoin for agents.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className={styles.featureCardsGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Image
                  src="/trusted-score.png"
                  alt="Trust-Scored Credit"
                  width={48}
                  height={48}
                  className={styles.featureIconImage}
                />
              </div>
              <h3 className={styles.featureTitle}>Trust-Scored Credit</h3>
              <p className={styles.featureDescription}>
                Advanced scoring system evaluates agent performance and risk to provide appropriate credit lines.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Image
                  src="/avs-secure.png"
                  alt="AVS-Insured Guarantees"
                  width={48}
                  height={48}
                  className={styles.featureIconImage}
                />
              </div>
              <h3 className={styles.featureTitle}>AVS-Insured Guarantees</h3>
              <p className={styles.featureDescription}>
                Ethereum's security model ensures reliable guarantees for all credit operations and transactions.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIconContainer}>
                <Image
                  src="/agUSD-logo.png"
                  alt="Unified agUSD"
                  width={48}
                  height={48}
                  className={styles.featureIconImage}
                />
              </div>
              <h3 className={styles.featureTitle}>Unified agUSD</h3>
              <p className={styles.featureDescription}>
                Native stablecoin designed specifically for the agentic economy, enabling seamless transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBond;