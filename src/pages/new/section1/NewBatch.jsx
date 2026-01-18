import React, { useState, useEffect } from 'react';
import styles from './NewBatch.module.css';
import { FiClock, FiShoppingBag, FiCheck, FiThermometer, FiAlertCircle } from 'react-icons/fi';

const NewBatch = () => {
  // Simulating a countdown for the "Batch Closes" urgency
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 12, mins: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1 };
        return prev; // Simplified logic for visual demo
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header with Season Context */}
        <div className={styles.header}>
          <span className={styles.seasonBadge}>
            <FiThermometer /> Winter Harvest '24
          </span>
          <h2 className={styles.title}>Fresh from the <span className={styles.accent}>Jaars</span></h2>
          <p className={styles.subtitle}>
            Every winter, we make these special batches using the season's freshest 
            <strong> Red Chillies (Pandu Mirchi)</strong> and <strong> Amla (Usirikaya)</strong>. 
            Available only until stocks last.
          </p>
        </div>

        {/* Product Card Container */}
        <div className={styles.batchGrid}>
          
          {/* PRODUCT 1: PANDU MIRCHI (Hero Product) */}
          <div className={`${styles.productCard} ${styles.heroCard}`}>
            <div className={styles.imageSection}>
              <div className={styles.tagOverlay}>
                <span className={styles.freshTag}>Just Jarred: Dec 28</span>
                <span className={styles.stockTag}>Only 45 Jars Left</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1597523727909-00445d3eb977?q=80&w=800&auto=format&fit=crop" 
                alt="Pandu Mirchi Pachadi" 
                className={styles.productImg} 
              />
            </div>
            
            <div className={styles.infoSection}>
              <h3 className={styles.productName}>Pandu Mirchi Pachadi</h3>
              <span className={styles.productNative}>Ripe Red Chilli Pickle</span>
              
              <p className={styles.desc}>
                The legendary Guntur "Pandu Mirchi" is available only for a few weeks in winter. 
                Grinding these ripe, fiery chillies with tamarind creates a pickle that is 
                spicy, tangy, and dangerously addictive.
              </p>
              
              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <FiCheck className={styles.icon} />
                  <span>Guntur Sannam Chillies</span>
                </div>
                <div className={styles.metaItem}>
                  <FiCheck className={styles.icon} />
                  <span>Wood-Pressed Oil</span>
                </div>
              </div>

              <div className={styles.actionRow}>
                <span className={styles.price}>₹395 <span className={styles.weight}>/ 500g</span></span>
                <button className={styles.addBtn}>
                  Add to Cart <FiShoppingBag />
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCT 2: USIRIKAYA (Secondary) */}
          <div className={styles.productCard}>
            <div className={styles.imageSection}>
              <div className={styles.tagOverlay}>
                <span className={styles.freshTag}>Matured: 2 Weeks</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1572620609355-66795f660608?q=80&w=800&auto=format&fit=crop" 
                alt="Usirikaya Amla Pickle" 
                className={styles.productImg} 
              />
            </div>
            
            <div className={styles.infoSection}>
              <h3 className={styles.productName}>Usirikaya Nilava</h3>
              <span className={styles.productNative}>Whole Amla Pickle</span>
              
              <p className={styles.desc}>
                Winter Amlas are packed with Vitamin C. We slit them and soak them in 
                spices until they turn soft and flavorful. Best eaten with hot rice and ghee.
              </p>

              <div className={styles.actionRow}>
                <span className={styles.price}>₹340 <span className={styles.weight}>/ 500g</span></span>
                <button className={styles.addBtnSmall}>
                  Add <FiShoppingBag />
                </button>
              </div>
            </div>
          </div>

          {/* URGENCY / STATUS CARD */}
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <FiAlertCircle className={styles.alertIcon} />
              <h3>Next Batch in 2026</h3>
              <p>
                Since these ingredients are seasonal, once this batch is sold out, 
                we won't be making more until next winter.
              </p>
              
              <div className={styles.countdown}>
                <div className={styles.timeBlock}>
                  <strong>{timeLeft.days}</strong>
                  <span>Days</span>
                </div>
                <div className={styles.colon}>:</div>
                <div className={styles.timeBlock}>
                  <strong>{timeLeft.hours}</strong>
                  <span>Hrs</span>
                </div>
                <div className={styles.colon}>:</div>
                <div className={styles.timeBlock}>
                  <strong>{timeLeft.mins}</strong>
                  <span>Mins</span>
                </div>
              </div>
              
              <span className={styles.hurryText}>Time left to order this batch</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewBatch;