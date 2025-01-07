const passwordInput = document.getElementById("password");
const passwordStrengthLabel = document.getElementById("password-strength");
const progressBarFill = document.getElementById("progress-bar-fill");
const timeToCrackLabel = document.getElementById("time-to-crack");

passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    const strength = calculateStrength(password);
    updateStrengthDisplay(strength);
});

function calculateStrength(password) {
    let score = 0;
    let timeToCrack = "";

    // Rule 1: Length check (minimum 8 characters for basic strength)
    if (password.length >= 8) score++;

    // Rule 2: Contains both uppercase and lowercase characters
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;

    // Rule 3: Contains numbers
    if (/[0-9]/.test(password)) score++;

    // Rule 4: Contains at least one special character (non-alphanumeric)
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Rule 5: Avoid common patterns (e.g., 123456)
    const commonPatterns = [
        "123456", "password", "qwerty", "111111", "abc123"
    ];
    if (commonPatterns.some(pattern => password.toLowerCase().includes(pattern))) score = 0;

    // Rule 6: Avoid dictionary words
    const dictionaryWords = ["apple", "password", "letmein"];
    if (dictionaryWords.some(word => password.toLowerCase().includes(word))) score = 0;

    // Estimate time to crack based on entropy
    const estimatedTime = calculateCrackTime(password);
    timeToCrack = estimatedTime;

    return { score, timeToCrack };
}

function calculateCrackTime(password) {
    // Calculate entropy
    const length = password.length;
    const charset = getCharset(password);
    const possibleCombinations = Math.pow(charset, length);
    const entropy = Math.log2(possibleCombinations);

    // Brute-force estimate: 10 billion guesses per second (10^10)
    const guessesPerSecond = Math.pow(10, 10);
    const secondsToCrack = possibleCombinations / guessesPerSecond;

    return formatTime(secondsToCrack);
}

function getCharset(password) {
    let charset = 26; // Lowercase letters
    if (/[A-Z]/.test(password)) charset += 26; // Uppercase letters
    if (/[0-9]/.test(password)) charset += 10; // Digits
    if (/[^A-Za-z0-9]/.test(password)) charset += 32; // Special characters
    return charset;
}

function formatTime(seconds) {
    if (seconds < 60) {
        return `${Math.round(seconds)} seconds`;
    } else if (seconds < 3600) {
        return `${Math.round(seconds / 60)} minutes`;
    } else if (seconds < 86400) {
        return `${Math.round(seconds / 3600)} hours`;
    } else {
        return `${Math.round(seconds / 86400)} days`;
    }
}

function updateStrengthDisplay({ score, timeToCrack }) {
    let strengthText = '';
    let progressWidth = 0;

    switch(score) {
        case 0:
            strengthText = 'Weak';
            progressWidth = '20%';
            passwordStrengthLabel.className = 'weak';
            break;
        case 1:
            strengthText = 'Fair';
            progressWidth = '40%';
            passwordStrengthLabel.className = 'fair';
            break;
        case 2:
            strengthText = 'Good';
            progressWidth = '60%';
            passwordStrengthLabel.className = 'good';
            break;
        case 3:
            strengthText = 'Strong';
            progressWidth = '80%';
            passwordStrengthLabel.className = 'strong';
            break;
        case 4:
            strengthText = 'Very Strong';
            progressWidth = '100%';
            passwordStrengthLabel.className = 'very-strong';
            break;
        default:
            strengthText = 'Weak';
            progressWidth = '20%';
            passwordStrengthLabel.className = 'weak';
    }

    passwordStrengthLabel.textContent = `Strength: ${strengthText}`;
    progressBarFill.style.width = progressWidth;
    timeToCrackLabel.textContent = `Estimated time to crack: ${timeToCrack}`;
}
