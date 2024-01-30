export function isValidEmail(email) {
  // Simple regex for basic email validation
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}
