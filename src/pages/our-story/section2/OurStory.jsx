import React from 'react';
import styles from './OurStory.module.css';
import { FiClock, FiHeart, FiMapPin, FiPackage } from 'react-icons/fi';

const OurStory2 = () => {
  const timelineEvents = [
    {
      year: "1985",
      title: "The Roots in Godavari",
      description: "In the lush green fields of West Godavari, Grandma Suryavathi perfected the art of 'Avakaya'. There were no weighing scales, only an instinct honed by years of tasting. The kitchen was the heart of the home, and the grinding stone was its heartbeat.",
      icon: <FiMapPin />,
      image: "https://assets.thehansindia.com/h-upload/2023/05/06/1350177-manfo-pickle.webp" // Village/Mango tree vibe
    },
    {
      year: "1998",
      title: "Summer Rituals",
      description: "For us grandkids, summer meant one thing: Pickle Season. We sat on the veranda, guarding the drying mangoes from crows. We watched, we learned, and we tasted the raw spices that would eventually become our family heirloom recipes.",
      icon: <FiClock />,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop" // Spices/Childhood vibe
    },
    {
      year: "2015",
      title: "The City Void",
      description: "Moving to Hyderabad brought career success but a culinary void. The supermarket jars were filled with preservatives and lacked 'Soul'. We realized that the authentic taste of home was slowly becoming a lost memory.",
      icon: <FiHeart />,
      image: "https://images.unsplash.com/photo-1596450502967-89df50d99986?q=80&w=600&auto=format&fit=crop" // City/Food plate
    },
    {
      year: "2024",
      title: "ManaRuculu is Born",
      description: "We decided to bridge the gap. We went back to the village, dusted off the old stone mortars, and sourced the exact Guntur chillies Grandma used. ManaRuculu was born not as a business, but as a preservation project.",
      icon: <FiPackage />,
      image: "https://images.unsplash.com/photo-1589135233689-d53805b0a34b?q=80&w=600&auto=format&fit=crop" // Jars/Branding
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.subtitle}>Generations of Flavor</span>
          <h2 className={styles.title}>A Journey Through Time</h2>
          <div className={styles.headerLine}></div>
        </div>

        <div className={styles.timeline}>
          {/* Central Line */}
          <div className={styles.line}></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className={`${styles.row} ${index % 2 === 0 ? styles.left : styles.right}`}>
              
              {/* Content Box */}
              <div className={styles.content}>
                <span className={styles.year}>{event.year}</span>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.description}>{event.description}</p>
              </div>

              {/* Icon Node (Center) */}
              <div className={styles.node}>
                {event.icon}
              </div>

              {/* Image Box */}
              <div className={styles.imageWrapper}>
                <img src={event.image} alt={event.title} className={styles.image} />
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurStory2;