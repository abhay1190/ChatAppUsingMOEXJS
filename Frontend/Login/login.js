const form = document.getElementById('loginForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        message.textContent = 'Please enter both username and password.';
        message.style.color = '#fda4af';
        console.log(event);
        return;
    }

    if (username === 'admin' && password === 'admin123') {
        console.log(event);
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = '../DashBoard/dashboard.html';
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = '#fda4af';
    }

    // message.textContent = `Welcome back, ${username}!`;
    // message.style.color = '#86efac';
});