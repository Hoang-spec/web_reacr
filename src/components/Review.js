import React, { useState } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';

function Review({ productId }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      userId: 1,
      userName: 'Nguyễn Văn A',
      rating: 5,
      comment: 'Sản phẩm rất tốt, đóng gói cẩn thận, giao hàng nhanh chóng.',
      date: '2024-03-15'
    },
    {
      id: 2,
      userId: 2,
      userName: 'Trần Thị B',
      rating: 4,
      comment: 'Chất lượng sản phẩm tốt, giá cả hợp lý.',
      date: '2024-03-14'
    }
  ]);

  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      userId: 3, // Giả lập user đang đăng nhập
      userName: 'Người dùng',
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, comment: '' });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        style={{
          color: index < rating ? '#FFD700' : '#ddd',
          marginRight: '2px'
        }}
      />
    ));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '2rem' }}>Đánh giá sản phẩm</h2>

      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Viết đánh giá</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Đánh giá của bạn
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating })}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem'
                  }}
                >
                  <FaStar
                    style={{
                      color: rating <= newReview.rating ? '#FFD700' : '#ddd',
                      fontSize: '1.5rem'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Nhận xét của bạn
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                minHeight: '100px',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Gửi đánh giá
          </button>
        </form>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Đánh giá từ người dùng</h3>
        {reviews.map(review => (
          <div
            key={review.id}
            style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              marginBottom: '1rem'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaUser style={{ color: '#666' }} />
                <span style={{ fontWeight: 'bold' }}>{review.userName}</span>
              </div>
              <span style={{ color: '#666' }}>{review.date}</span>
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
              {renderStars(review.rating)}
            </div>

            <p style={{ margin: 0, color: '#333' }}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review; 