import React from 'react';
import { FaBox, FaTruck, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function Orders() {
  const orders = [
    {
      id: 'ORD001',
      date: '2024-03-15',
      total: 25990000,
      status: 'completed',
      items: [
        {
          id: 1,
          name: 'Điện thoại iPhone 13',
          price: 19990000,
          quantity: 1,
          image: 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-blue-1-600x600.jpg'
        },
        {
          id: 3,
          name: 'Tai nghe AirPods Pro',
          price: 5990000,
          quantity: 1,
          image: 'https://cdn.tgdd.vn/Products/Images/54/211032/airpods-pro-2-thumb-600x600.jpg'
        }
      ]
    },
    {
      id: 'ORD002',
      date: '2024-03-10',
      total: 32990000,
      status: 'shipping',
      items: [
        {
          id: 2,
          name: 'Laptop Dell XPS 13',
          price: 32990000,
          quantity: 1,
          image: 'https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673978199600673_dell-xps-13-9310-i7-1165g7-16gb-512gb-4k-touch-win10-bac-1.png'
        }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle style={{ color: '#4CAF50' }} />;
      case 'shipping':
        return <FaTruck style={{ color: '#2196F3' }} />;
      case 'cancelled':
        return <FaTimesCircle style={{ color: '#f44336' }} />;
      default:
        return <FaBox style={{ color: '#FFC107' }} />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Đã hoàn thành';
      case 'shipping':
        return 'Đang giao hàng';
      case 'cancelled':
        return 'Đã hủy';
      default:
        return 'Đang xử lý';
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Lịch sử đơn hàng</h1>

      {orders.map(order => (
        <div
          key={order.id}
          style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #eee'
          }}>
            <div>
              <h3 style={{ margin: 0 }}>Đơn hàng #{order.id}</h3>
              <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>
                Ngày đặt: {order.date}
              </p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              {getStatusIcon(order.status)}
              <span>{getStatusText(order.status)}</span>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            {order.items.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  borderBottom: '1px solid #eee',
                  gap: '1rem'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0 }}>{item.name}</h4>
                  <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>
                    Số lượng: {item.quantity}
                  </p>
                </div>
                <p style={{ color: '#e44d26', fontWeight: 'bold', margin: 0 }}>
                  {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                </p>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1rem',
            borderTop: '1px solid #eee'
          }}>
            <h3 style={{ margin: 0 }}>Tổng tiền:</h3>
            <p style={{ color: '#e44d26', fontWeight: 'bold', fontSize: '1.2rem', margin: 0 }}>
              {order.total.toLocaleString('vi-VN')}đ
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders; 