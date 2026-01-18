import React, { useState } from 'react';
import styles from './Account.module.css';
import { FiPackage, FiMapPin, FiUser, FiLogOut, FiBox, FiChevronRight, FiEdit2 } from 'react-icons/fi';

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock User Data
  const user = {
    name: "Arjun Rao",
    email: "arjun.rao@example.com",
    phone: "+91 98765 43210",
    initials: "AR"
  };

  // Mock Order Data
  const orders = [
    {
      id: "ORD-2024-8901",
      date: "Dec 15, 2024",
      status: "Delivered",
      total: "₹1,240",
      items: ["Avakaya (500g)", "Gongura (250g)", "Kandi Podi (200g)"]
    },
    {
      id: "ORD-2024-7622",
      date: "Nov 02, 2024",
      status: "Processing",
      total: "₹350",
      items: ["Pandu Mirchi (500g)"]
    }
  ];

  // Mock Address Data
  const address = {
    type: "Home",
    street: "Flat 402, Green Meadows, Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    zip: "500033"
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Order History</h2>
            {orders.length > 0 ? (
              <div className={styles.orderList}>
                {orders.map((order) => (
                  <div key={order.id} className={styles.orderCard}>
                    <div className={styles.orderHeader}>
                      <div>
                        <span className={styles.orderId}>#{order.id}</span>
                        <span className={styles.orderDate}>{order.date}</span>
                      </div>
                      <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                        {order.status}
                      </span>
                    </div>
                    
                    <div className={styles.orderItems}>
                      {order.items.join(", ")}
                    </div>
                    
                    <div className={styles.orderFooter}>
                      <span className={styles.orderTotal}>Total: <strong>{order.total}</strong></span>
                      <button className={styles.viewBtn}>View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No orders placed yet.</p>
            )}
          </div>
        );

      case 'addresses':
        return (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Saved Addresses</h2>
            <div className={styles.addressGrid}>
              {/* Existing Address Card */}
              <div className={styles.addressCard}>
                <div className={styles.addrHeader}>
                  <span className={styles.addrType}>{address.type}</span>
                  <button className={styles.editBtn}><FiEdit2 /></button>
                </div>
                <p>{user.name}</p>
                <p>{address.street}</p>
                <p>{address.city}, {address.state} - {address.zip}</p>
                <p>{user.phone}</p>
              </div>

              {/* Add New Address Button */}
              <button className={styles.addAddressBtn}>
                <span>+</span> Add New Address
              </button>
            </div>
          </div>
        );

      case 'dashboard':
      default:
        return (
          <div className={styles.tabContent}>
            <div className={styles.welcomeBanner}>
              <div className={styles.avatar}>{user.initials}</div>
              <div>
                <h2>Hello, {user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>

            <div className={styles.dashboardStats}>
              <div className={styles.statCard}>
                <FiBox className={styles.statIcon} />
                <div className={styles.statInfo}>
                  <strong>{orders.length}</strong>
                  <span>Total Orders</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <FiMapPin className={styles.statIcon} />
                <div className={styles.statInfo}>
                  <strong>1</strong>
                  <span>Saved Address</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <h1 className={styles.pageTitle}>My Account</h1>

        <div className={styles.layout}>
          
          {/* Sidebar Navigation */}
          <aside className={styles.sidebar}>
            <nav className={styles.navMenu}>
              <button 
                className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <FiUser /> Dashboard <FiChevronRight className={styles.arrow} />
              </button>
              
              <button 
                className={`${styles.navItem} ${activeTab === 'orders' ? styles.active : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <FiPackage /> Orders <FiChevronRight className={styles.arrow} />
              </button>
              
              <button 
                className={`${styles.navItem} ${activeTab === 'addresses' ? styles.active : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <FiMapPin /> Addresses <FiChevronRight className={styles.arrow} />
              </button>
              
              <button className={`${styles.navItem} ${styles.logout}`}>
                <FiLogOut /> Logout
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className={styles.mainContent}>
            {renderContent()}
          </main>

        </div>
      </div>
    </div>
  );
};

export default Account;