document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu ul');

    menuIcon.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 600) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});
