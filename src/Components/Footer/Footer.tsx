import Logo from '../../assets/Images/logo.svg';
import FacebookIcon from '../../assets/Images/facebook.svg';
import InstagramIcon from '../../assets/Images/instagram.svg';
import TwitterIcon from '../../assets/Images/twitter.png';
import LinkedIn from '../../assets/Images/linkdin.svg';
import Youtybe from '../../assets/Images/youtube.svg';
import AppStore from '../../assets/Images/app-store.svg';
import GoogleStore from '../../assets/Images/google-market.svg';
import UsaFlag from '../../assets/Images/usa-flag.svg';
import UpArrow from   '../../assets/Images/up-arrow.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_company}>
          <img className={styles.Footer_logo} src={Logo} alt="Logo" />
          <p>Best information about the company gies here but now lorem ipsum is</p>
          <div className={styles.social_icons}>
            <img className={styles.social_icon} src={FacebookIcon} alt="Logo" />
            <img className={styles.social_icon} src={TwitterIcon} alt="Logo" />
            <img className={styles.social_icon} src={LinkedIn} alt="Logo" />
            <img className={styles.social_icon} src={InstagramIcon} alt="Logo" />
             <img className={styles.social_icon} src={ Youtybe} alt="Logo" />
          </div>
        </div>
        <div className={styles.footer_information}>
          <div className={styles.footer_column}>
            <h3>About</h3>
            <p>About Us</p>
            <p>Find store</p>
            <p>Categories</p>
            <p>Blogs</p>
          </div>
          <div className={styles.footer_column}>
            <h3>Partnership</h3>
            <p>About Us</p>
            <p>Find store</p>
            <p>Categories</p>
            <p>Blogs</p>
          </div>
          <div className={styles.footer_column}>
            <h3>Information</h3>
            <p>Help Center</p>
            <p>Money Refund</p>
            <p>Shipping</p>
            <p>Contact us</p>
          </div>
          <div className={styles.footer_column}>
            <h3>For users</h3>
            <p>Login</p>
            <p>Register</p>
            <p>Settings</p>
            <p>My Orders</p>
          </div>
          <div className={styles.footer_column}>
            <h3>Get app</h3>
            <div className={styles.applications}>
            <img className={styles.footer_app} src={AppStore} alt="App" />
              <img className={styles.footer_app} src={GoogleStore} alt="App" />
              </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_box}>
        <p>© 2023 Ecommerce. </p>
        <div className={styles.footer_language}>
          <img className={styles.usa_flag} src={UsaFlag} alt="App" />
          <p>English</p>
          <img className={styles.up_arrow} src={UpArrow} alt="App" />
        </div>
      </div>
    </div>
  )
}
export default Footer;