'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate login (no real authentication)
    console.log('Login attempt:', formData);
    
    // Store a fake token to simulate being logged in
    localStorage.setItem('token', 'fake-jwt-token');
    
    // Redirect to matches page
    window.location.href = '/matches';  };
  
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-9rem)] py-8 px-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body p-6 sm:p-8">
          <div className="flex justify-center mb-4">
            <div className="text-primary text-2xl font-bold">HostelMate</div>
          </div>
          <h2 className="text-xl font-bold text-center mb-6">Login to your account</h2>
          
          <form onSubmit={handleSubmit}>            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="input input-bordered w-full focus:input-primary"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
              <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="********"
                className="input input-bordered w-full focus:input-primary"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>            </div>
            
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full hover:btn-primary-focus transition-all duration-300">Login</button>
            </div>
          </form>
          
          <div className="divider my-6">OR</div>
          
          <p className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="link link-primary font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
