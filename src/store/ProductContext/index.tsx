/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useState, useCallback, useContext } from "react";
import { Product, ProductsContextValues } from "./types"; 
const ProductsContext = createContext<ProductsContextValues | null>(null);

export const ProductsContextProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  // Fetch all products
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProductById = useCallback(async (id: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const product = await response.json();
      setSelectedProduct(product); 
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        data,
        selectedProduct,
        loading,
        error,
        fetchProducts,
        fetchProductById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext) as ProductsContextValues;

export default useProducts;
