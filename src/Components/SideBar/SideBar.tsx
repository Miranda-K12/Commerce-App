import { useState } from 'react';
import styles from './Sidebar.module.css';
import UpArrow from '../../assets/Images/up-arrow.svg'; 
import DownArrow from '../../assets/Images/bottom-arrow.svg'; 
import { category, brands } from './data'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleCategory = () => {
    setIsOpen((prevState) => !prevState);  
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_categories}>
        <div className={styles.sidebar_title}>
          <h3>Category</h3>
          <img 
            className={styles.sidebar_icon} 
            src={isOpen ? UpArrow : DownArrow} 
            alt="arrow-icon" 
            onClick={toggleCategory} 
          />
        </div>   
        <ul>
          {category.slice(0, isOpen ? category.length : 4).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className={styles.see_more_button} onClick={toggleCategory}>
          {isOpen ? 'See Less' : 'See More'}
        </button>
      </div>
        <div className={styles.sidebar_categories}>
        <div className={styles.sidebar_title}>
          <h3>Brand</h3>
          <img 
            className={styles.sidebar_icon} 
            src={isOpen ? UpArrow : DownArrow} 
            alt="arrow-icon" 
            onClick={toggleCategory} 
          />
        </div>   
        <ul>
          {brands.slice(0, isOpen ? brands.length : 4).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className={styles.see_more_button} onClick={toggleCategory}>
          {isOpen ? 'See Less' : 'See More'}
        </button>
      </div>
      <div className={styles.sidebar_title}>
          <h3>Price Range</h3>
          <img 
            className={styles.sidebar_icon} 
            src={isOpen ? UpArrow : DownArrow} 
            alt="arrow-icon" 
            onClick={toggleCategory} 
          />
        </div>   
      <div className={styles.sidebar_title}>
          <h3>Condition</h3>
          <img 
            className={styles.sidebar_icon} 
            src={isOpen ? UpArrow : DownArrow} 
            alt="arrow-icon" 
            onClick={toggleCategory} 
          />
        </div>   
       <div className={styles.sidebar_title}>
          <h3>Rating</h3>
          <img 
            className={styles.sidebar_icon} 
            src={isOpen ? UpArrow : DownArrow} 
            alt="arrow-icon" 
            onClick={toggleCategory} 
          />
      </div>   
       <div className={styles.sidebar_title}>
          <h3>Manufacturer</h3>
          <img 
            className={styles.sidebar_icon} 
            src={isOpen ? UpArrow : DownArrow} 
            alt="arrow-icon" 
            onClick={toggleCategory} 
          />
        </div>   
    </div>
  );
};

export default Sidebar;

