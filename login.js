// Login Form Handler
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const rememberMeCheckbox = document.getElementById('rememberMe');

// Demo credentials for frontend validation....
const DEMO_CREDENTIALS = {
    email: 'demo@example.com',
    password: 'demo123'
};

// Toggle Password Visibility
togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});

// Email Validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password Validation
function validatePassword(password) {
    return password.length >= 6;
}

// Clear Error Messages...
function clearErrors() {
    emailError.textContent = '';
    passwordError.textContent = '';
    emailInput.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.15)';
}

// Show Error Message
function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.style.borderColor = '#ff6b6b';
}

// Real-time Email Validation
emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim();
    if (email && !validateEmail(email)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    }
});

// Real-time Password Validation
passwordInput.addEventListener('blur', () => {
    const password = passwordInput.value;
    if (password && !validatePassword(password)) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
    } else {
        passwordError.textContent = '';
        passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    }
});

// Clear errors on input
emailInput.addEventListener('input', () => {
    if (emailError.textContent) {
        emailError.textContent = '';
        emailInput.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordError.textContent) {
        passwordError.textContent = '';
        passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    }
});

// Handle Remember Me
function handleRememberMe(email) {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
}

// Load Remembered Email on Page Load
window.addEventListener('DOMContentLoaded', () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberMeCheckbox.checked = true;
    }
});

// Form Submit Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let isValid = true;

    // Validate Email
    if (!email) {
        showError(emailInput, emailError, 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Password
    if (!password) {
        showError(passwordInput, passwordError, 'Password is required');
        isValid = false;
    } else if (!validatePassword(password)) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
        isValid = false;
    }

    // If validation passes, show success (Frontend only - no backend)
    if (isValid) {
        // Handle Remember Me
        handleRememberMe(email);

        // Show success modal
        successModal.classList.add('show');

        // Reset form
        loginForm.reset();
        
        // Restore remembered email if it was set
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            emailInput.value = rememberedEmail;
            rememberMeCheckbox.checked = true;
        }

        // Log to console (demo purposes)
        console.log('Login successful!');
        console.log('Email:', email);
        console.log('Remember Me:', rememberMeCheckbox.checked);
    }
});

// Close Modal Handler
closeModal.addEventListener('click', () => {
    successModal.classList.remove('show');
});

// Close modal on outside click
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('show');
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successModal.classList.contains('show')) {
        successModal.classList.remove('show');
    }
});

// Forgot Password Handler
const forgotPassword = document.getElementById('forgotPassword');
forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Password reset functionality would be implemented here.\n\nIn a real application, this would:\n1. Prompt for email address\n2. Send reset link to email\n3. Allow user to create new password');
});

// Social Login Handlers
const googleLogin = document.getElementById('googleLogin');
const facebookLogin = document.getElementById('facebookLogin');
const githubLogin = document.getElementById('githubLogin');

googleLogin.addEventListener('click', () => {
    console.log('Google login clicked');
    alert('Google OAuth integration would be implemented here.\n\nThis is a demo - in production, this would redirect to Google\'s OAuth flow.');
});

facebookLogin.addEventListener('click', () => {
    console.log('Facebook login clicked');
    alert('Facebook OAuth integration would be implemented here.\n\nThis is a demo - in production, this would redirect to Facebook\'s OAuth flow.');
});

githubLogin.addEventListener('click', () => {
    console.log('GitHub login clicked');
    alert('GitHub OAuth integration would be implemented here.\n\nThis is a demo - in production, this would redirect to GitHub\'s OAuth flow.');
});

// Sign Up Link Handler
const signupLink = document.getElementById('signupLink');
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Sign up page would be implemented here.\n\nThis would redirect to a registration form.');
});

// Add smooth scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

const loginCard = document.querySelector('.login-card');
observer.observe(loginCard);
