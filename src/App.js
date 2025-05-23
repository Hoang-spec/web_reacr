import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import Account from './components/Account';
import Orders from './components/Orders';
import Search from './components/Search';
import Review from './components/Review';
import Admin from './components/Admin';

const products = [
  {
    id: 1,
    name: 'Điện thoại iPhone 13',
    description: 'iPhone 13 128GB - Hàng chính hãng',
    price: 19990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-blue-1-600x600.jpg'
  },
  {
    id: 2,
    name: 'Laptop Dell XPS 13',
    description: 'Laptop Dell XPS 13 9310 - Core i7',
    price: 32990000,
    image: 'https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673978199600673_dell-xps-13-9310-i7-1165g7-16gb-512gb-4k-touch-win10-bac-1.png'
  },
  {
    id: 3,
    name: 'Tai nghe AirPods Pro',
    description: 'Tai nghe Apple AirPods Pro - Hàng chính hãng',
    price: 5990000,
    image: 'https://cdn.tgdd.vn/Products/Images/54/211032/airpods-pro-2-thumb-600x600.jpg'
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router>
      <div>
        <Header cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={
            <main style={{
              padding: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <h2 style={{ marginBottom: '2rem' }}>Sản phẩm nổi bật</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '2rem'
              }}>
                {products.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            </main>
          } />
          <Route 
            path="/product/:id" 
            element={<ProductDetail products={products} addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/checkout" 
            element={<Checkout cartItems={cartItems} total={total} />} 
          />
          <Route path="/account" element={<Account />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/search" element={<Search products={products} />} />
          <Route path="/product/:id/reviews" element={<Review />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 