import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import "./AuthPage"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', { email: formData.email, password: formData.password });
      // Add your login logic here
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log('Signing up with:', formData);
      // Add your signup logic here
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        {isLogin ? (
          <div className="login-form">
            <h2 className="form-title">Welcome Finytive</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FaUser className="input-icon" />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FaLock className="input-icon" />
              </div>
              <button type="submit" className="submit-btn">Login</button>
            </form>
            <div className="toggle-form">
              Don't have an account?{' '}
              <button onClick={() => setIsLogin(false)} className="toggle-link">
                Sign up
              </button>
            </div>
          </div>
        ) : (
          <div className="signup-form">
            <h2 className="form-title">Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FaUser className="input-icon" />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FaEnvelope className="input-icon" />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FaLock className="input-icon" />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <FaLock className="input-icon" />
              </div>
              <button type="submit" className="submit-btn">Sign Up</button>
            </form>
            <div className="toggle-form">
              Already have an account?{' '}
              <button onClick={() => setIsLogin(true)} className="toggle-link">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;