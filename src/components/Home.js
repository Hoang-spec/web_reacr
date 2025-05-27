import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ products, onAddToCart, cart, isAuthenticated, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsMenuOpen(false);
    onLogout();
    navigate('/');
  };



const handleAddToCart = (product) => {
  console.log('Attempting to add to cart:', product);
  
  if (typeof onAddToCart === 'function') {
    try {
      onAddToCart(product);
      console.log('Product should be added to cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert("Có lỗi khi thêm vào giỏ hàng");
    }
  } else {
    console.error('onAddToCart is not a function');
    alert("Chức năng giỏ hàng chưa khả dụng");
  }
};
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section" style={{
        background: 'radial-gradient(circle at 60% 40%, #a5b4fc 0%, #6366f1 60%, #312e81 100%)',
        color: 'white',
        padding: '90px 0 70px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px 0 rgba(99,102,241,0.18)'
      }}>
        <svg style={{
          position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'
        }}>
          <circle cx="80%" cy="20%" r="120" fill="#fbbf24" fillOpacity="0.13"/>
          <circle cx="20%" cy="80%" r="90" fill="#fff" fillOpacity="0.08"/>
        </svg>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="hero" style={{
            width: 110, marginBottom: 24, filter: 'drop-shadow(0 8px 32px #6366f1aa)'
          }}/>
          <h1 style={{
            fontSize: '3.2rem', fontWeight: 900, marginBottom: 16, letterSpacing: '-2px', textShadow: '0 2px 16px #312e81'
          }}>
            <span style={{ color: '#fbbf24' }}>Siêu Thị Online</span> <br/>Mua sắm cực chất!
          </h1>
          <p style={{
            fontSize: '1.35rem', marginBottom: 32, opacity: 0.97, fontWeight: 500
          }}>
            Ưu đãi mỗi ngày, giao hàng siêu tốc, sản phẩm công nghệ chính hãng, giá cực tốt!
          </p>
          <a href="#products" style={{
            background: 'linear-gradient(90deg, #fbbf24 0%, #f59e42 100%)',
            color: '#222', fontWeight: 800, padding: '1.1rem 3rem', borderRadius: 999,
            fontSize: '1.25rem', border: 'none', boxShadow: '0 6px 32px #fbbf2440',
            cursor: 'pointer', textDecoration: 'none', transition: 'all 0.2s'
          }}>
            <i className="fas fa-bolt" style={{ marginRight: 10, color: '#f59e42' }}></i>
            Khám phá ngay
          </a>
        </div>
      </section>
      {/* Intro */}
      {/* <section className='flash_sale'>
        <h1>FLash Sale</h1> 
        <div className='fs_products'>
          <div className='fs_product'>
            {products.map(pro => (
              <Link to={`/product/${pro.id}`}>a</Link>
            ))}
          </div>

        </div>
      </section> */}
      

      {/* PRODUCTS */}
      <section className="products-section" id="products" style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 16px 40px 16px' }}>
        <div className="products-title" style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '2.5rem', color: '#222', textAlign: 'center', letterSpacing: '-1px' }}>Sản phẩm nổi bật</div>
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2.5rem' }}>
          {products.map(product => (
            <div key={product.id} className="product-card-custom" style={{ textDecoration: 'none', background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 32px 0 rgba(99,102,241,0.10)', padding: '1.5rem 1.2rem 1.2rem 1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'box-shadow 0.2s, transform 0.2s', position: 'relative', overflow: 'hidden' }}>
              {product.rating && product.rating.rate > 4.2 && (
                <div className="product-badge" style={{ position: 'absolute', top: '18px', left: '18px', background: 'linear-gradient(90deg, #f43f5e 0%, #fbbf24 100%)', color: '#fff', fontSize: '0.85rem', fontWeight: '700', padding: '0.3rem 1rem', borderRadius: '999px', boxShadow: '0 2px 8px rgba(244,63,94,0.10)', letterSpacing: '1px' }}>HOT</div>
              )}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="product-image-wrap" style={{ width: '160px', height: '160px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.2rem',display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="product-title" style={{ fontSize: '1.1rem', fontWeight: '700', color: '#222', marginBottom: '0.5rem', textAlign: 'center', minHeight: '2.5em' }}>{product.title}</div>
                  <div className="product-desc" style={{ fontSize: '0.98rem', color: '#666', marginBottom: '0.7rem', textAlign: 'center', minHeight: '2.2em' }}>{product.category}</div>
                  <div className="product-price-row" style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', marginBottom: '1.1rem', justifyContent: 'center' }}>
                    <span className="product-price" style={{ fontSize: '14px', fontWeight: '700', color: '#6366f1' }}>{product.price.toLocaleString('vi-VN', {style:'currency',currency:'VND'})}</span>
                    {product.oldPrice && (
                      <span className="product-oldprice" style={{ fontSize: '14px', color: '#bbb', textDecoration: 'line-through', fontWeight: '700' }}>{product.oldPrice.toLocaleString('vi-VN', {style:'currency',currency:'VND'})}</span>
                    )}
                  </div>
                </Link>
                <button 
                  className="add-to-cart-btn" 
                  onClick={() => handleAddToCart(product)} 
                  style={{ 
                    background: 'linear-gradient(90deg, #60a5fa 0%, #6366f1 100%)', 
                    color: '#fff', 
                    fontWeight: '700', 
                    padding: '0.7rem 2.2rem', 
                    borderRadius: '999px', 
                    fontSize: '1.05rem', 
                    border: 'none', 
                    boxShadow: '0 2px 12px rgba(99,102,241,0.10)', 
                    cursor: 'pointer', 
                    transition: 'background 0.2s, transform 0.2s',
                    width: '80%',
                    marginTop: 'auto'
                  }}
                >
                  <i className="fas fa-cart-plus" style={{marginRight:8}}></i>Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home; 