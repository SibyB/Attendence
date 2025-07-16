
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }

  } = useForm();

  const navigate = useNavigate();
  const newPassword = watch('newPassword');

  const onSubmit = (data) => {
    console.log("Password updated:", data.newPassword);
    alert("Password reset successfully");
    navigate('/login');
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white p-4 p-md-5 rounded shadow"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <h3 className="text-center mb-4">Reset Password</h3>

        {/* New Password */}
       <div className="mb-3">
  <label htmlFor="newPassword" className="form-label">New Password</label>
  <input
    type="password"
    id="newPassword"
    className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
    placeholder="Enter new password"
    {...register('newPassword', {
      required: 'New password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters long'
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        message: 'Must include uppercase, lowercase, number, and special character'
      }
    })}
  />
  <div className="invalid-feedback">{errors.newPassword?.message}</div>
</div>

        {/* Confirm Password */}
        <div className="mb-3">
  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
  <input
    type="password"
    id="confirmPassword"
    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
    placeholder="Confirm new password"
    {...register('confirmPassword', {
      required: 'Please confirm your password',
      validate: value =>
        value === newPassword || 'Passwords do not match'
    })}
  />
  <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
</div>

        <button type="submit" className="btn btn-primary w-100">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

