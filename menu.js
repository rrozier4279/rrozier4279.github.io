function toggleMenu() {
    var menub = document.getElementById('menub'); // Corrected ID
    if (menub.style.display === 'block') {
        menub.style.display = 'none';
    } else {
        menub.style.display = 'block';
    }
}

document.querySelector('.hicon').addEventListener('click', toggleMenu);
