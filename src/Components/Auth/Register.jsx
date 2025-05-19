import React, { useState } from 'react';
import { validateFullName, validatePhone, validateEmail, validatePassword } from '../../utils/validation';
import { useToast } from '../../Context/ToastContext';

export default function Register({ onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change
    let validationResult;
    switch (name) {
      case 'fullName':
        validationResult = validateFullName(value);
        break;
      case 'phone':
        validationResult = validatePhone(value);
        break;
      case 'email':
        validationResult = validateEmail(value);
        break;
      case 'password':
        validationResult = validatePassword(value);
        break;
      default:
        return;
    }

    setErrors(prev => ({
      ...prev,
      [name]: validationResult.isValid ? '' : validationResult.message
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const nameValidation = validateFullName(formData.fullName);
    const phoneValidation = validatePhone(formData.phone);
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);

    const newErrors = {
      fullName: nameValidation.isValid ? '' : nameValidation.message,
      phone: phoneValidation.isValid ? '' : phoneValidation.message,
      email: emailValidation.isValid ? '' : emailValidation.message,
      password: passwordValidation.isValid ? '' : passwordValidation.message
    };

    setErrors(newErrors);

    // Check if any errors exist
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === formData.email)) {
      showToast('Email already registered', 'error');
      return;
    }

    // Save user data
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    showToast('Registration successful!', 'success');
    onClose();
    onSwitchToLogin();
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-surface-secondary dark:to-dark-surface p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Join us and start your shopping journey
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 placeholder-transparent focus:border-indigo-500 focus:ring-0 transition-all duration-200"
                placeholder="Full Name"
              />
              <label
                htmlFor="fullName"
                className="absolute left-4 -top-2.5 px-1 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-dark-surface-secondary transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
              >
                Full Name
              </label>
              {errors.fullName && (
                <div className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.fullName}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 placeholder-transparent focus:border-indigo-500 focus:ring-0 transition-all duration-200"
                placeholder="Phone Number"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 -top-2.5 px-1 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-dark-surface-secondary transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400"
              >
                Phone Number
              </label>
              {errors.phone && (
                <div className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.phone}
                </div>
              )}
            </div>
          </div>

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
              {errors.email && (
                <div className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.email}
                </div>
              )}
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
              {errors.password && (
                <div className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errors.password}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-dark-surface-secondary text-gray-500 dark:text-gray-400">
                Already have an account?
              </span>
            </div>
          </div>

          <button
            onClick={onSwitchToLogin}
            className="mt-6 w-full py-3 px-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-xl font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
          >
            Sign in to your account
          </button>
        </div>
      </div>
    </div>
  );
} 