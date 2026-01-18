import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiShoppingBag, FiShield, FiTruck } from 'react-icons/fi';

const Cart = () => {
  // Dummy Data for Cart Items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Avakaya Pickle",
      variant: "500g",
      price: 350,
      image: "https://vanisweets.com/wp-content/uploads/2023/06/avakaya.jpeg",
      quantity: 1
    },
    {
      id: 2,
      name: "Gongura Pachadi",
      variant: "250g",
      price: 180,
      image: "https://aarogyamastu.in/wp-content/uploads/2022/06/gongura-pickle-e1671970585808.jpg",
      quantity: 2
    },
    {
      id: 3,
      name: "Kandi Podi (Gunpowder)",
      variant: "200g",
      price: 150,
      image: "https://www.vahrehvah.com/indianfood_org/wp-content/uploads/2010/12/ygVUQXjHId.jpg",
      quantity: 1
    }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const FREE_SHIPPING_THRESHOLD = 999;
  const SHIPPING_COST = 50;

  // Calculate Subtotal whenever items change
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [cartItems]);

  // Handle Quantity Change
  const updateQuantity = (id, type) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const newQty = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: newQty < 1 ? 1 : newQty };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Handle Remove Item
  const removeItem = (id) => {
    const filteredItems = cartItems.filter(item => item.id !== id);
    setCartItems(filteredItems);
  };

  // Shipping Logic
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCharge = isFreeShipping ? 0 : SHIPPING_COST;
  const grandTotal = subtotal + shippingCharge;
  const amountNeededForFreeShip = FREE_SHIPPING_THRESHOLD - subtotal;

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCartPage}>
        <div className={styles.emptyContainer}>
          <div className={styles.emptyIcon}>
            <FiShoppingBag />
          </div>
          <h2>Your pantry is empty!</h2>
          <p>Looks like you haven't added any of Grandma's favorites yet.</p>
          <a href="/shop" className={styles.continueBtn}>Start Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <h1 className={styles.pageTitle}>Your Cart ({cartItems.length})</h1>

        <div className={styles.cartLayout}>
          
          {/* Left Column: Cart Items */}
          <div className={styles.itemsColumn}>
            
            {/* Free Shipping Progress Bar */}
            <div className={styles.shippingBar}>
              {isFreeShipping ? (
                <p className={styles.successMsg}>🎉 You've unlocked <strong>Free Shipping!</strong></p>
              ) : (
                <p>Add <strong>₹{amountNeededForFreeShip}</strong> more for Free Shipping</p>
              )}
              <div className={styles.progressBarBg}>
                <div 
                  className={styles.progressBarFill} 
                  style={{ width: `${Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            {/* List of Items */}
            <div className={styles.itemList}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  
                  <div className={styles.itemImageWrapper}>
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className={styles.itemDetails}>
                    <div className={styles.itemInfo}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <span className={styles.itemVariant}>{item.variant}</span>
                      <span className={styles.itemPrice}>₹{item.price}</span>
                    </div>

                    <div className={styles.itemActions}>
                      <div className={styles.qtySelector}>
                        <button onClick={() => updateQuantity(item.id, 'dec')}><FiMinus /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 'inc')}><FiPlus /></button>
                      </div>
                      
                      <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  
                  <div className={styles.itemTotal}>
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <a href="/shop" className={styles.backLink}>
              <FiArrowLeft /> Continue Shopping
            </a>
          </div>

          {/* Right Column: Order Summary */}
          <div className={styles.summaryColumn}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                {isFreeShipping ? (
                  <span className={styles.freeText}>FREE</span>
                ) : (
                  <span>₹{SHIPPING_COST}</span>
                )}
              </div>

              <div className={styles.divider}></div>

              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>

              <p className={styles.taxNote}>Inclusive of all taxes</p>

              <button className={styles.checkoutBtn}>
                Proceed to Checkout <FiShield className={styles.btnIcon} />
              </button>

              <div className={styles.trustBadges}>
                <div className={styles.badgeItem}>
                  <FiShield /> Secure Payment
                </div>
                <div className={styles.badgeItem}>
                  <FiTruck /> Safe Delivery
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;