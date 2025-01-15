import { useState, useCallback} from 'react';
import styles from './SideBar.module.css';
import UpArrow from '../../assets/Images/up-arrow.svg'; 
import DownArrow from '../../assets/Images/bottom-arrow.svg'; 
import { category, brands } from './data'; 

const Sidebar = () => {
const [openCategories, setOpenCategories] = useState({ category: false, brand: false });
const toggleCategory = useCallback((category: 'category' | 'brand') => {
    setOpenCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  }, []);

   return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_categories}>
        <div className={styles.sidebar_title}>
          <h3>Category</h3>
          <img 
            className={styles.sidebar_icon} 
            src={openCategories.category ? UpArrow : DownArrow} 
            alt="arrow-icon" 
            onClick={() => toggleCategory('category')} 
          />
        </div>
       <ul>
  {category.slice(0, openCategories.category ? category.length : 4).map((item, index) => (
    <li key={index}>
      <label>
        <input type="checkbox" /> {item}
      </label>
    </li>
  ))}
</ul>
        <button className={styles.see_more_button} onClick={() => toggleCategory('category')}>
          {openCategories.category ? 'See Less' : 'See More'}
        </button>
      </div>
      <div className={styles.sidebar_categories}>
        <div className={styles.sidebar_title}>
          <h3>Brand</h3>
          <img 
            className={styles.sidebar_icon} 
            src={openCategories.brand ? UpArrow : DownArrow} 
            alt="arrow-icon" 
            onClick={() => toggleCategory('brand')} 
          />
        </div>
      <ul>
  {brands.slice(0, openCategories.brand ? brands.length : 4).map((item, index) => (
    <li key={index}>
      <label>
        <input type="checkbox" /> {item}
      </label>
    </li>
  ))}
</ul>
        <button className={styles.see_more_button} onClick={() => toggleCategory('brand')}>
          {openCategories.brand ? 'See Less' : 'See More'}
        </button>
      </div>

      <div className={styles.sidebar_title}>
        <h3>Price Range</h3>
        <img className={styles.sidebar_icon} src={DownArrow} alt="arrow-icon" />
      </div>
      <div className={styles.sidebar_title}>
        <h3>Condition</h3>
        <img className={styles.sidebar_icon} src={DownArrow} alt="arrow-icon" />
      </div>
      <div className={styles.sidebar_title}>
        <h3>Rating</h3>
        <img className={styles.sidebar_icon} src={DownArrow} alt="arrow-icon" />
      </div>
      <div className={styles.sidebar_title}>
        <h3>Manufacturer</h3>
        <img className={styles.sidebar_icon} src={DownArrow} alt="arrow-icon" />
      </div>
    </div>
  );
};

export default Sidebar;