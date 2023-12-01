document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const countrySelect = document.getElementById('countrySelect');
    const submitButton = document.getElementById('submitButton');

    // Populate countries in the select dropdown
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    });

    // Event listeners for form inputs
    usernameInput.addEventListener('input', checkForm);
    passwordInput.addEventListener('input', checkForm);
    confirmPasswordInput.addEventListener('input', checkForm);
    termsCheckbox.addEventListener('change', checkForm);
    countrySelect.addEventListener('change', checkForm);

    // Event listener for form submission
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        if (checkForm()) {
            displayWelcomeMessage();
        }
    });

    function checkForm() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const termsChecked = termsCheckbox.checked;
        const countrySelected = countrySelect.value;

        const isUsernameValid = username !== '';
        const isPasswordValid = password.length >= 12;
        const isConfirmPasswordValid = confirmPassword === password;
        const areTermsAccepted = termsChecked;
        const isCountrySelected = countrySelected !== '';

        const isFormValid = isUsernameValid && isPasswordValid && isConfirmPasswordValid && areTermsAccepted && isCountrySelected;

        submitButton.disabled = !isFormValid;

        return isFormValid;
    }

    function displayWelcomeMessage() {
        const username = usernameInput.value.trim();
        const countrySelected = countrySelect.options[countrySelect.selectedIndex].textContent;

        const welcomeMessage = document.createElement('h1');
        welcomeMessage.textContent = `Welcome ${username}! The country you selected is ${countrySelected}`;

        document.body.appendChild(welcomeMessage);
    }
});
