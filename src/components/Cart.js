import React from 'react';
import { FaTrash, FaArrowLeft, FaCreditCard, FaPlus, FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Cart({ cart = [], removeFromCart, updateQuantity }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const handleIncrease = (id) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };
  const handleDecrease = (id) => {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          marginBottom: '2rem',
          cursor: 'pointer',
          background: '#f0f0f0',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      >
        <FaArrowLeft /> Quay lại
      </button>

      <h1 style={{ marginBottom: '2rem' }}>Giỏ hàng của bạn</h1>
      
      {cart.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px'
        }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Giỏ hàng của bạn đang trống</p>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6366f1',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Tiếp tục mua sắm
          </button>
        </div>
      ) : (
        <>
          <div style={{ 
            marginBottom: '2rem',
            border: '1px solid #eee',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            {cart.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.5rem',
                  borderBottom: '1px solid #eee',
                  gap: '1.5rem',
                  backgroundColor: '#fff'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'contain',
                    borderRadius: '4px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem'
                  }}>
                    {item.category}
                  </p>
                  <p style={{ 
                    color: '#e44d26', 
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}>
                    {item.price.toLocaleString('vi-VN', {style:'currency',currency:'VND'})}
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <button
                    onClick={() => handleDecrease(item.id)}
                    style={{
                      background: '#f0f0f0',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus size={12} />
                  </button>
                  <span style={{
                    minWidth: '30px',
                    textAlign: 'center'
                  }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    style={{
                      background: '#f0f0f0',
                      border: 'none',
                      width: '30px',
                      height: '30px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ff4444',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1.2rem'
                  }}
                  title="Xóa sản phẩm"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '1.1rem' }}>Tạm tính:</span>
              <span style={{ fontWeight: '500' }}>
                {total.toLocaleString('vi-VN', {style:'currency',currency:'VND'})}
              </span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '1.1rem' }}>Phí vận chuyển:</span>
              <span style={{ fontWeight: '500' }}>Miễn phí</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid #ddd'
            }}>
              <h2 style={{ fontSize: '1.3rem' }}>Tổng cộng:</h2>
              <p style={{ 
                color: '#e44d26', 
                fontWeight: 'bold', 
                fontSize: '1.5rem' 
              }}>
                {total.toLocaleString('vi-VN', {style:'currency',currency:'VND'})}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => navigate('/')}
              style={{
                flex: 1,
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              Tiếp tục mua sắm
            </button>
            <button
              onClick={() => navigate('/checkout')}
              style={{
                flex: 1,
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <FaCreditCard /> Thanh toán
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;