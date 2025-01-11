import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx';
import './styles/reset.css'; 
import { ProductsContextProvider } from './store/ProductContext/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <App />
    </ProductsContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
