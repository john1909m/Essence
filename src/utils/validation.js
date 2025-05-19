export const validateFullName = (name) => {
  const regex = /^[A-Z][a-zA-Z\s]{2,}$/;
  return {
    isValid: regex.test(name),
    message: 'Name must start with a capital letter and be at least 3 characters long'
  };
};

export const validatePhone = (phone) => {
  const regex = /^\d+$/;
  return {
    isValid: regex.test(phone),
    message: 'Phone number must contain only digits'
  };
};

export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
  return {
    isValid: regex.test(email),
    message: 'Email must be a valid Gmail or Yahoo address'
  };
};

export const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;

  const isValid = hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar && isLongEnough;
  
  let message = 'Password must contain:';
  if (!hasUpperCase) message += ' at least one uppercase letter,';
  if (!hasLowerCase) message += ' at least one lowercase letter,';
  if (!hasNumbers) message += ' at least one number,';
  if (!hasSpecialChar) message += ' at least one special character,';
  if (!isLongEnough) message += ' be at least 8 characters long';

  return { isValid, message: message.slice(0, -1) };
}; 