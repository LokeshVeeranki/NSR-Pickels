import React from 'react';
import styles from './OurStory.module.css';
import { FiSun, FiUsers, FiShield } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const OurStory3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Quote Block */}
        <div className={styles.quoteWrapper}>
          <FaQuoteLeft className={styles.quoteIcon} />
          <blockquote className={styles.quote}>
            "We don't use machines to speed things up. We use patience to slow things down. 
            Because good food, like good love, cannot be rushed."
          </blockquote>
          <cite className={styles.author}>— Grandma Suryavathi</cite>
        </div>

        {/* The 3 Pillars Grid */}
        <div className={styles.grid}>
          
          {/* Pillar 1 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <FiUsers strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Sourced from Soil</h3>
            <p className={styles.cardText}>
              We don't buy from wholesale markets. We source our <em>Guntur Sannam</em> chillies 
              and raw mangoes directly from farmers we've known for decades. We know exactly 
              which field your pickle came from.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              {/* Custom SVG or icon for Stone Grinding */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M5 10h14" />
                <path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>The 'Roalu' Grind</h3>
            <p className={styles.cardText}>
              Industrial mixers generate heat that kills natural flavors. We use the traditional 
              <strong> Stone Mortar (Roalu)</strong> to pound our spices. It keeps the essential oils intact, 
              giving you that distinct aroma when you open the jar.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <FiSun strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Sun-Dried Purity</h3>
            <p className={styles.cardText}>
              No artificial preservatives. No vinegar. Just salt, oil, turmeric, and the 
              Deccan Sun. We sun-dry our ingredients for days to ensure longevity naturally, 
              just like it was done 50 years ago.
            </p>
          </div>

        </div>

        {/* Signature Image or Element */}
        <div className={styles.signatureBlock}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
            alt="Founder Signature" 
            className={styles.signature} 
          />
          <span className={styles.designation}>Founders, ManaRuculu</span>
        </div>

      </div>
    </section>
  );
};

export default OurStory3;