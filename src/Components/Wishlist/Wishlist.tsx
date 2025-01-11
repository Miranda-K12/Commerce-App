
import { wishList } from './WishlistData'; 
import { WishList} from './WishlistData'; 
import styles from './Wishlist.module.css'; 

const WishListItems = () => {
  return (
      <div className={styles.wishlist_container_list}>
        {wishList.map((product: WishList) => (
          <div className={styles.wishlist_card} key={product.id}>
            <img
              src={product.image} 
              alt={product.title} 
              className={styles.productImage}
            />
            <div className={styles.wishlist_text}>
            <h4>{product.title}</h4>
            <p className={styles.productPrice}>{product.price}</p>
    </div>
          </div>
        ))}
      </div>
  );
};

export default WishListItems;