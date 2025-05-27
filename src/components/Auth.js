import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';

function Auth({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    if (mode === 'register') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin) {
      // Validate passwords match for registration
      if (formData.password !== formData.confirmPassword) {
        setError('Mật khẩu xác nhận không khớp');
        return;
      }
    }

    try {
      if (isLogin) {
        if (formData.email === 'admin@example.com' && formData.password === 'admin123') {
          localStorage.setItem('userRole', 'admin');
          localStorage.setItem('isLoggedIn', 'true');
          onLogin();
          navigate('/admin');
        } else if (formData.email === 'user@example.com' && formData.password === 'user123') {
          localStorage.setItem('userRole', 'user');
          localStorage.setItem('isLoggedIn', 'true');
          onLogin();
          navigate('/');
        } else {
          setError('Email hoặc mật khẩu không đúng');
        }
      } else {
        localStorage.setItem('userRole', 'user');
        localStorage.setItem('isLoggedIn', 'true');
        onLogin();
        navigate('/');
      }
    } catch (err) {
      setError('Có lỗi xảy ra, vui lòng thử lại');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    navigate(`/auth?mode=${!isLogin ? 'login' : 'register'}`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #2196F3, #4CAF50)',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #2196F3)',
          transform: isLogin ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease'
        }} />

        <h1 style={{
          fontSize: '2rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
        </h1>

        {error && (
          <div style={{
            backgroundColor: '#ffebee',
            color: '#c62828',
            padding: '1rem',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#666'
                }}>
                  Họ và tên
                </label>
                <div style={{
                  position: 'relative'
                }}>
                  <FaUser style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#666'
                  }} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.5rem',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#666'
                }}>
                  Số điện thoại
                </label>
                <div style={{
                  position: 'relative'
                }}>
                  <FaPhone style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#666'
                  }} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required={!isLogin}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.5rem',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </div>
              </div>
            </>
          )}

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#666'
            }}>
              Email
            </label>
            <div style={{
              position: 'relative'
            }}>
              <FaEnvelope style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666'
              }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem 0.8rem 2.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  fontSize: '1rem'
                }}
                placeholder="Nhập email của bạn"
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#666'
            }}>
              Mật khẩu
            </label>
            <div style={{
              position: 'relative'
            }}>
              <FaLock style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666'
              }} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem 0.8rem 2.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  fontSize: '1rem'
                }}
                placeholder="Nhập mật khẩu của bạn"
              />
            </div>
          </div>

          {!isLogin && (
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#666'
              }}>
                Xác nhận mật khẩu
              </label>
              <div style={{
                position: 'relative'
              }}>
                <FaLock style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#666'
                }} />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                  placeholder="Nhập lại mật khẩu của bạn"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '1rem',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#45a049'
              }
            }}
          >
            {isLogin ? 'Đăng Nhập' : 'Đăng Ký'}
          </button>
        </form>

        <div style={{
          marginTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ color: '#666' }}>
            {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}{' '}
            <button
              onClick={toggleForm}
              style={{
                background: 'none',
                border: 'none',
                color: '#4CAF50',
                cursor: 'pointer',
                fontWeight: 'bold',
                padding: 0,
                fontSize: '1rem',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth; 