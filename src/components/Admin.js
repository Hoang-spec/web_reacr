import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaBox, FaClipboardList } from 'react-icons/fa';

function Admin() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Điện thoại iPhone 13',
      description: 'iPhone 13 128GB - Hàng chính hãng',
      price: 19990000,
      image: 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-blue-1-600x600.jpg',
      stock: 10
    },
    {
      id: 2,
      name: 'Laptop Dell XPS 13',
      description: 'Laptop Dell XPS 13 9310 - Core i7',
      price: 32990000,
      image: 'https://images.fpt.shop/unsafe/fit-in/800x800/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673978199600673_dell-xps-13-9310-i7-1165g7-16gb-512gb-4k-touch-win10-bac-1.png',
      stock: 5
    }
  ]);

  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      customerName: 'Nguyễn Văn A',
      date: '2024-03-15',
      total: 25990000,
      status: 'completed',
      items: [
        {
          id: 1,
          name: 'Điện thoại iPhone 13',
          price: 19990000,
          quantity: 1
        },
        {
          id: 3,
          name: 'Tai nghe AirPods Pro',
          price: 5990000,
          quantity: 1
        }
      ]
    }
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    stock: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      id: products.length + 1,
      ...newProduct,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock)
    };
    setProducts([...products, product]);
    setNewProduct({
      name: '',
      description: '',
      price: '',
      image: '',
      stock: ''
    });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    setProducts(products.map(p =>
      p.id === editingProduct.id ? editingProduct : p
    ));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Quản lý</h1>

      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={() => setActiveTab('products')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'products' ? '#4CAF50' : '#f8f9fa',
            color: activeTab === 'products' ? 'white' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
        >
          <FaBox style={{ marginRight: '0.5rem' }} />
          Sản phẩm
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: activeTab === 'orders' ? '#4CAF50' : '#f8f9fa',
            color: activeTab === 'orders' ? 'white' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          <FaClipboardList style={{ marginRight: '0.5rem' }} />
          Đơn hàng
        </button>
      </div>

      {activeTab === 'products' && (
        <>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>
              {editingProduct ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}
            </h2>
            <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    value={editingProduct ? editingProduct.name : newProduct.name}
                    onChange={(e) => editingProduct
                      ? setEditingProduct({ ...editingProduct, name: e.target.value })
                      : setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Giá
                  </label>
                  <input
                    type="number"
                    value={editingProduct ? editingProduct.price : newProduct.price}
                    onChange={(e) => editingProduct
                      ? setEditingProduct({ ...editingProduct, price: Number(e.target.value) })
                      : setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Số lượng
                  </label>
                  <input
                    type="number"
                    value={editingProduct ? editingProduct.stock : newProduct.stock}
                    onChange={(e) => editingProduct
                      ? setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })
                      : setNewProduct({ ...newProduct, stock: e.target.value })
                    }
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Hình ảnh
                  </label>
                  <input
                    type="text"
                    value={editingProduct ? editingProduct.image : newProduct.image}
                    onChange={(e) => editingProduct
                      ? setEditingProduct({ ...editingProduct, image: e.target.value })
                      : setNewProduct({ ...newProduct, image: e.target.value })
                    }
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                  />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Mô tả
                  </label>
                  <textarea
                    value={editingProduct ? editingProduct.description : newProduct.description}
                    onChange={(e) => editingProduct
                      ? setEditingProduct({ ...editingProduct, description: e.target.value })
                      : setNewProduct({ ...newProduct, description: e.target.value })
                    }
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                      minHeight: '100px'
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {editingProduct ? <FaEdit /> : <FaPlus />}
                  {editingProduct ? 'Cập nhật' : 'Thêm sản phẩm'}
                </button>
                {editingProduct && (
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Hủy
                  </button>
                )}
              </div>
            </form>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Danh sách sản phẩm</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Hình ảnh</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Tên sản phẩm</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Giá</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Số lượng</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '1rem' }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            objectFit: 'cover',
                            borderRadius: '4px'
                          }}
                        />
                      </td>
                      <td style={{ padding: '1rem' }}>{product.name}</td>
                      <td style={{ padding: '1rem' }}>
                        {product.price.toLocaleString('vi-VN')}đ
                      </td>
                      <td style={{ padding: '1rem' }}>{product.stock}</td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            onClick={() => handleEditProduct(product)}
                            style={{
                              padding: '0.5rem',
                              backgroundColor: '#2196F3',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            style={{
                              padding: '0.5rem',
                              backgroundColor: '#f44336',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'orders' && (
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Danh sách đơn hàng</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Mã đơn hàng</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Khách hàng</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Ngày đặt</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Tổng tiền</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Trạng thái</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '1rem' }}>{order.id}</td>
                    <td style={{ padding: '1rem' }}>{order.customerName}</td>
                    <td style={{ padding: '1rem' }}>{order.date}</td>
                    <td style={{ padding: '1rem' }}>
                      {order.total.toLocaleString('vi-VN')}đ
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <select
                        value={order.status}
                        onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                        style={{
                          padding: '0.5rem',
                          borderRadius: '4px',
                          border: '1px solid #ddd'
                        }}
                      >
                        <option value="pending">Đang xử lý</option>
                        <option value="shipping">Đang giao hàng</option>
                        <option value="completed">Đã hoàn thành</option>
                        <option value="cancelled">Đã hủy</option>
                      </select>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <button
                        onClick={() => {/* Xem chi tiết đơn hàng */}}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#2196F3',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin; 