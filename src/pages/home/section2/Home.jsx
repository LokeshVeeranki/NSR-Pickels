import React from 'react';
import styles from './Home.module.css';
import { FiShoppingBag, FiStar, FiHeart, FiEye } from 'react-icons/fi';

const Home2 = () => {
  // Dummy Data for Best Sellers
  const products = [
    {
      id: 1,
      name: "Classic Avakaya",
      tagline: "The King of Pickles",
      price: "₹350",
      rating: 5.0,
      reviews: 128,
      image: "https://jandhyalafoods.in/wp-content/uploads/2021/12/Avakaya-mob-4.jpg", // Replace with real image
      isNew: false,
    },
    {
      id: 2,
      name: "Gongura Pickle",
      tagline: "Tangy Sorrel Leaves",
      price: "₹320",
      rating: 4.8,
      reviews: 96,
      image: "https://tulasipickles.com/wp-content/uploads/2024/11/Gongura.jpg",
      isNew: true,
    },
    {
      id: 3,
      name: "Spicy Garlic (Allam)",
      tagline: "Bold & Pungent",
      price: "₹340",
      rating: 4.9,
      reviews: 84,
      image: "https://jandhyalafoods.in/wp-content/uploads/2022/01/Allam-Pachchadi-mob-4.jpg",
      isNew: false,
    },
    {
      id: 4,
      name: "Chicken Pickle",
      tagline: "Savory Delight",
      price: "₹250",
      rating: 5.0,
      reviews: 210,
      image: "https://m.media-amazon.com/images/X/bxt1/M/rbxt1RaiMBxzUks._SL828_QL90_FMwebp_.jpg",
      isNew: false,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.subtitle}>Our Masterpieces</span>
            <h2 className={styles.title}>NSR's Favorites</h2>
          </div>
          <a href="/shop" className={styles.viewAllBtn}>View All Products</a>
        </div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              
              {/* Image Area */}
              <div className={styles.imageWrapper}>
                {product.isNew && <span className={styles.badge}>New Batch</span>}
                <img src={product.image} alt={product.name} className={styles.productImg} />
                
                {/* Overlay Actions (Visible on Hover) */}
                <div className={styles.overlay}>
                  <button className={styles.actionBtn} aria-label="Add to Wishlist"><FiHeart /></button>
                  <button className={styles.actionBtn} aria-label="Quick View"><FiEye /></button>
                </div>
              </div>

              {/* Details Area */}
              <div className={styles.details}>
                <div className={styles.rating}>
                  <FiStar className={styles.starIcon} />
                  <span>{product.rating}</span>
                  <span className={styles.reviewCount}>({product.reviews} reviews)</span>
                </div>
                
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productTagline}>{product.tagline}</p>
                
                <div className={styles.bottomRow}>
                  <span className={styles.price}>{product.price}</span>
                  <button className={styles.cartBtn}>
                    Add <FiShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Home2;