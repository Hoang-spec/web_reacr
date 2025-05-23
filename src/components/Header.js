import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaClipboardList, FaSearch, FaCog } from 'react-icons/fa';

function Header({ cartCount }) {
  return (
    <header style={{
      backgroundColor: 'white',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: '#333',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          Shop Online
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/search" style={{
            textDecoration: 'none',
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaSearch />
            Tìm kiếm
          </Link>
          <Link to="/account" style={{
            textDecoration: 'none',
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaUser />
            Tài khoản
          </Link>
          <Link to="/orders" style={{
            textDecoration: 'none',
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaClipboardList />
            Đơn hàng
          </Link>
          <Link to="/admin" style={{
            textDecoration: 'none',
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaCog />
            Quản lý
          </Link>
          <Link to="/cart" style={{
            textDecoration: 'none',
            color: '#333',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            position: 'relative'
          }}>
            <FaShoppingCart />
            Giỏ hàng
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#4CAF50',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header; 