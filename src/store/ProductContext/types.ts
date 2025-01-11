export type Product = {
  id: number;
  thumbnail: string; 
  title: string; 
  description: string; 
  category: string; 
  price: number; 
  discountPercentage: number; 
  rating: number;
  brand?: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string; 
  availabilityStatus: string; 
  images: string[];
};
export type ProductsContextValues = {
  data: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string;
  fetchProducts: () => void;
  fetchProductById: (id: string) => void;
};