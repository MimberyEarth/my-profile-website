document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu-toggle');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
