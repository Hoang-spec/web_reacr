import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Auth from './components/Auth';
import './styles/global.css';
import './styles/components/product-card.css';
import './styles/components/auth.css';
import './styles/components/cart.css';
import './styles/components/checkout.css';
import './styles/components/product-detail.css';

function App() {
  const sampleProducts = [
    {
      id: 1,
      title: 'iPhone 13 Pro Max',
      price: 29990000,
      oldPrice: 32990000,
      category: 'Điện thoại',
      image: 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-blue-1-600x600.jpg',
      description: 'iPhone 13 Pro Max 128GB chính hãng VN/A, thiết kế sang trọng, hiệu năng mạnh mẽ, camera chuyên nghiệp.'
    },
    {
      id: 2,
      title: 'Samsung Galaxy S22 Ultra',
      price: 24990000,
      oldPrice: 27990000,
      category: 'Điện thoại',
      image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119_2.jpg',
      description: 'Samsung Galaxy S22 Ultra 5G, màn hình lớn, bút S Pen, camera 108MP.'
    },
    {
      id: 3,
      title: 'MacBook Air M2',
      price: 28990000,
      oldPrice: 31990000,
      category: 'Laptop',
      image: 'https://cdn.tgdd.vn/Products/Images/44/289472/apple-macbook-air-m2-2022-16gb-256gb-1-2-750x500.jpg',
      description: 'MacBook Air M2 2022, thiết kế mới, chip Apple M2 mạnh mẽ, pin lâu.'
    },
    {
      id: 4,
      title: 'Tai nghe AirPods Pro',
      price: 4990000,
      oldPrice: 5990000,
      category: 'Phụ kiện',
      image: 'https://cdn.tgdd.vn/Products/Images/54/315014/tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-1-750x500.jpg',
      description: 'Tai nghe AirPods Pro chống ồn chủ động, âm thanh sống động.'
    },
    {
      id: 5,
      title: 'iPad Pro 12.9 inch',
      price: 32990000,
      oldPrice: 35990000,
      category: 'Máy tính bảng',
      image: 'https://product.hstatic.net/1000259254/product/ipad_pro_12.9-inch__space_grey_bbfeb3c1a1964da2a34162e6c556616d_grande.jpg',
      description: 'iPad Pro 12.9 inch 2021, màn hình Liquid Retina XDR, chip M1, hỗ trợ Apple Pencil 2.'
    },
    {
      id: 6,
      title: 'Sony WH-1000XM4',
      price: 5990000,
      oldPrice: 6990000,
      category: 'Phụ kiện',
      image: 'https://store.sony.com.vn/cdn/shop/products/WHM4.png?v=1694056028',
      description: 'Tai nghe Sony WH-1000XM4, chống ồn chủ động, âm thanh Hi-Res, pin lâu.'
    },
    {
      id: 7,
      title: 'Dell XPS 13',
      price: 27990000,
      oldPrice: 30990000,
      category: 'Laptop',
      image: 'https://laptopworld.vn/media/product/19896_dell_xps_13_plus_9340__5.jpg',
      description: 'Laptop Dell XPS 13, thiết kế siêu mỏng, màn hình InfinityEdge, hiệu năng mạnh mẽ.'
    }
  ];
  const [products, setProducts] = useState(sampleProducts);
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const onAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        {/* HEADER NAV */}
        <header style={{
          background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
          color: '#fff',
          boxShadow: '0 4px 32px 0 rgba(99,102,241,0.10)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          height : 'rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1.2rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <a href="/" style={{
              fontSize: '2rem',
              fontWeight: 900,
              letterSpacing: '-1px',
              color: '#fbbf24',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <i className="fas fa-store"></i> 
            </a>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
                <i className="fas fa-shopping-cart"></i> Giỏ hàng
              </a>
              {isAuthenticated ? (
                <span style={{ fontWeight: 500 }}>
                  <i className="fas fa-user-circle"></i> {user?.name || 'Tài khoản'}
                  <button onClick={handleLogout} style={{
                    marginLeft: 12, background: '#fbbf24', color: '#222', border: 'none', borderRadius: 6, padding: '4px 12px', cursor: 'pointer'
                  }}>Đăng xuất</button>
                </span>
              ) : (
                <a href="/auth" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
                  <i className="fas fa-sign-in-alt"></i> Đăng nhập
                </a>
              )}
            </nav>
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <Home
                products={products}
                onAddToCart={onAddToCart}
                cart={cart}
                isAuthenticated={isAuthenticated}
                user={user}
                onLogout={handleLogout}
              />
            } />
            <Route path="/product/:id" element={
              <ProductDetail
                products={products}
                onAddToCart={onAddToCart}
              />
            } />
            <Route path="/cart" element={
              <Cart
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
              />
            } />
            <Route path="/checkout" element={
              isAuthenticated ? (
                <Checkout cart={cart} user={user} />
              ) : (
                <Navigate to="/auth?redirect=checkout" />
              )
            } />
            <Route path="/auth" element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <Auth onLogin={handleLogin} />
              )
            } />
          </Routes>
        </main>
        {/* FOOTER */}
        <footer style={{
          background: 'linear-gradient(90deg, #312e81 0%, #6366f1 100%)',
          color: 'white',
          padding: '56px 0 28px 0',
          textAlign: 'center',
          marginTop: 56,
          position: 'relative',
          boxShadow: '0 -4px 32px 0 rgba(49,46,129,0.18)'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 8, letterSpacing: '-1px', color: '#fbbf24' }}>
            <i className="fas fa-store" style={{ marginRight: 10 }}></i> Siêu Thị Online
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: 18, color: '#fbbf24', opacity: 0.95 }}>
            Mua sắm công nghệ - Giá tốt mỗi ngày!
          </div>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 18, flexWrap: 'wrap'
          }}>
            <a href="#" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 500 }}>Về chúng tôi</a>
            <a href="#" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 500 }}>Chính sách bảo mật</a>
            <a href="#" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 500 }}>Hỗ trợ khách hàng</a>
            <a href="#" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 500 }}>Liên hệ</a>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 18, flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Hotline:</div>
              <a href="tel:0123456789" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>0123 456 789</a>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Email:</div>
              <a href="mailto:support@sieuthionline.vn" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>support@sieuthionline.vn</a>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Địa chỉ:</div>
              <span style={{ color: '#fff', fontWeight: 500 }}>123 Đường Công Nghệ, Quận 1, TP.HCM</span>
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff', fontSize: 28, margin: '0 10px', transition: 'color 0.2s'
            }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff', fontSize: 28, margin: '0 10px', transition: 'color 0.2s'
            }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff', fontSize: 28, margin: '0 10px', transition: 'color 0.2s'
            }}>
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="mailto:support@sieuthionline.vn" style={{
              color: '#fff', fontSize: 28, margin: '0 10px', transition: 'color 0.2s'
            }}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div style={{ fontSize: '1rem', opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} Siêu Thị Online. All rights reserved.
          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </footer>
      </div>
    </Router>
  );
}

export default App; 