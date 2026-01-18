import React, { useState } from 'react';
import styles from './BestSellers.module.css';
import { FiShoppingBag, FiFilter, FiStar, FiChevronDown } from 'react-icons/fi';
import { GiChiliPepper } from 'react-icons/gi'; // Using GameIcons for Chillies

const BestSellers = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ["All", "Pickles", "Podis", "Sweets"];

  // Mock Data
  const products = [
    {
      id: 1,
      name: "Classic Avakaya",
      category: "Pickles",
      price: 350,
      weight: "500g",
      rating: 5.0,
      reviews: 1240,
      spiceLevel: 3, // 1 to 3 chillies
      image: "https://images.unsplash.com/photo-1621820668046-24df927083a2?q=80&w=600&auto=format&fit=crop",
      badge: "Most Loved"
    },
    {
      id: 2,
      name: "Gongura Pachadi",
      category: "Pickles",
      price: 320,
      weight: "500g",
      rating: 4.8,
      reviews: 856,
      spiceLevel: 2,
      image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop",
      badge: "Trending"
    },
    {
      id: 3,
      name: "Kandi Podi",
      category: "Podis",
      price: 250,
      weight: "250g",
      rating: 4.9,
      reviews: 630,
      spiceLevel: 1,
      image: "https://t4.ftcdn.net/jpg/04/18/34/77/360_F_418347781_M6t7C0rB5e31yvj1qg1u3u1y1u1y1u1.jpg",
      badge: null
    },
    {
      id: 4,
      name: "Allam (Ginger) Pickle",
      category: "Pickles",
      price: 340,
      weight: "500g",
      rating: 4.7,
      reviews: 420,
      spiceLevel: 3,
      image: "https://img.freepik.com/premium-photo/indian-pickle-jar-with-red-chili-spices_130777-10.jpg?w=800",
      badge: null
    },
    {
      id: 5,
      name: "Nimmakaya (Lemon)",
      category: "Pickles",
      price: 300,
      weight: "500g",
      rating: 4.6,
      reviews: 310,
      spiceLevel: 1,
      image: "https://images.unsplash.com/photo-1589135233689-d53805b0a34b?q=80&w=600&auto=format&fit=crop",
      badge: null
    },
    {
      id: 6,
      name: "Bellam Avakaya",
      category: "Sweets",
      price: 380,
      weight: "500g",
      rating: 5.0,
      reviews: 215,
      spiceLevel: 1,
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=600&auto=format&fit=crop",
      badge: "Sweet & Spicy"
    }
  ];

  // Filter Logic
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Helper to render spice meter
  const renderSpice = (level) => {
    return (
      <div className={styles.spiceMeter} title={`Spice Level: ${level}/3`}>
        {[...Array(3)].map((_, i) => (
          <GiChiliPepper 
            key={i} 
            className={`${styles.chiliIcon} ${i < level ? styles.activeChili : styles.inactiveChili}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>The Hall of <span className={styles.accent}>Fame</span></h1>
          <p className={styles.subtitle}>
            Tried, tested, and loved by over 15,000 families. These are the jars that 
            never stay on the shelf for too long.
          </p>
        </div>

        {/* Toolbar: Filters & Sort */}
        <div className={styles.toolbar}>
          
          {/* Category Tabs */}
          <div className={styles.filterTabs}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`${styles.tabBtn} ${activeCategory === cat ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown (Visual Only) */}
          <div className={styles.sortWrapper}>
            <span className={styles.sortLabel}>Sort by:</span>
            <button className={styles.sortBtn}>
              Popularity <FiChevronDown />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              
              {/* Image Area */}
              <div className={styles.imageWrapper}>
                {product.badge && <span className={styles.badge}>{product.badge}</span>}
                <img src={product.image} alt={product.name} className={styles.productImg} />
                <button className={styles.quickAddBtn}>
                  <FiShoppingBag /> Quick Add
                </button>
              </div>

              {/* Details Area */}
              <div className={styles.details}>
                <div className={styles.metaTop}>
                  <div className={styles.rating}>
                    <FiStar className={styles.star} /> {product.rating} 
                    <span className={styles.reviews}>({product.reviews})</span>
                  </div>
                  {renderSpice(product.spiceLevel)}
                </div>

                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.weight}>{product.weight} Jar</p>

                <div className={styles.priceRow}>
                  <span className={styles.price}>₹{product.price}</span>
                  <button className={styles.buyBtn}>Add to Cart</button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Load More (Visual) */}
        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreBtn}>Load More Products</button>
        </div>

      </div>
    </div>
  );
};

export default BestSellers;