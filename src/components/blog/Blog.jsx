import React, { useState } from 'react';
import styles from './Blog.module.css';
import { FiArrowRight, FiClock, FiSearch, FiTag } from 'react-icons/fi';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories
  const categories = ["All", "Recipes", "Kitchen Tips", "Heritage"];

  // Mock Data
  const allPosts = [
    {
      id: 1,
      title: "The Art of Sun-Drying: Why Patience is the Secret Ingredient",
      excerpt: "In a world of industrial dehydrators, we stick to the terrace and the Deccan sun. Here is why the UV rays matter for that perfect crunch.",
      category: "Heritage",
      date: "Oct 15, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
      isFeatured: true
    },
    {
      id: 2,
      title: "Spicy Gongura Mutton Curry",
      excerpt: "Don't have time to cook from scratch? Use 2 spoons of our Gongura pickle to transform your Sunday mutton curry.",
      category: "Recipes",
      date: "Nov 02, 2024",
      readTime: "4 min read",
      image: "https://vismaifood.com/storage/app/uploads/public/2c5/799/6ff/thumb__1200_0_0_0_auto.jpg",
      isFeatured: false
    },
    {
      id: 3,
      title: "5 Mistakes That Spoil Your Pickle Jar",
      excerpt: "Is your pickle getting fungus? You might be using a wet spoon. Here are grandma's 5 golden rules for storage.",
      category: "Kitchen Tips",
      date: "Sep 28, 2024",
      readTime: "3 min read",
      image: "https://assets.zeezest.com/blogs/PROD_Id-1217-condiments-summer-pickle-banner_1624632371890_thumb_1200.jpeg",
      isFeatured: false
    },
    {
      id: 4,
      title: "The Story of the 'Jaadi' (Ceramic Jar)",
      excerpt: "Why do we store pickles in ceramic or glass, never plastic? The science behind the traditional Jaadi.",
      category: "Heritage",
      date: "Aug 10, 2024",
      readTime: "5 min read",
      image: "https://ykantiques.com/wp-content/uploads/2014/12/105.jpg",
      isFeatured: false
    },
    {
      id: 5,
      title: "Quick Breakfast Hacks with Kandi Podi",
      excerpt: "Running late? A spoon of Kandi Podi and ghee can turn plain rice or idli into a protein-packed breakfast.",
      category: "Recipes",
      date: "Jul 22, 2024",
      readTime: "3 min read",
      image: "https://wordsmithkaur.com/wp-content/uploads/2022/05/Button-Idli-with-Podi.jpeg",
      isFeatured: false
    }
  ];

  const featuredPost = allPosts.find(post => post.isFeatured);
  const gridPosts = allPosts
    .filter(post => !post.isFeatured)
    .filter(post => activeCategory === 'All' || post.category === activeCategory);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* Page Header */}
        <header className={styles.header}>
          <span className={styles.supHeader}>Recipes & Stories</span>
          <h1 className={styles.title}>Grandma's <span className={styles.accent}>Journal</span></h1>
          <p className={styles.subtitle}>
            A collection of culinary secrets, forgotten traditions, and delicious ways 
            to use ManaRuculu in your daily cooking.
          </p>
        </header>

        {/* Featured Post (Hero) */}
        {featuredPost && activeCategory === 'All' && (
          <div className={styles.featuredSection}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <img src={featuredPost.image} alt={featuredPost.title} className={styles.featuredImage} />
                <span className={styles.featuredBadge}>Featured Story</span>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.meta}>
                  <span className={styles.category}>{featuredPost.category}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.date}>{featuredPost.date}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <a href="#" className={styles.readBtn}>Read Full Story <FiArrowRight /></a>
              </div>
            </div>
          </div>
        )}

        {/* Toolbar: Search & Categories */}
        <div className={styles.toolbar}>
          <div className={styles.categories}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.catBtn} ${activeCategory === cat ? styles.activeCat : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input type="text" placeholder="Search recipes..." />
          </div>
        </div>

        {/* Blog Grid */}
        <div className={styles.grid}>
          {gridPosts.map(post => (
            <article key={post.id} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img src={post.image} alt={post.title} className={styles.cardImage} />
                <span className={styles.cardCategory}><FiTag /> {post.category}</span>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span>{post.date}</span>
                  <span className={styles.readTime}><FiClock /> {post.readTime}</span>
                </div>
                
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                
                <a href="#" className={styles.cardLink}>Read More</a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Box */}
        <div className={styles.newsletterBox}>
          <h3>Don't miss a recipe!</h3>
          <p>Join 5000+ home cooks receiving weekly tips.</p>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;