const navLinks = document.querySelectorAll('.nav a');
const newChatButton = document.querySelector('.header button');
const statusMessage = document.createElement('p');

statusMessage.id = 'statusMessage';
statusMessage.style.marginTop = '0.8rem';
statusMessage.style.color = '#93c5fd';
statusMessage.style.fontSize = '0.95rem';
document.querySelector('.main').appendChild(statusMessage);

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        statusMessage.textContent = `${this.textContent} section is ready.`;
    });
});

newChatButton.addEventListener('click', function () {
    statusMessage.textContent = 'Starting a new chat...';
});
