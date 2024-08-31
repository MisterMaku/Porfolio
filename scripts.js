document.getElementById('theme-toggle').addEventListener('click', () => {
    const body = document.body;
    const toggleIndicator = document.querySelector('.toggle-indicator');
    const toggleButton = document.getElementById('theme-toggle');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.style.backgroundColor = '#333'; // Dark mode color
        toggleIndicator.style.transform = 'translateX(30px)';
        toggleButton.setAttribute('aria-label', 'Switch to Custom Mode');
    } else if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('custom-mode');
        toggleButton.style.backgroundColor = '#8e44ad'; // Purple color for custom mode
        toggleIndicator.style.transform = 'translateX(60px)';
        toggleButton.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
        body.classList.remove('custom-mode');
        body.classList.add('light-mode');
        toggleButton.style.backgroundColor = '#ddd'; // Light mode color
        toggleIndicator.style.transform = 'translateX(0)';
        toggleButton.setAttribute('aria-label', 'Switch to Dark Mode');
    }
});
