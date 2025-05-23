import React from 'react';
import { FaTrash, FaArrowLeft, FaCreditCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          marginBottom: '2rem',
          cursor: 'pointer'
        }}
      >
        <FaArrowLeft /> Quay lại
      </button>

      <h1>Giỏ hàng</h1>
      
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          <div style={{ marginBottom: '2rem' }}>
            {cartItems.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  borderBottom: '1px solid #ddd',
                  gap: '1rem'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p style={{ color: '#666' }}>{item.description}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: '#e44d26', fontWeight: 'bold' }}>
                    {item.price.toLocaleString('vi-VN')}đ
                  </p>
                  <p>Số lượng: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <h2>Tổng cộng:</h2>
            <p style={{ color: '#e44d26', fontWeight: 'bold', fontSize: '1.5rem' }}>
              {total.toLocaleString('vi-VN')}đ
            </p>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <FaCreditCard /> Thanh toán
          </button>
        </>
      )}
    </div>
  );
}

export default Cart; 