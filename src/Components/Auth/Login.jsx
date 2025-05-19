import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useToast } from '../../Context/ToastContext';

export default function Login({ onClose, onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const { login } = useAuth();
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === formData.email);

    if (!user) {
      setError('Email not found');
      return;
    }

    if (user.password !== formData.password) {
      setError('Incorrect password');
      return;
    }

    // Login successful
    login(user);
    showToast('Successfully logged in!', 'success');
    onClose();
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-surface-secondary dark:to-dark-surface p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Sign in to continue your shopping journey
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 placeholder-transparent focus:border-indigo-500 focus:ring-0 transition-all duration-200"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-2.5 px-1 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-dark-surface-secondary transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
              >
                Email address
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 placeholder-transparent focus:border-indigo-500 focus:ring-0 transition-all duration-200"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-4 -top-2.5 px-1 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-dark-surface-secondary transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
              >
                Password
              </label>
            </div>
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <div className="flex items-center text-red-600 dark:text-red-400">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-dark-surface-secondary text-gray-500 dark:text-gray-400">
                New to our store?
              </span>
            </div>
          </div>

          <button
            onClick={onSwitchToRegister}
            className="mt-6 w-full py-3 px-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-xl font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
          >
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
} 