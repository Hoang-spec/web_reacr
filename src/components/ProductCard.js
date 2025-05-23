import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      width: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={product.image} 
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <h3>{product.name}</h3>
      <p style={{ color: '#666' }}>{product.description}</p>
      <p style={{ 
        color: '#e44d26', 
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        {product.price.toLocaleString('vi-VN')}đ
      </p>
      <button 
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%'
        }}
        onClick={() => alert('Đã thêm vào giỏ hàng!')}
      >
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductCard; 