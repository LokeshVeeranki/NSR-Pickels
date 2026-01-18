import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import {
  FiShoppingBag,
  FiSearch,
  FiMenu,
  FiX,
  FiUser,
  FiChevronRight,
} from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  const navLinkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ""}`;

  return (
    <>
      {/* FIXED WRAPPER */}
      <div
        className={`${styles.fixedWrapper} ${
          isScrolled ? styles.scrolledMode : ""
        }`}
      >
        {/* Announcement Bar */}
        <div className={styles.announcementBar}>
          <span>🌿 Authentic Homemade Flavors | Free Shipping on Orders ₹999+</span>
        </div>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.container}>
            {/* Mobile Menu Button */}
            <button
              className={styles.mobileToggle}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <FiMenu />
            </button>

            {/* Desktop Left Nav */}
            <nav className={`${styles.desktopNav} ${styles.leftNav}`}>
              <NavLink to="/shop" className={navLinkClass}>
                Shop All
              </NavLink>
              <NavLink to="/bestsellers" className={navLinkClass}>
                Best Sellers
              </NavLink>
              <NavLink to="/new" className={navLinkClass}>
                New Batch
              </NavLink>
            </nav>

            {/* Logo */}
            <NavLink to="/" className={styles.logoContainer}>
              <span className={styles.logoText}>
                NSR<span className={styles.logoAccent}>Pickels</span>
              </span>
              <span className={styles.logoTagline}>TRADITION IN A JAR</span>
            </NavLink>

            {/* Desktop Right Nav + Icons */}
            <div className={styles.actions}>
              <nav className={`${styles.desktopNav} ${styles.rightNav}`}>
                <NavLink to="/story" className={navLinkClass}>
                  Our Story
                </NavLink>
                <NavLink to="/blog" className={navLinkClass}>
                  Recipes
                </NavLink>
              </nav>

              <div className={styles.iconGroup}>
                <button
                  className={styles.iconBtn}
                  onClick={toggleSearch}
                  aria-label="Search"
                >
                  <FiSearch />
                </button>

                <NavLink
                  to="/account"
                  className={`${styles.iconBtn} ${styles.hideOnMobile}`}
                  aria-label="Account"
                >
                  <FiUser />
                </NavLink>

                <NavLink
                  to="/cart"
                  className={styles.iconBtn}
                  aria-label="Cart"
                >
                  <FiShoppingBag />
                  <span className={styles.cartBadge}>2</span>
                </NavLink>
              </div>
            </div>
          </div>
        </header>

        {/* Search Overlay */}
        <div
          className={`${styles.searchOverlay} ${
            isSearchOpen ? styles.searchActive : ""
          }`}
        >
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for Avakaya, Gongura..."
              autoFocus={isSearchOpen}
            />
            <button
              className={styles.closeSearch}
              onClick={toggleSearch}
              aria-label="Close Search"
            >
              <FiX />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className={styles.headerSpacer} />

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Drawer */}
      <aside
        className={`${styles.mobileDrawer} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>
            NSR<span className={styles.logoAccent}>Pickels</span>
          </span>
          <button onClick={toggleMenu} className={styles.closeBtn}>
            <FiX />
          </button>
        </div>

        <div className={styles.mobileScrollArea}>
          <ul className={styles.mobileLinks}>
            <li>
              <NavLink to="/" className={styles.mobileLink} onClick={toggleMenu}>
                Home <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={styles.mobileLink}
                onClick={toggleMenu}
              >
                Shop All Pickles <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/podis"
                className={styles.mobileLink}
                onClick={toggleMenu}
              >
                Podis & Powders <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sweets"
                className={styles.mobileLink}
                onClick={toggleMenu}
              >
                Sweets <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gifts"
                className={styles.mobileLink}
                onClick={toggleMenu}
              >
                Gift Boxes <FiChevronRight />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/story"
                className={styles.mobileLink}
                onClick={toggleMenu}
              >
                Our Story <FiChevronRight />
              </NavLink>
            </li>
          </ul>

          <div className={styles.drawerPromo}>
            <p>Need Help? Call Grandma!</p>
            <a href="tel:+919876543210" className={styles.promoLink}>
              +91 98765 43210
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
