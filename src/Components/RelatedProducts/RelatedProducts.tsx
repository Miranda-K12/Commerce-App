
import { relatedProducts, RelatedProduct } from './relatedProductsData'; 
import styles from './RelatedProducts.module.css'; 
const RelatedProducts = () => {
  return (
    <div className={styles.related_products_container}>
      <h3>Related Products</h3>
      <div className={styles.related_products_list}>
        {relatedProducts.map((product: RelatedProduct) => (
          <div className={styles.product_card} key={product.id}>
            <img
              src={product.image} 
              alt={product.title} 
              className={styles.productImage}
            />
            <h4>{product.title}</h4>
            <p className={styles.productPrice}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
