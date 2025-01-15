/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
import { createContext, PropsWithChildren, useState, useCallback, useContext } from "react";
import { Product, ProductsContextValues } from "./types"; 

const ProductsContext = createContext<ProductsContextValues | null>(null);

export const ProductsContextProvider = ({ children }: PropsWithChildren) => {
  const itemsPerPage = 10; 
  const [data, setData] = useState<Product[]>([]);  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalItems, setTotalItems] = useState(0);  

const fetchProducts = useCallback(async (page: number = currentPage) => {
  setLoading(true);
  setError('');
  const skip = (page - 1) * itemsPerPage;
  const limit = 9;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  try {
    const response = await axios.get(url); 
    setData(response.data.products); 
    setTotalItems(response.data.total);
  } catch (error) {
    setError(error instanceof Error ? error.message : 'Failed to fetch products');
  } finally {
    setLoading(false);
  }
}, [currentPage, itemsPerPage]);

  const fetchProductById = useCallback(async (id: string) => {
  setLoading(true);
  setError('');
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`); 
    setSelectedProduct(response.data);  
  } catch (error) {
    setError(error instanceof Error ? error.message : 'Failed to fetch product');
  } finally {
    setLoading(false);
  }
}, []);
 const handlePageChange = (page: number) => {
    if (page >= 1 && page <= Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(page); 
    }
  };
  return (
    <ProductsContext.Provider
      value={{
        data,
        selectedProduct,
        loading,
        error,
        fetchProducts,
        fetchProductById,
        currentPage,
        totalItems,
        itemsPerPage,
        handlePageChange,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext) as ProductsContextValues;

export default useProducts;