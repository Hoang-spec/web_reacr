import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Không tìm thấy sản phẩm</h2>
        <Link to="/" style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '500'
        }}>
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  const productImages = [
    product.image,
    'https://th.bing.com/th/id/OIP.MOOlKz5V0UBrs46JJw1JoAHaE8?cb=iwc2&w=1500&h=1000&rs=1&pid=ImgDetMain',
    'https://i.ytimg.com/vi/SwidyetNJdc/maxresdefault.jpg',
    'https://cdn.mos.cms.futurecdn.net/L4aNmtrCAeQaTkDv4RqdGQ.jpg'
  ];

  // Mock data for specifications
  const specifications = [
    { label: 'Màn hình', value: '6.1 inch, Super Retina XDR' },
    { label: 'CPU', value: 'Apple A15 Bionic' },
    { label: 'RAM', value: '4GB' },
    { label: 'Bộ nhớ', value: '128GB' },
    { label: 'Camera', value: '12MP + 12MP' },
    { label: 'Pin', value: '3240 mAh' }
  ];

  // Mock data for related products
  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Trang chủ</Link>
        <span style={{ margin: '0 0.5rem', color: '#6b7280' }}>/</span>
        <Link to={`/search?category=${product.category}`} style={{ color: '#6b7280', textDecoration: 'none' }}>
          {product.category}
        </Link>
        <span style={{ margin: '0 0.5rem', color: '#6b7280' }}>/</span>
        <span style={{ color: '#1f2937' }}>{product.name}</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        {/* Left: Image Gallery */}
        <div>
          <div style={{
            width: '100%',
            aspectRatio: '1',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '1rem',
            background: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}>
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '1rem'
              }}
            />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {productImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                style={{
                  aspectRatio: '1',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: selectedImage === index ? '2px solid #6366f1' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '0.5rem'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            {product.name}
          </h1>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#ef4444'
              }}>
                {product.price.toLocaleString('vi-VN')}đ
              </span>
              {product.oldPrice && (
                <span style={{
                  fontSize: '1.25rem',
                  color: '#6b7280',
                  textDecoration: 'line-through'
                }}>
                  {product.oldPrice.toLocaleString('vi-VN')}đ
                </span>
              )}
            </div>
            {product.oldPrice && (
              <div style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                borderRadius: '999px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                Giảm {Math.round((1 - product.price / product.oldPrice) * 100)}%
              </div>
            )}
          </div>

          <p style={{
            fontSize: '1.125rem',
            color: '#4b5563',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            {product.description}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <label style={{
                fontSize: '1rem',
                fontWeight: '500',
                color: '#4b5563'
              }}>
                Số lượng:
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#f3f4f6',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    color: '#4b5563',
                    '&:hover': {
                      background: '#e5e7eb'
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  style={{
                    width: '60px',
                    padding: '0.5rem',
                    border: 'none',
                    textAlign: 'center',
                    fontSize: '1rem',
                    '&:focus': {
                      outline: 'none'
                    }
                  }}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#f3f4f6',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    color: '#4b5563',
                    '&:hover': {
                      background: '#e5e7eb'
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => { console.log('onAddToCart', product, quantity); onAddToCart({ ...product, quantity }); }}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(99,102,241,0.2)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 25px rgba(99,102,241,0.3)'
                }
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>

          {/* Specifications */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Thông số kỹ thuật
            </h2>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    padding: '1rem',
                    borderBottom: index < specifications.length - 1 ? '1px solid #e5e7eb' : 'none',
                    background: index % 2 === 0 ? '#f9fafb' : 'white'
                  }}
                >
                  <div style={{
                    flex: '0 0 200px',
                    color: '#4b5563',
                    fontWeight: '500'
                  }}>
                    {spec.label}
                  </div>
                  <div style={{ color: '#1f2937' }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '2rem'
        }}>
          Sản phẩm liên quan
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem'
        }}>
          {relatedProducts.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
                }
              }}>
                <div style={{
                  aspectRatio: '1',
                  padding: '1rem',
                  background: '#f9fafb'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    {product.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#ef4444'
                    }}>
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                    {product.oldPrice && (
                      <span style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        textDecoration: 'line-through'
                      }}>
                        {product.oldPrice.toLocaleString('vi-VN')}đ
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 