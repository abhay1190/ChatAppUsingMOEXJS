const form = document.getElementById('signupForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!fullName || !email || !username || !password) {
        message.textContent = 'Please fill in all the fields.';
        message.style.color = '#fda4af';
        return;
    }

    message.textContent = `Welcome aboard, ${username}!`;
    message.style.color = '#86efac';
});