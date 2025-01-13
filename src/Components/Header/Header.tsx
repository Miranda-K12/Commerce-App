import Logo from '../../assets/Images/logo.svg';
import styles from './Header.module.css';
import Profile from '../../assets/Images/profile.svg'
import Message from '../../assets/Images/message.svg'
import Orders from '../../assets/Images/grey-heart.svg'
import Basket from '../../assets/Images/basket.png'
import Menu from '../../assets/Images/menu.svg'
import BottomArrow from '../../assets/Images/bottom-arrow.svg'
import GermanyFlag from '../../assets/Images/germany.svg';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className={styles.header}>
    <div className={styles.header_container}>
      <Link to="/" className={styles.Header_logoLink}>
      <img className={styles.Header_logo} src={Logo} alt="Logo" />
    </Link>
      <div className={styles.Header_search}>
           <input
        type="text"
        placeholder="Search"
        className={styles.Header_search_input}
        />
           <select  className={styles.Header_categories}>
        <option value="All Categories">All Categories</option>
      </select>
          <button className={styles.Header_button}>Search</button>
      </div>
      <div className={styles.Header_icons} >
        <div className={styles.Header_icon_box}>
        <img className={styles.Header_icon} src={Profile} alt="Profile" />
          <p>Profile</p>
        </div>
          <div className={styles.Header_icon_box}>
        <img className={styles.Header_icon} src={Message} alt="Message" />
          <p>Message</p>
        </div>
          <div className={styles.Header_icon_box}>
        <img className={styles.Header_icon} src={Orders} alt="Orders" />
          <p>Orders</p>
        </div>
          <div className={styles.Header_icon_box}>
        <img className={styles.Header_icon} src={Basket} alt="Basket" />
          <p>My cart</p>
        </div>
      </div>
      </div>
      <div className={styles.header_box}>
        <div className={styles.menu_list}>
          <img className={styles.menu_logo} src={Menu} alt="Menu" />
          <p>All category</p>
          <p>Hot offers</p>
          <p>Gift boxes</p>
          <p>Projects</p>
          <p>Menu item</p>
          <p>Help</p>
            <img className={styles.Bottom_arrow_menu} src={ BottomArrow} alt=" BottomArrow" />
        </div> 
        <div className={styles.features}>
          <div className={styles.languages}>
            <p>English, USD</p>
              <img className={styles.Bottom_arrow} src={ BottomArrow} alt=" BottomArrow" />
          </div>
          <div className={styles.shipping}>
          <p>Ship to</p>
          <img className={styles.Menu_flag} src={GermanyFlag} alt=" GermanyFlag" />
            <img className={styles.Bottom_arrow} src={BottomArrow} alt=" BottomArrow" />
            </div>
        </div>
   </div>
      </div>
  );
}

export default Header;
