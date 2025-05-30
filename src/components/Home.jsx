import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/home.css';

const Home = ({ products, onAddToCart }) => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        marginBottom: '4rem'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>
            Khám Phá Thế Giới Công Nghệ
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Trải nghiệm mua sắm công nghệ với giá tốt nhất, chất lượng hàng đầu và dịch vụ chuyên nghiệp
          </p>
          <Link to="/products" style={{
            background: '#fbbf24',
            color: '#1f2937',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}>
            Mua sắm ngay
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
          Danh Mục Nổi Bật
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem'
        }}>
          {['Điện thoại', 'Laptop', 'Máy tính bảng', 'Phụ kiện'].map((category) => (
            <div key={category} style={{
              background: '#f3f4f6',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <i className={`fas fa-${category === 'Điện thoại' ? 'mobile-alt' : 
                category === 'Laptop' ? 'laptop' : 
                category === 'Máy tính bảng' ? 'tablet-alt' : 'headphones'}`} 
                style={{ fontSize: '2.5rem', color: '#6366f1', marginBottom: '1rem' }}
              ></i>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
          Sản Phẩm Nổi Bật
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {products.slice(0, 4).map((product) => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <img src={product.image} alt={product.title} style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {product.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{product.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6366f1' }}>
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                    <span style={{ 
                      fontSize: '0.875rem', 
                      color: '#9ca3af', 
                      textDecoration: 'line-through',
                      marginLeft: '0.5rem'
                    }}>
                      {product.oldPrice.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <button onClick={() => onAddToCart(product)} style={{
                    background: '#6366f1',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}>
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sale Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '4rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>
            Flash Sale
          </h2>
          <div style={{ 
            background: '#fee2e2', 
            padding: '0.5rem 1rem', 
            borderRadius: '0.5rem',
            color: '#ef4444',
            fontWeight: 600
          }}>
            Kết thúc sau: 23:59:59
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {products.slice(4, 8).map((product) => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#ef4444',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                -{Math.round((1 - product.price/product.oldPrice) * 100)}%
              </div>
              <img src={product.image} alt={product.title} style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {product.title}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ef4444' }}>
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                    <span style={{ 
                      fontSize: '0.875rem', 
                      color: '#9ca3af', 
                      textDecoration: 'line-through',
                      marginLeft: '0.5rem'
                    }}>
                      {product.oldPrice.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <button onClick={() => onAddToCart(product)} style={{
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                  }}>
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={{
        background: '#f3f4f6',
        padding: '4rem 0',
        marginBottom: '4rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Về Siêu Thị Online
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#4b5563', marginBottom: '1.5rem' }}>
                Chúng tôi tự hào là địa chỉ mua sắm công nghệ uy tín hàng đầu Việt Nam. Với hơn 10 năm kinh nghiệm, 
                chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng nhất với giá cả cạnh tranh.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#6366f1', marginBottom: '0.5rem' }}>
                    10+
                  </div>
                  <div style={{ color: '#6b7280' }}>Năm kinh nghiệm</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#6366f1', marginBottom: '0.5rem' }}>
                    1M+
                  </div>
                  <div style={{ color: '#6b7280' }}>Khách hàng</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#6366f1', marginBottom: '0.5rem' }}>
                    50K+
                  </div>
                  <div style={{ color: '#6b7280' }}>Sản phẩm</div>
                </div>
              </div>
            </div>
            <div style={{
              background: 'url("https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              borderRadius: '1rem'
            }} />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <h2 className="brands-title">Thương Hiệu Đối Tác</h2>
        <div className="brands-grid">
          {['Apple', 'Samsung', 'Sony', 'Dell', 'Asus', 'LG'].map((brand) => (
            <div key={brand} className="brand-card">
              <i className={`fab fa-${brand.toLowerCase()}`} className="brand-icon"></i>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{brand}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <h2 className="news-title">Tin Tức Công Nghệ</h2>
        <div className="news-grid">
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
            <div key={index} className="news-card">
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <div className="news-date">{news.date}</div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-excerpt">{news.excerpt}</p>
                <Link to={`/news/${index + 1}`} className="read-more">
                  Đọc thêm <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
          Khách Hàng Nói Gì Về Chúng Tôi
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          {[
            {
              name: 'Nguyễn Văn A',
              role: 'Khách hàng thân thiết',
              content: 'Sản phẩm chất lượng, giá cả hợp lý và dịch vụ chăm sóc khách hàng rất tốt.',
              avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
            },
            {
              name: 'Trần Thị B',
              role: 'Khách hàng mới',
              content: 'Giao hàng nhanh chóng, đóng gói cẩn thận. Sẽ ủng hộ shop dài dài.',
              avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
            },
            {
              name: 'Lê Văn C',
              role: 'Khách hàng thân thiết',
              content: 'Nhân viên tư vấn nhiệt tình, sản phẩm chính hãng, giá cả cạnh tranh.',
              avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
            }
          ].map((testimonial, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img src={testimonial.avatar} alt={testimonial.name} style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  marginRight: '1rem'
                }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{testimonial.name}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>{testimonial.role}</div>
                </div>
              </div>
              <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-grid">
          <div>
            <h2 className="contact-title">Liên Hệ Với Chúng Tôi</h2>
            <p className="contact-description">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ với chúng tôi qua các kênh sau:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <div className="contact-label">Hotline</div>
                  <div className="contact-value">0123 456 789</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">support@sieuthionline.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <div className="contact-label">Địa chỉ</div>
                  <div className="contact-value">123 Đường ABC, Quận XYZ, TP.HCM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424167741546!2d106.6986!3d10.7756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzMyLjEiTiAxMDbCsDQxJzU0LjkiRQ!5e0!3m2!1svi!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
        padding: '4rem 0',
        marginBottom: '4rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
            Đăng Ký Nhận Tin
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
            Nhận thông tin về sản phẩm mới và khuyến mãi đặc biệt
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input type="email" placeholder="Nhập email của bạn" style={{
              flex: 1,
              padding: '1rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '1rem'
            }} />
            <button style={{
              background: '#fbbf24',
              color: '#1f2937',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}>
              Đăng Ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 