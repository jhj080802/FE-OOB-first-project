document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const homeButton = document.getElementById('homeButton');

    togglePassword.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
    });

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Login button clicked!');
        // Add login logic here
    });

    homeButton.addEventListener('click', function() {
        alert('Home button clicked!');
        // Add logic to navigate to home page here
    });
});
