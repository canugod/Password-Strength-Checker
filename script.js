const passwordInput = document.getElementById('password');
const strengthDiv = document.getElementById('strength');

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    strengthDiv.textContent = strength;
});

function checkPasswordStrength(password) {
    const regex = {
        weak: /^(?=.*[a-z]).{1,6}$/,        // only lowercase letters, 6 or less characters
        medium: /^(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,  // lowercase + uppercase letters, 6-12 characters
        strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/, // lowercase, uppercase, digits and special characters, 12+ characters
    };

    if (regex.strong.test(password)) {
        return 'Strong';
    } else if (regex.medium.test(password)) {
        return 'Medium';
    } else if (regex.weak.test(password)) {
        return 'Weak';
    } else {
        return 'Very Weak';
    }
}
