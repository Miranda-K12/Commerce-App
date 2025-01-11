import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';
import { useEffect, useState} from 'react';
import useProducts from '../../store/ProductContext';
import EmailIcon from '../../assets/Images/email.svg';
import RightArrow from '../../assets/Images/right-arrow.svg';
import WishedProduct from '../../assets/Images/grey-heart.svg';
import MenuIcon from '../../assets/Images/navigation.svg';
import SortingIcon from '../../assets/Images/sort-icon.png';
import StarRating from '../../Components/Rating/Rating';
import Sidebar from '../../Components/SideBar/SideBar';

const Home = () => {
  const menu = ['Home', 'Clothings', 'Men’s wear', 'Summer clothing'];
  const { data, fetchProducts, loading, error } = useProducts();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className={styles.home}>
        <div className={styles.menu}>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                {item}
                <img className={styles.menu_icon} src={RightArrow} alt="arrow-icon" />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.home_layout}>
          <Sidebar />
          <div className={styles.product_wrapper}>
            <div className={styles.product_container_menu}>
              <p>
                12,911 items in <span className={styles.span_element}>Mobile accessory</span>
              </p>
              <div className={styles.filterSection}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                />
                <p>Verified Only</p>
                <select className={styles.features} name="filter">
                  <option value="featured">Featured</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                  <option value="rating">Sort by Rating</option>
                </select>
                <img className={styles.nav_icon} src={SortingIcon} alt="sort-icon" />
                <img className={styles.nav_icon} src={MenuIcon} alt="menu-icon" />
              </div>
            </div>
            <div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for products"
                className={styles.search_input}
              />
            </div>
            <div className={styles.product_container}>
              {filteredData.map((product) => (
                <NavLink to={`/product/${product.id}`} key={product.id} className={styles.product_card}>
                  <div>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className={styles.product_card_img}
                    />
                    <div className={styles.product_price_box}>
                      <p className={styles.product_price}>${product.price}</p>
                      <p className={styles.product_discount}>Disc {product.discountPercentage}%</p>
                    </div>
                    <div className={styles.product_rating_box}>
                      <StarRating rating={product.rating} />
                      <p className={styles.product_rating}>{product.rating}</p>
                    </div>
                    <h3>{product.title}</h3>
                    <img src={WishedProduct} alt={product.title} className={styles.heart_icon} />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact_box}>
        <div className={styles.contact_text}>
          <h3>Subscribe to our newsletter</h3>
          <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        </div>
        <div className={styles.contact_container}>
          <img className={styles.email_icon} src={EmailIcon} alt="email-icon" />
          <input type="text" className={styles.contact_input} placeholder="Email" />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;