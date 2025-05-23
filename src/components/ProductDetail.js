import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';

function ProductDetail({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p style={{ color: '#666', marginBottom: '1rem' }}>{product.description}</p>
          <p style={{
            color: '#e44d26',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginBottom: '2rem'
          }}>
            {product.price.toLocaleString('vi-VN')}đ
          </p>
          <button
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1.1rem'
            }}
            onClick={() => alert('Đã thêm vào giỏ hàng!')}
          >
            <FaShoppingCart /> Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 