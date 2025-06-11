import React from 'react';

const SignupForm = ({ switchToLogin }) => {
  return (
    <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
      <h3 className="text-center text-success mb-3">Client Signup</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="signupName" className="form-label">Name</label>
          <input type="text" className="form-control" id="signupName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="signupEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="signupEmail" required />
        </div>
        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="signupPassword" required />
        </div>
        <button type="submit" className="btn btn-success w-100">Sign up</button>
        <p className="mt-3 text-center">
          Already have an account? <button className="btn btn-link p-0" onClick={switchToLogin}>Login</button>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
