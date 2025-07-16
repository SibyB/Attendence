import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert('Login successful');
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white p-4 p-md-5 rounded shadow"
        style={{ width: '800px', maxWidth: '700px' }}
      >
        <h2 className="text-center mb-4">Login</h2>

        {/* Mobile Number */}
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
            placeholder="Enter mobile number"
            maxLength={10}
            onKeyDown={(e) => {
    // Allow control keys like backspace, tab, arrows
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'Delete' &&
      e.key !== 'ArrowLeft' &&
      e.key !== 'ArrowRight' &&
      e.key !== 'Tab'
    ) {
      e.preventDefault();
    }
  }}
            {...register('mobile', {
              required: 'Mobile number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Mobile number must be 10 digits'
              }
            })}
          />
          <div className="invalid-feedback">{errors.mobile?.message}</div>
        </div>

        {/* Password */}
      <div className="mb-3">
  <label htmlFor="password" className="form-label">Password</label>
  <input
    type="password"
    id="password"
    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
    placeholder="Enter password"
    {...register('password', {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters'
      },
      pattern: {
        value: /^[A-Z](?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
        message: 'Must start with capital letter and include lowercase, number, special char'
      }
    })}
  />
  <div className="invalid-feedback">{errors.password?.message}</div>
</div>

        {/* Forgot Password */}
        <div className="d-flex justify-content-end mb-3">
          <Link to="/forgot-password" className="small text-primary text-decoration-none">
            Forgot Password?
          </Link>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
