import React from 'react';
import styles from './OurStory.module.css';
import { FiInstagram } from 'react-icons/fi';

const OurStory5 = () => {
  // Gallery Data
  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1606787619248-f301830a5a57?q=80&w=800&auto=format&fit=crop",
      caption: "Freshly plucked mangoes | 6:00 AM",
      span: "large" // Spans 2 rows or cols
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop",
      caption: "The grind begins",
      span: "normal"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop",
      caption: "Sun-drying the chillies",
      span: "normal"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      caption: "Family lunch | Avakaya & Mudda Pappu",
      span: "wide" // Spans 2 cols
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=600&auto=format&fit=crop",
      caption: "Hand-packing every jar",
      span: "normal"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>From the <span className={styles.script}>Archives</span></h2>
          <p className={styles.subtitle}>Snapshots of life at Godavari.</p>
        </div>

        {/* Masonry Grid */}
        <div className={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={`${styles.galleryItem} ${styles[item.span]}`}>
              <img src={item.src} alt={item.caption} className={styles.image} />
              
              <div className={styles.overlay}>
                <span className={styles.caption}>{item.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Link */}
        <div className={styles.footerLink}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.instagramBtn}>
            <FiInstagram /> Follow our Journey @ManaRuculu
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurStory5;