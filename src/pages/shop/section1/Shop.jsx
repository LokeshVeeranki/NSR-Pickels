import React, { useState } from 'react';
import styles from './Shop.module.css';
import { FiFilter, FiChevronDown, FiSearch, FiX, FiShoppingBag, FiHeart } from 'react-icons/fi';
import { GiChiliPepper } from 'react-icons/gi';

const Shop = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(1000); // Max price
  const [selectedSpice, setSelectedSpice] = useState([]);

  // Mock Product Data
  const products = [
    {
      id: 1,
      name: "Classic Avakaya",
      category: "Pickles",
      price: 350,
      image: "https://vanisweets.com/wp-content/uploads/2023/06/avakaya.jpeg",
      spice: 3,
      inStock: true
    },
    {
      id: 2,
      name: "Gongura Pachadi",
      category: "Pickles",
      price: 320,
      image: "https://aarogyamastu.in/wp-content/uploads/2022/06/gongura-pickle-e1671970585808.jpg",
      spice: 2,
      inStock: true
    },
    {
      id: 3,
      name: "Kandi Podi",
      category: "Podis",
      price: 250,
      image: "https://www.vahrehvah.com/indianfood_org/wp-content/uploads/2010/12/ygVUQXjHId.jpg",
      spice: 1,
      inStock: true
    },
    {
      id: 4,
      name: "Bellam Avakaya",
      category: "Sweets",
      price: 380,
      image: "https://vellankifoods.com/cdn/shop/products/sweet_mango_pickle_bellam_avakaya_pickles_1200x1200.jpg?v=1680181742",
      spice: 1,
      inStock: true
    },
    {
      id: 5,
      name: "Pandu Mirchi",
      category: "Pickles",
      price: 395,
      image: "https://i.ytimg.com/vi/0xh7srRpXsI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCrJ9W_FTyG_cJ1ZhJBw9CH82dxIg",
      spice: 3,
      inStock: true
    },
    {
      id: 6,
      name: "Karivepaku Podi",
      category: "Podis",
      price: 260,
      image: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Karivepaku-Podi-2-3.jpg",
      spice: 1,
      inStock: true
    },
    {
      id: 7,
      name: "Nimmakaya (Lemon)",
      category: "Pickles",
      price: 300,
      image: "https://i.ytimg.com/vi/TmNRGk3oroE/maxresdefault.jpg",
      spice: 2,
      inStock: false // Out of stock demo
    },
    {
      id: 8,
      name: "Sun-Dried Chillies",
      category: "Fryums",
      price: 150,
      image: "https://girijapaati.com/cdn/shop/products/more-milagai-dried-IMG_6118-960.jpg?v=1679566906&width=1214",
      spice: 2,
      inStock: true
    }
  ];

  // Simple Filtering Logic
  const filteredProducts = products.filter(product => {
    // Category Filter
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
    // Price Filter
    if (product.price > priceRange) return false;
    // Spice Filter (if any selected)
    if (selectedSpice.length > 0 && !selectedSpice.includes(product.spice)) return false;
    
    return true;
  });

  const toggleSpice = (level) => {
    setSelectedSpice(prev => 
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>The <span className={styles.accent}>Pantry</span></h1>
          <p className={styles.subtitle}>
            From spicy Avakayas to nutrient-dense Podis. Everything handmade.
          </p>
        </div>

        {/* Toolbar (Mobile Toggle & Sort) */}
        <div className={styles.toolbar}>
          <button 
            className={styles.mobileFilterBtn} 
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <FiFilter /> Filter & Sort
          </button>
          
          <div className={styles.resultCount}>
            Showing {filteredProducts.length} results
          </div>

          <div className={styles.sortWrapper}>
            <span>Sort by:</span>
            <select className={styles.sortSelect}>
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>

        <div className={styles.layout}>
          
          {/* SIDEBAR FILTERS (Desktop + Mobile Drawer) */}
          <aside className={`${styles.sidebar} ${isMobileFilterOpen ? styles.mobileOpen : ''}`}>
            
            <div className={styles.sidebarHeader}>
              <h3>Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)}><FiX /></button>
            </div>

            {/* 1. Categories */}
            <div className={styles.filterGroup}>
              <h4 className={styles.filterTitle}>Category</h4>
              <ul className={styles.catList}>
                {['All', 'Pickles', 'Podis', 'Sweets', 'Fryums'].map(cat => (
                  <li key={cat}>
                    <button 
                      className={selectedCategory === cat ? styles.activeCat : ''}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Spice Level */}
            <div className={styles.filterGroup}>
              <h4 className={styles.filterTitle}>Spice Level</h4>
              <div className={styles.spiceOptions}>
                {[1, 2, 3].map(level => (
                  <label key={level} className={styles.checkboxLabel}>
                    <input 
                      type="checkbox" 
                      checked={selectedSpice.includes(level)}
                      onChange={() => toggleSpice(level)}
                    />
                    <div className={styles.spiceVisual}>
                      {[...Array(level)].map((_, i) => <GiChiliPepper key={i} />)}
                      <span>{level === 1 ? 'Mild' : level === 2 ? 'Medium' : 'Hot'}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Price Range */}
            <div className={styles.filterGroup}>
              <h4 className={styles.filterTitle}>Max Price: ₹{priceRange}</h4>
              <input 
                type="range" 
                min="100" 
                max="1000" 
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className={styles.rangeSlider}
              />
              <div className={styles.rangeLabels}>
                <span>₹100</span>
                <span>₹1000+</span>
              </div>
            </div>

          </aside>

          {/* PRODUCT GRID */}
          <main className={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className={styles.card}>
                  
                  {/* Image */}
                  <div className={styles.imageWrapper}>
                    {!product.inStock && <span className={styles.outOfStock}>Sold Out</span>}
                    <img src={product.image} alt={product.name} className={product.inStock ? '' : styles.faded} />
                    
                    {product.inStock && (
                      <div className={styles.overlayActions}>
                        <button aria-label="Add to Cart"><FiShoppingBag /></button>
                        <button aria-label="Wishlist"><FiHeart /></button>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className={styles.cardInfo}>
                    <span className={styles.cardCat}>{product.category}</span>
                    <h3 className={styles.cardName}>{product.name}</h3>
                    
                    {/* Spice Meter Small */}
                    <div className={styles.miniSpice} title="Spice Level">
                      {[...Array(3)].map((_, i) => (
                        <GiChiliPepper 
                          key={i} 
                          className={i < product.spice ? styles.activeChili : styles.inactiveChili} 
                        />
                      ))}
                    </div>

                    <div className={styles.cardFooter}>
                      <span className={styles.price}>₹{product.price}</span>
                      {product.inStock ? (
                        <button className={styles.addBtn}>Add</button>
                      ) : (
                        <button className={styles.notifyBtn}>Notify</button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                <h3>No products found</h3>
                <p>Try adjusting your filters.</p>
                <button onClick={() => {setSelectedCategory('All'); setPriceRange(1000); setSelectedSpice([]);}}>
                  Clear Filters
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default Shop;