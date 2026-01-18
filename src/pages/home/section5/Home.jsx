import React from 'react';
import styles from './Home.module.css';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';

const Home5 = () => {
  const blogs = [
    {
      id: 1,
      category: "Recipes",
      title: "The Ultimate Curd Rice & Avakaya Combo",
      excerpt: "Why this humble pairing is considered the ultimate comfort food in every Telugu household.",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      image: "https://t4.ftcdn.net/jpg/04/53/08/63/360_F_453086324_bEodi7wVsE9dQNroB8sglehfANhubZP2.jpg"
    },
    {
      id: 2,
      category: "Tips & Tricks",
      title: "How to Keep Your Pickles Fresh for a Year",
      excerpt: "Grandma’s secret rule: 'Never use a wet spoon.' Here are 5 more tips to prevent fungus.",
      date: "Sep 28, 2024",
      readTime: "3 min read",
      image: "https://i.ytimg.com/vi/1xWtTusVgvE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCe0b_7AQkcGi2vq9CnFqiCcjeCQ"
    },
    {
      id: 3,
      category: "Heritage",
      title: "The Story Behind 'Gongura': The Green Gold",
      excerpt: "Tracing the history of Sorrel leaves and why it holds a special place in Andhra cuisine.",
      date: "Aug 15, 2024",
      readTime: "6 min read",
      image: "https://patnamlopalleruchulu.in/wp-content/uploads/2024/09/MUTTON-BONLESS-580x480.jpg"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>From the <span className={styles.italic}>Journal</span></h2>
          <p className={styles.subtitle}>Recipes, stories, and kitchen secrets.</p>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                <span className={styles.categoryBadge}>{blog.category}</span>
              </div>
              
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.metaItem}><FiClock /> {blog.readTime}</span>
                  <span className={styles.metaItem}>{blog.date}</span>
                </div>
                
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.excerpt}>{blog.excerpt}</p>
                
                <a href="/blog/post-1" className={styles.readMore}>
                  Read Story <FiArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home5;