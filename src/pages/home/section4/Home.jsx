import React from 'react';
import styles from './Home.module.css';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa'; // Using FontAwesome for the quote icon

const Home4 = () => {
  const reviews = [
    {
      id: 1,
      name: "Lakshmi Narayana",
      location: "Bangalore",
      text: "I haven't tasted Avakaya this authentic since my grandmother passed away. The spice level is perfect, and the garlic pieces are crunchy. It literally took me back to my childhood summers.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg" // Dummy profile image
    },
    {
      id: 2,
      name: "Rohan Verma",
      location: "Mumbai",
      text: "Ordered the Gongura pickle and Kandi Podi. The packaging was so secure, not a drop leaked. The taste is pure nostalgia. Highly recommend for anyone missing home food.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Ananya Reddy",
      location: "Hyderabad",
      text: "The quality of the oil and spices is visibly superior to store-bought brands. You can tell it's handmade. My kids actually ask for 'pickles rice' now!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Words from our Patrons</span>
          <h2 className={styles.title}>Love from the <span className={styles.highlight}>Family Table</span></h2>
          <div className={styles.separator}></div>
        </div>

        {/* Testimonial Grid */}
        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              
              <p className={styles.reviewText}>"{review.text}"</p>
              
              <div className={styles.rating}>
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} className={styles.star} />
                ))}
              </div>

              <div className={styles.profile}>
                <img src={review.image} alt={review.name} className={styles.avatar} />
                <div className={styles.userInfo}>
                  <h4 className={styles.userName}>{review.name}</h4>
                  <span className={styles.userLocation}>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statNum}>15k+</span>
            <span className={styles.statLabel}>Happy Jars Sold</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>4.9/5</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Repeat Customers</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home4;