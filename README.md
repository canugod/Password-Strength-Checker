# Password Strength Testing Tool

This is a **Password Strength Testing Tool** built with **HTML**, **CSS**, and **JavaScript**. It analyzes the strength of the password entered and provides feedback on the strength level (Weak, Fair, Good, Strong, or Very Strong), as well as an estimate of how long it would take to crack the password.

## Features

- **Password Strength Meter**: Checks password strength using a variety of factors like length, complexity (lowercase, uppercase, numbers, special characters), and patterns.
- **Time to Crack**: Estimates the time it would take to crack the entered password using brute force based on its strength.
- **Privacy Protection**: The entered password remains **private to the user** and is **never transmitted to any server**.
- **Dark Mode Theme**: The interface uses a moody, dark color scheme with blue, white, and red accents for a modern tech look.

## How it works

1. **Password Strength**: The strength of the entered password is evaluated based on:
    - **Length**: Minimum of 8 characters.
    - **Complexity**: Requires a mix of upper and lowercase letters, numbers, and special characters.
    - **Predictability**: Passwords like "password123" are considered weak.
  
2. **Time to Crack**: The estimated time to crack the password is displayed based on a simulated brute-force attack.

3. **Privacy Notice**: All password strength evaluation and cracking estimates occur **locally in your browser**. **Your password is never sent to a server**, ensuring your privacy.

## How to Use

- Live Link :- password-strength-checker-seven.vercel.app


1. Open the **index.html** file in a web browser.
2. Enter a password in the password input field.
3. View the strength of your password and an estimate of how long it would take to crack it.
4. **Please note:** The password strength results and time-to-crack estimates are based on algorithms and may vary based on the current state of password-cracking techniques.

## Files

- **`index.html`**: Main HTML file containing the structure of the tool.
- **`styles.css`**: CSS file that defines the visual style and dark mode theme.
- **`script.js`**: JavaScript file that calculates password strength and estimated time to crack.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/canugod/Password-Strength-Checker.git
    ```
2. Navigate into the project directory:
    ```bash
    cd Password-Strength-Checker
    ```
3. Open the **`index.html`** file in any web browser to use the tool.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributions

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

---

**Note**: The password you enter remains private and is not shared with any external service.
