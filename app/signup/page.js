'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    college: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.college) newErrors.college = 'College is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate sign up (no real authentication)
      console.log('Sign Up data:', formData);
      
      // Store a fake token to simulate being logged in
      localStorage.setItem('token', 'fake-jwt-token');
      
      // Redirect to profile setup
      window.location.href = '/profile';
    }
  };  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-9rem)] py-8 px-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-6 sm:p-8">
          <div className="flex justify-center mb-4">
            <div className="text-primary text-2xl font-bold">HostelMate</div>
          </div>
          <h2 className="text-xl font-bold text-center mb-6">Create Your Account</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className={`input input-bordered w-full focus:input-primary transition-colors duration-200 ${errors.name ? 'input-error' : ''}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="text-error text-xs mt-1">{errors.name}</span>}
            </div>
              <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className={`input input-bordered w-full focus:input-primary transition-colors duration-200 ${errors.email ? 'input-error' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-error text-xs mt-1">{errors.email}</span>}
            </div>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="********"
                className={`input input-bordered w-full focus:input-primary transition-colors duration-200 ${errors.password ? 'input-error' : ''}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="text-error text-xs mt-1">{errors.password}</span>}
            </div>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="********"
                className={`input input-bordered w-full focus:input-primary transition-colors duration-200 ${errors.confirmPassword ? 'input-error' : ''}`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span className="text-error text-xs mt-1">{errors.confirmPassword}</span>}
            </div>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Gender</span>
              </label>
              <select 
                name="gender" 
                className={`select select-bordered w-full focus:select-primary transition-colors duration-200 ${errors.gender ? 'select-error' : ''}`}
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="text-error text-xs mt-1">{errors.gender}</span>}
            </div>
            
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-medium">College</span>
              </label>              
              <input
                type="text"
                name="college"
                placeholder="Stanford University"
                className={`input input-bordered w-full focus:input-primary transition-colors duration-200 ${errors.college ? 'input-error' : ''}`}
                value={formData.college}
                onChange={handleChange}
              />
              {errors.college && <span className="text-error text-xs mt-1">{errors.college}</span>}
            </div>
            
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full shadow-md hover:shadow-lg transition-all duration-300">Create Account</button>
            </div>
          </form>
          
          <div className="divider my-6">OR</div>
          
          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="link link-primary font-medium hover:link-hover transition-colors duration-200">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
