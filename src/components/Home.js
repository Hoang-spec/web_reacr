import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/home.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Home = ({ products, onAddToCart, cart, isAuthenticated, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  const additionalProducts = [
    {
      id: 21,
      title: "Laptop Dell XPS 13",
      price: 28990000,
      oldPrice: 32990000,
      category: "Laptop",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: { rate: 4.8, count: 120 }
    },
    {
      id: 22,
      title: "Tai nghe Sony WH-1000XM4",
      price: 5990000,
      oldPrice: 6990000,
      category: "Phụ kiện",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: { rate: 4.9, count: 85 }
    },
    {
      id: 23,
      title: "Máy tính bảng iPad Pro 12.9",
      price: 32990000,
      oldPrice: 35990000,
      category: "Máy tính bảng",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: { rate: 4.7, count: 95 }
    },
    {
      id: 24,
      title: "Đồng hồ thông minh Apple Watch Series 7",
      price: 8990000,
      oldPrice: 9990000,
      category: "Phụ kiện",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: { rate: 4.6, count: 110 }
    }
  ];

  const allProducts = [...products, ...additionalProducts];

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
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1c2e 0%, #2d1b69 100%)',
        color: 'white',
        padding: '60px 0 40px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(96,165,250,0.15) 0%, transparent 50%)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          opacity: 0.1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}></div>
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '1000px', 
          margin: '0 auto', 
          padding: '0 1.5rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(96,165,250,0.1) 100%)',
            padding: '1rem',
            borderRadius: '16px',
            marginBottom: '1.5rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'inline-block',
            boxShadow: '0 0 30px rgba(99,102,241,0.2)'
          }}>
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="hero" style={{
              width: 80,
              filter: 'drop-shadow(0 8px 32px rgba(99,102,241,0.5))'
            }} className="animate-float"/>
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '-1px',
            background: 'linear-gradient(to right, #fff, #a5b4fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
            textShadow: '0 0 30px rgba(99,102,241,0.3)'
          }} className="animate-fadeInUp">
            Siêu Thị Online
            <br/>
            <span style={{ 
              fontSize: '2rem',
              background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(251,191,36,0.3)'
            }}>
              Mua sắm cực chất!
            </span>
          </h1>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
            fontWeight: 500,
            maxWidth: '500px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.6,
            color: '#e2e8f0',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }} className="animate-fadeInUp">
            Ưu đãi mỗi ngày, giao hàng siêu tốc, sản phẩm công nghệ chính hãng, giá cực tốt!
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }} className="animate-fadeInUp">
            <a href="#products" style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              color: '#1a1c2e',
              fontWeight: 700,
              padding: '0.8rem 2rem',
              borderRadius: '10px',
              fontSize: '1rem',
              border: 'none',
              boxShadow: '0 4px 20px rgba(251,191,36,0.3)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              position: 'relative',
              overflow: 'hidden'
            }} className="hover-scale">
              <i className="fas fa-bolt" style={{ color: '#1a1c2e' }}></i>
              Khám phá ngay
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                transform: 'translateX(-100%)',
                transition: 'transform 0.5s ease'
              }} className="shimmer"></div>
            </a>
            <a href="#flash-sale" style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              fontWeight: 600,
              padding: '0.8rem 2rem',
              borderRadius: '10px',
              fontSize: '1rem',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }} className="hover-scale">
              <i className="fas fa-fire" style={{ color: '#fbbf24' }}></i>
              Flash Sale
            </a>
          </div>
        </div>
        <style>
          {`
            @keyframes shimmer {
              100% {
                transform: translateX(100%);
              }
            }
            .shimmer {
              animation: shimmer 2s infinite;
            }
          `}
        </style>
      </section>

      {/* Flash Sale Section */}
      <section style={{
        padding: '40px 0',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 16px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#fff',
                margin: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{
                  background: 'linear-gradient(45deg, #ff4d4f, #ff7875)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Flash Sale</span>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  background: 'rgba(255, 77, 79, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 77, 79, 0.2)'
                }}>
                  <span style={{ color: '#ff4d4f', fontWeight: '600' }}>Kết thúc sau:</span>
                  <div style={{
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      background: '#ff4d4f',
                      color: '#fff',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontWeight: '600',
                      minWidth: '40px',
                      textAlign: 'center'
                    }}>{formatTime(timeLeft.hours)}</div>
                    <span style={{ color: '#ff4d4f' }}>:</span>
                    <div style={{
                      background: '#ff4d4f',
                      color: '#fff',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontWeight: '600',
                      minWidth: '40px',
                      textAlign: 'center'
                    }}>{formatTime(timeLeft.minutes)}</div>
                    <span style={{ color: '#ff4d4f' }}>:</span>
                    <div style={{
                      background: '#ff4d4f',
                      color: '#fff',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontWeight: '600',
                      minWidth: '40px',
                      textAlign: 'center'
                    }}>{formatTime(timeLeft.seconds)}</div>
                  </div>
                </div>
              </h2>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            position: 'relative'
          }}>
            {products.slice(0, 4).map(product => (
              <div key={product.id} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '16px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                }
              }}>
                <div style={{
                  position: 'relative',
                  paddingTop: '100%',
                  marginBottom: '16px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'linear-gradient(45deg, #ff4d4f, #ff7875)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    boxShadow: '0 2px 8px rgba(255, 77, 79, 0.3)'
                  }}>
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </div>
                </div>

                <div style={{ padding: '0 8px' }}>
                  <div style={{
                    fontSize: '14px',
                    color: '#ff4d4f',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    {product.category}
                  </div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#fff',
                    margin: '0 0 12px 0',
                    height: '44px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {product.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#ff4d4f'
                    }}>
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                    <span style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      textDecoration: 'line-through'
                    }}>
                      {product.oldPrice.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    background: 'linear-gradient(45deg, #ff4d4f, #ff7875)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(255, 77, 79, 0.3)',
                    ':hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(255, 77, 79, 0.4)'
                    }
                  }}>
                    <ShoppingCartOutlined /> Mua ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section style={{
        background: 'white',
        padding: '3rem 0',
        marginBottom: '3rem'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="animate-fadeInUp">
            <h2 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '700', 
              color: '#1f2937',
              marginBottom: '0.75rem'
            }}>
              Thương Hiệu Đối Tác
            </h2>
            <p style={{ 
              color: '#6b7280',
              fontSize: '0.95rem',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Hợp tác với các thương hiệu công nghệ hàng đầu thế giới
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            padding: '0 1rem'
          }}>
            {[
              { name: 'Apple', icon: 'fab fa-apple', color: '#000000' },
              { name: 'Samsung', icon: 'fab fa-samsung', color: '#1428A0' },
              { name: 'Sony', icon: 'fab fa-sony', color: '#000000' },
              { name: 'Dell', icon: 'fas fa-laptop', color: '#007DB8' },
              { name: 'Asus', icon: 'fas fa-laptop', color: '#000000' },
              { name: 'LG', icon: 'fas fa-tv', color: '#A50034' },
              { name: 'HP', icon: 'fas fa-laptop', color: '#0096D6' },
              { name: 'Lenovo', icon: 'fas fa-laptop', color: '#E2231A' }
            ].map((brand, index) => (
              <div key={brand.name} style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animationDelay: `${index * 0.1}s`
              }} className="hover-lift animate-fadeInUp">
                <div style={{
                  width: '70px',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f8fafc',
                  borderRadius: '1rem',
                  marginBottom: '0.5rem'
                }} className="hover-scale">
                  <i className={brand.icon} style={{ 
                    fontSize: '2rem',
                    color: brand.color
                  }}></i>
                </div>
                <h3 style={{ 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1f2937'
                }}>
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 16px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        borderRadius: '20px'
      }}>
        <div className="products-title" style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          marginBottom: '2.5rem', 
          color: '#1f2937', 
          textAlign: 'center',
          position: 'relative'
        }}>
          Sản phẩm nổi bật
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
            borderRadius: '2px'
          }}></div>
        </div>
        <div className="products-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(6, 1fr)', 
          gap: '20px'
        }}>
          {allProducts.slice(0, 12).map((product, index) => (
            <div key={product.id} className="product-card" style={{ 
              background: '#fff', 
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              position: 'relative'
            }}>
              <Link to={`/product/${product.id}`} style={{ 
                textDecoration: 'none', 
                color: 'inherit'
              }}>
                <div style={{ 
                  position: 'relative',
                  paddingTop: '100%',
                  background: '#f8fafc'
                }}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '16px',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                  {product.rating && product.rating.rate > 4.2 && (
                    <div style={{ 
                      position: 'absolute', 
                      top: '12px', 
                      left: '12px', 
                      background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                      color: '#fff', 
                      fontSize: '12px', 
                      padding: '4px 8px', 
                      borderRadius: '6px',
                      boxShadow: '0 4px 6px rgba(239, 68, 68, 0.2)',
                      fontWeight: '600'
                    }}>
                      HOT
                    </div>
                  )}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(99,102,241,0.05), rgba(96,165,250,0.05))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}></div>
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ 
                    fontSize: '14px',
                    color: '#1f2937',
                    marginBottom: '8px',
                    height: '40px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: 1.4,
                    fontWeight: '600'
                  }}>
                    {product.title}
                  </h3>
                  <div style={{ 
                    fontSize: '12px',
                    color: '#6366f1',
                    marginBottom: '10px',
                    padding: '4px 8px',
                    background: 'rgba(99,102,241,0.1)',
                    borderRadius: '6px',
                    display: 'inline-block',
                    fontWeight: '500'
                  }}>
                    {product.category}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'baseline', 
                    gap: '8px'
                  }}>
                    <span style={{ 
                      fontSize: '16px', 
                      fontWeight: '700', 
                      color: '#ef4444'
                    }}>
                      {product.price.toLocaleString('vi-VN', {style:'currency',currency:'VND'})}
                    </span>
                    {product.oldPrice && (
                      <span style={{ 
                        fontSize: '13px', 
                        color: '#9ca3af', 
                        textDecoration: 'line-through'
                      }}>
                        {product.oldPrice.toLocaleString('vi-VN', {style:'currency',currency:'VND'})}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
              <button 
                onClick={() => handleAddToCart(product)} 
                style={{ 
                  width: '100%',
                  padding: '10px',
                  background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
                  color: '#fff',
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: 'none',
                  fontWeight: '600'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(99,102,241,0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fas fa-cart-plus"></i>
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="news" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '4rem 0',
        marginBottom: '4rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="animate-fadeInUp">
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Tin Tức Công Nghệ
            </h2>
            <p style={{ 
              color: '#4b5563',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Cập nhật những tin tức mới nhất về công nghệ
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: 'iPhone 15 Pro Max: Đánh giá chi tiết',
                image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                date: '20/03/2024',
                excerpt: 'Khám phá những tính năng mới nhất của iPhone 15 Pro Max và đánh giá chi tiết về hiệu năng...'
              },
              {
                title: 'Samsung Galaxy S24 Ultra: So sánh với S23 Ultra',
                image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                date: '19/03/2024',
                excerpt: 'So sánh chi tiết giữa Galaxy S24 Ultra và S23 Ultra: Những cải tiến đáng giá...'
              },
              {
                title: 'MacBook Pro M3: Hiệu năng vượt trội',
                image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                date: '18/03/2024',
                excerpt: 'Đánh giá hiệu năng của MacBook Pro M3 và so sánh với các thế hệ trước...'
              }
            ].map((news, index) => (
              <div key={index} className="news-card hover-lift animate-fadeInUp" style={{
                background: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                animationDelay: `${index * 0.2}s`
              }}>
                <div className="news-image-wrap hover-scale" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={news.image} alt={news.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ 
                    color: '#6b7280',
                    fontSize: '0.875rem',
                    marginBottom: '0.5rem',
                    animationDelay: `${index * 0.2 + 0.1}s`
                  }} className="animate-slideIn">
                    {news.date}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.75rem',
                    animationDelay: `${index * 0.2 + 0.2}s`
                  }} className="animate-slideIn">
                    {news.title}
                  </h3>
                  <p style={{ 
                    color: '#4b5563',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1rem',
                    animationDelay: `${index * 0.2 + 0.3}s`
                  }} className="animate-slideIn">
                    {news.excerpt}
                  </p>
                  <Link to={`/news/${index + 1}`} className="read-more hover-scale animate-slideIn" style={{
                    color: '#6366f1',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    animationDelay: `${index * 0.2 + 0.4}s`
                  }}>
                    Đọc thêm <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '4rem 0',
        marginBottom: '4rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="animate-fadeInUp">
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <p style={{ 
              color: '#4b5563',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Những đánh giá chân thực từ khách hàng đã sử dụng dịch vụ của chúng tôi
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {[
              {
                name: 'Nguyễn Văn A',
                avatar: 'https://i.pravatar.cc/150?img=1',
                rating: 5,
                comment: 'Sản phẩm chất lượng, giao hàng nhanh chóng. Nhân viên tư vấn nhiệt tình, giá cả hợp lý. Sẽ ủng hộ shop dài dài!',
                date: '20/03/2024'
              },
              {
                name: 'Trần Thị B',
                avatar: 'https://i.pravatar.cc/150?img=2',
                rating: 5,
                comment: 'Mua điện thoại ở đây rất yên tâm. Sản phẩm chính hãng, bảo hành đầy đủ. Đóng gói cẩn thận, giao hàng đúng hẹn.',
                date: '19/03/2024'
              },
              {
                name: 'Lê Văn C',
                avatar: 'https://i.pravatar.cc/150?img=3',
                rating: 4,
                comment: 'Shop có nhiều ưu đãi hấp dẫn. Sản phẩm đa dạng, giá cả cạnh tranh. Nhân viên phục vụ chu đáo.',
                date: '18/03/2024'
              }
            ].map((review, index) => (
              <div key={index} className="review-card hover-lift animate-fadeInUp" style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                animationDelay: `${index * 0.2}s`
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1.5rem',
                  animationDelay: `${index * 0.2 + 0.1}s`
                }} className="animate-slideIn">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      marginRight: '1rem'
                    }}
                    className="hover-scale"
                  />
                  <div>
                    <h3 style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '0.25rem'
                    }}>
                      {review.name}
                    </h3>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i}
                          className={`fas fa-star ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          style={{ 
                            color: i < review.rating ? '#f59e0b' : '#d1d5db',
                            fontSize: '0.875rem'
                          }}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ 
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  animationDelay: `${index * 0.2 + 0.2}s`
                }} className="animate-slideIn">
                  {review.comment}
                </p>
                <div style={{ 
                  color: '#9ca3af',
                  fontSize: '0.875rem',
                  animationDelay: `${index * 0.2 + 0.3}s`
                }} className="animate-slideIn">
                  {review.date}
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '3rem'
          }} className="animate-fadeInUp">
            <button className="hover-scale animate-pulse" style={{
              background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}>
              Xem thêm đánh giá
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
        padding: '4rem 0',
        marginBottom: '4rem',
        animation: 'gradientShift 15s ease infinite'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            marginBottom: '1rem', 
            color: 'white' 
          }} className="animate-fadeInUp">
            Đăng Ký Nhận Tin
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)', 
            marginBottom: '2rem',
            fontSize: '1.1rem',
            animationDelay: '0.2s'
          }} className="animate-fadeInUp">
            Nhận thông tin về sản phẩm mới và khuyến mãi đặc biệt
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            animationDelay: '0.4s'
          }} className="animate-fadeInUp">
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              style={{
                flex: 1,
                padding: '1rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }} 
              className="hover-scale"
            />
            <button className="hover-scale animate-pulse" style={{
              background: '#fbbf24',
              color: '#1f2937',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}>
              Đăng Ký
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 