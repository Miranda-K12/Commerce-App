import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import ProductDetails from '../Pages/Products/ProductDetails';

const Routing = () => {
  return (
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/product/:id" element={<ProductDetails />} />
</Routes>
  )
}
export default Routing;