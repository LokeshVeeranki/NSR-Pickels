import React from 'react';
import styles from './Home.module.css';
import { FiSun, FiCheck, FiLayers } from 'react-icons/fi';

const Home3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left: Visual Storytelling */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop" 
              alt="Traditional Spices and Stone Grinder" 
              className={styles.mainImage} 
            />
            {/* Decorative Stamp */}
            <div className={styles.stampBadge}>
              <span>Since</span>
              <strong>1985</strong>
            </div>
          </div>
        </div>

        {/* Right: Text & Features */}
        <div className={styles.contentColumn}>
          <span className={styles.subtitle}>The Lost Art</span>
          <h2 className={styles.title}>We Do Things the <span className={styles.accent}>Slow Way</span>.</h2>
          <p className={styles.description}>
            In a world of instant mixes, we choose patience. Our pickles aren't made in factories; 
            they are crafted in our family kitchen using the same stone mortars (Roalu) our grandmother used. 
            No machines, no shortcuts—just pure, labor-intensive love.
          </p>

          <div className={styles.featureGrid}>
            
            {/* Feature 1 */}
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <FiSun />
              </div>
              <div className={styles.featureText}>
                <h3>Sun-Dried to Perfection</h3>
                <p>We rely on the harsh Deccan sun, not industrial dryers, to preserve the crunch.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <FiLayers />
              </div>
              <div className={styles.featureText}>
                <h3>Stone-Pounded Spices</h3>
                <p>Hand-pounding releases oils and aromas that mixers simply destroy.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <FiCheck />
              </div>
              <div className={styles.featureText}>
                <h3>Zero Preservatives</h3>
                <p>Salt, oil, and turmeric are our only preservatives. Clean and chemical-free.</p>
              </div>
            </div>

          </div>

          <a href="/story" className={styles.learnMoreBtn}>Read Our Full Story</a>
        </div>

      </div>
    </section>
  );
};

export default Home3;