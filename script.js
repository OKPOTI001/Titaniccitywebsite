// Get form elements
const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Function to check password strength
function checkPasswordStrength(password) {
  // Implement your password strength validation logic here
  // Return true if the password meets the desired criteria, otherwise return false
  // You can check for minimum length, character types (uppercase, lowercase, numbers, special characters), etc.
  // Example:
  // if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
  //   return true;
  // }
  // return false;
}

// Function to update password matching status
function updatePasswordMatch() {
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.classList.remove('password-mismatch');
  } else {
    confirmPasswordInput.classList.add('password-mismatch');
  }
}

// Add event listener to form submission
form.addEventListener('submit', function(event) {
  // Prevent form submission if passwords do not match or password strength is not met
  if (passwordInput.value !== confirmPasswordInput.value || !checkPasswordStrength(passwordInput.value)) {
    event.preventDefault();
    alert("Passwords do not match or do not meet the strength requirements!");
  }
});

// Add event listener to password input
passwordInput.addEventListener('input', function() {
  updatePasswordMatch();
});

// Add event listener to confirm password input
confirmPasswordInput.addEventListener('input', function() {
  updatePasswordMatch();
});