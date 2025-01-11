import { useParams } from 'react-router-dom';
import useProducts from '../../store/ProductContext'; 
import { useEffect } from 'react';
import styles from './ProductDetails.module.css';
import RightArrow from '../../assets/Images/right-arrow.svg';
import CheckMark from '../../assets/Images/check.svg';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import  WishList  from '../../Components/Wishlist/Wishlist';
import StarRating from '../../Components/Rating/Rating';
import GermanyFlag from '../../assets/Images/germany.svg';
import Verification from '../../assets/Images/verified_user.svg';
import WorldIcon from '../../assets/Images/world.svg';
import BlueHeart from '../../assets/Images/blue-heart.svg';
const ProductDetails = () => {
  const menu = ['Home', 'Clothings', 'Men’s wear', 'Summer clothing'];
  const { id } = useParams(); 
  const { selectedProduct, fetchProductById, loading, error } = useProducts();

  useEffect(() => {
    fetchProductById(id!); 
  }, [id, fetchProductById]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!selectedProduct) return <div>No product data available</div>;
  return (
    <div className={styles.Product_info}>
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
      <div className={styles.product_box}>
        <div className={styles.product_image_box}>
      <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className={styles.product_image} />
      <div className={styles.product_images_list}>
        {selectedProduct.images.map((image, index) => (
          <img key={index} src={image} alt={`Product-img-${index}`} />
        ))}
      </div>
    </div>
        <div className={styles.product_description} >
          <div className={styles.stock_status}>
           <img src={CheckMark} alt='CheckMark_icon' className={styles.CheckMark_icon} />
            <p className={styles.product_status}>{selectedProduct.availabilityStatus}</p>
            </div>
          <h1>{selectedProduct.title}</h1>
          <div className={styles.product_rating}>
            <StarRating rating={selectedProduct.rating} /> 
              <p>{selectedProduct.rating}</p>
            </div>
       <div className={styles.product_price_box}>
              <p className={styles.product_price}>${selectedProduct.price}</p>
                <p className={styles.product_discount}>Disc {selectedProduct.discountPercentage}%</p>
          </div>
          <div className={styles.product_information}>
          <p><span>Category:</span> {selectedProduct.category}</p>
          <p className={styles.product_box_line}></p>
           <p><span>Brand:</span> {selectedProduct.brand || "No brand information"}</p>
          <p><span>Description:</span>{selectedProduct.description}</p>
             <p><span>Dimensions: </span> Width: {selectedProduct.dimensions.width} cm, Height: {selectedProduct.dimensions.height} cm, Depth: {selectedProduct.dimensions.depth} cm</p>
      <p className={styles.product_box_line}></p>
            <p><span>Warranty:</span> {selectedProduct.warrantyInformation}</p>
              <p className={styles.product_box_line}></p>
            </div>
</div>
        <div className={styles.product_supply_box}>
          <div className={styles.company}>
            <h3>R</h3>
            <div className={styles.company_name}>
              <p>Supplier</p>
              <p>Guanjoi Trading LLC</p>
            </div>
          </div>
          <p className={styles.product_box_line}></p>
          <div className={styles.company_info}>
            <div className={styles.company_info_box}>
              <img src={GermanyFlag} alt='Germany-flag' ></img>
              <p>Germany, Berlin</p>
            </div>
          <div className={styles.company_info_box}>
              <img src={Verification} alt='Verified-user'></img>
              <p>Verified Seller</p>
            </div>
            <div className={styles.company_info_box}>
              <img src={WorldIcon} alt='WorldIcon'></img>
              <p>Worldwide shipping</p>
              </div>
          </div>
          <div className={styles.company_info_buttons}>
          <button>Send inquiry</button>
          <button>Seller’s profile</button>
          </div>
          <div className={styles.wishlist}>
          <img src={BlueHeart} alt='blue heart icon'></img>
            <p>Save for later</p>
            </div>
        </div>
      </div>
      <div className={styles.information_box}>
        <div className={styles.categories}>
        <ul>
          <li>Description</li>
          <li>Reviews</li>
          <li>Shipping</li>
          <li>About company</li>
        </ul>
        </div>
        <div className={styles.wishlist_box}>
          <p>You may like</p>
           <WishList />
      </div>
      </div>
      <RelatedProducts />
      <div className={styles.discount_information}>
        <div className={styles.discount_text}>
        <h3>Super discount on more than 100 USD</h3>
        <p>Have you ever finally just write dummy info</p>
        </div>
        <div className={styles.button_container}>
          <button>Shop now</button>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
