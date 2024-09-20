import React, { useState } from 'react';
import '../styles/PerformanceSlider.css';

const performanceData = [
    {
      id: 1,
      icon: "fingerprint",
      title: "Customer Favorites",
      subtitle: "Customer of the month",
      images: [
        "images/products/product2-400x400.jpg",
        "images/products/product5-400x400.jpg",
        "images/products/product1-400x400.jpg"
      ],
      linkText: "Explore Products",
      link: "#",
    },
    {
      id: 2,
      icon: "inbox",
      title: "Low Stock Alerts",
      subtitle: "Items running out",
      images: [
        "images/products/product6-400x400.jpg",
        "images/products/product6-400x400.jpg",
        "images/products/product10-400x400.jpg"
      ],
      linkText: "View Inventory",
      link: "#",
    },
    {
      id: 3,
      icon: "database",
      title: "Data Storage Stats",
      subtitle: "Storage reaching capacity",
      images: [
        "images/products/product10-400x400.jpg",
        "images/products/product1-400x400.jpg",
        "images/products/product7-400x400.jpg"
      ],
      linkText: "View Data",
      link: "#",
    },
    {
      id: 4,
      icon: "trending_up",
      title: "Sales Performance",
      subtitle: "This month's best sellers",
      images: [
        "images/products/product4-400x400.jpg",
        "images/products/product3-400x400.jpg",
        "images/products/product8-400x400.jpg"
      ],
      linkText: "Check Sales",
      link: "#",
    },
    {
      id: 5,
      icon: "attach_money",
      title: "Revenue Insights",
      subtitle: "Profit growth overview",
      images: [
        "images/products/product2-400x400.jpg",
        "images/products/product4-400x400.jpg",
        "images/products/product9-400x400.jpg"
      ],
      linkText: "View Reports",
      link: "#",
    },
    {
      id: 6,
      icon: "warning",
      title: "Risk Notifications",
      subtitle: "Potential product issues",
      images: [
        "images/products/product3-400x400.jpg",
        "images/products/product5-400x400.jpg",
        "images/products/product6-400x400.jpg"
      ],
      linkText: "View Alerts",
      link: "#",
    },
    {
      id: 7,
      icon: "show_chart",
      title: "Market Trends",
      subtitle: "Market changes affecting sales",
      images: [
        "images/products/product1-400x400.jpg",
        "images/products/product7-400x400.jpg",
        "images/products/product8-400x400.jpg"
      ],
      linkText: "Explore Trends",
      link: "#",
    },
    {
      id: 8,
      icon: "store",
      title: "Store Insights",
      subtitle: "Best-performing branches",
      images: [
        "images/products/product9-400x400.jpg",
        "images/products/product2-400x400.jpg",
        "images/products/product10-400x400.jpg"
      ],
      linkText: "Check Branches",
      link: "#",
    },
    {
      id: 9,
      icon: "inventory",
      title: "Product Inventory",
      subtitle: "Most stocked products",
      images: [
        "images/products/product3-400x400.jpg",
        "images/products/product4-400x400.jpg",
        "images/products/product5-400x400.jpg"
      ],
      linkText: "Check Inventory",
      link: "#",
    },
    {
      id: 10,
      icon: "event",
      title: "Upcoming Events",
      subtitle: "Marketing campaigns",
      images: [
        "images/products/product7-400x400.jpg",
        "images/products/product8-400x400.jpg",
        "images/products/product9-400x400.jpg"
      ],
      linkText: "View Events",
      link: "#",
    }
  ];
  

const ITEMS_PER_PAGE = 4;

const PerformanceSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(performanceData.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentItems = performanceData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="performance-slider">
      <div className="slider-header">
        <h2>Performance Insights</h2>
        <div className="slider-controls">
          <button onClick={handlePrev} className="slider-button">
            <i className="chevron-left">Left</i>
          </button>
          <button onClick={handleNext} className="slider-button">
            <i className="chevron-right">right</i>
          </button>
        </div>
      </div>
      <div className="slider-content">
        {currentItems.map((item) => (
          <div key={item.id} className="slider-item">
            <div className='First-Part'>
            <div className="icon-box">
              <i className={`icon-${item.icon}`} />
            </div>
            <div className="image-group">
              {item.images.map((img, idx) => (
                <img
                  key={idx}
                  className="item-image"
                  src={process.env.PUBLIC_URL + '/' + img}
                  alt={`Product ${idx + 1}`}
                />
              ))}
            </div>
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <a href={item.link} className="item-link">
                {item.linkText} <i className="arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceSlider;
