import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Reset password link sent to:", data.mobile);
    alert("If the number exists, reset link has been sent!");
    navigate("/reset-password");
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h4 className="mb-3 text-center">Forgot Password</h4>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Mobile Number */}
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
              placeholder="Enter your mobile number"
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
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Mobile number must be 10 digits"
                }
              })}
            />
            <div className="invalid-feedback">{errors.mobile?.message}</div>
          </div>

          {/* OTP */}
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              <FaKey className="me-2 text-primary" />
              OTP Number
            </label>
            <input
              type="text"
              id="otp"
              className={`form-control ${errors.otp ? 'is-invalid' : ''}`}
              maxLength={6}
              placeholder="Enter the 6-digit OTP"
              {...register("otp", {
                required: "OTP is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "OTP must be 6 digits"
                }
              })}
            />
            <div className="invalid-feedback">{errors.otp?.message}</div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
