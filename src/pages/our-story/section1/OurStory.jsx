import React from 'react';
import styles from './OurStory.module.css';
import { FiChevronDown } from 'react-icons/fi';

const OurStory1 = () => {
  return (
    <section className={styles.storyHero}>
      
      <div className={styles.container}>
        
        {/* Left: Text Narrative */}
        <div className={styles.textColumn}>
          <span className={styles.preTitle}>Est. 1985</span>
          <h1 className={styles.title}>
            It Started with a <br />
            <span className={styles.accent}>Stone Mortar.</span>
          </h1>
          <div className={styles.divider}></div>
          <p className={styles.narrative}>
            Summer holidays in Guntur were never quiet. They were filled with the rhythmic 
            <em> thud-thud-thud</em> of the stone pestle hitting the mortar. 
          </p>
          <p className={styles.narrative}>
            This wasn't just cooking; it was a ritual. My grandmother, <strong>Suryavathi</strong>, believed that 
            machines stole the soul of the spice. She taught us that patience is the 
            most important ingredient in any jar of Avakaya.
          </p>
          <p className={styles.narrative}>
            Today, ManaRuculu is an attempt to bottle that same patience, love, and 
            uncompromising tradition for your dining table.
          </p>
        </div>

        {/* Right: Vintage Visuals */}
        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            {/* Main Vintage Image */}
            <img 
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000&auto=format&fit=crop" 
              alt="Grandmother making pickles" 
              className={styles.heroImage} 
            />
            
            {/* Decorative 'Polaroid' or 'Old Photo' Overlay */}
            <div className={styles.oldPhoto}>
              <img 
                src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=400&auto=format&fit=crop" 
                alt="Raw Mangoes" 
              />
              <span className={styles.photoCaption}>Summer '92</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>The Journey Continues</span>
        <FiChevronDown className={styles.bounceIcon} />
      </div>

    </section>
  );
};

export default OurStory1;