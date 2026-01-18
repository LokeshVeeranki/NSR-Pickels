import React from 'react';
import styles from './OurStory.module.css';
import { FiArrowRight, FiHeart } from 'react-icons/fi';

const OurStory4 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Top: The Community Story */}
        <div className={styles.communityBlock}>
          <div className={styles.imageGrid}>
            <img 
              src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800&auto=format&fit=crop" 
              alt="Women sorting chillies" 
              className={`${styles.gridImg} ${styles.img1}`} 
            />
            <img 
              src="https://images.unsplash.com/photo-1606914469725-e396604dc903?q=80&w=600&auto=format&fit=crop" 
              alt="Mixing spices" 
              className={`${styles.gridImg} ${styles.img2}`} 
            />
          </div>

          <div className={styles.textContent}>
            <span className={styles.subtitle}>More Than A Business</span>
            <h2 className={styles.title}>Empowering the <br /> <span className={styles.accent}>Hands That Heal.</span></h2>
            <p className={styles.text}>
              ManaRuculu isn't just about preserving recipes; it's about supporting the 
              artisans who keep them alive.
            </p>
            <p className={styles.text}>
              Today, our kitchen is run by a collective of 15 women from our ancestral village. 
              These are mothers and grandmothers who bring not just skill, but an innate 
              understanding of flavor that no machine can replicate. By choosing us, you aren't 
              just buying a pickle; you are supporting their livelihoods and independence.
            </p>
            
            <div className={styles.signatureRow}>
              <div className={styles.statItem}>
                <strong>15+</strong>
                <span>Local Artisans</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statItem}>
                <strong>Fair</strong>
                <span>Trade Practice</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Final Call to Action Box */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaContent}>
            <FiHeart className={styles.heartIcon} />
            <h2 className={styles.ctaTitle}>Ready to taste the tradition?</h2>
            <p className={styles.ctaText}>
              The jars are ready, the aroma is waiting. Bring the nostalgia of 
              Andhra back to your dining table today.
            </p>
            <a href="/shop" className={styles.shopBtn}>
              Shop Our Pickles <FiArrowRight />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory4;