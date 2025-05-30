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
          height: '4rem'
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
              <i className="fas fa-store"></i> Siêu Thị Online
            </a>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
                <i className="fas fa-home"></i> Trang chủ
              </a>
              <a href="/products" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
                <i className="fas fa-mobile-alt"></i> Sản phẩm
              </a>
              <a href="/news" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
                <i className="fas fa-newspaper"></i> Tin tức
              </a>
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
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Về chúng tôi</h3>
                <p style={{ lineHeight: 1.6 }}>Siêu Thị Online - Nơi mua sắm công nghệ uy tín, chất lượng với giá tốt nhất thị trường.</p>
              </div>
              <div>
                <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Liên kết nhanh</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>Về chúng tôi</a></li>
                  <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Liên hệ</a></li>
                  <li><a href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Tin tức</a></li>
                  <li><a href="/policy" style={{ color: '#fff', textDecoration: 'none' }}>Chính sách</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Hỗ trợ khách hàng</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><a href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>Câu hỏi thường gặp</a></li>
                  <li><a href="/shipping" style={{ color: '#fff', textDecoration: 'none' }}>Vận chuyển</a></li>
                  <li><a href="/returns" style={{ color: '#fff', textDecoration: 'none' }}>Đổi trả</a></li>
                  <li><a href="/warranty" style={{ color: '#fff', textDecoration: 'none' }}>Bảo hành</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>Liên hệ</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><i className="fas fa-phone"></i> Hotline: 0123 456 789</li>
                  <li><i className="fas fa-envelope"></i> Email: support@sieuthionline.com</li>
                  <li><i className="fas fa-map-marker-alt"></i> Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</li>
                </ul>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <a href="#" style={{ color: '#fbbf24', fontSize: '1.5rem' }}><i className="fab fa-facebook"></i></a>
                <a href="#" style={{ color: '#fbbf24', fontSize: '1.5rem' }}><i className="fab fa-twitter"></i></a>
                <a href="#" style={{ color: '#fbbf24', fontSize: '1.5rem' }}><i className="fab fa-instagram"></i></a>
                <a href="#" style={{ color: '#fbbf24', fontSize: '1.5rem' }}><i className="fab fa-youtube"></i></a>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>© 2024 Siêu Thị Online. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 