// Пример простого скрипта для анимации при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});


// Получаем элементы
const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('nav');

// При клике на бургер-меню показываем или скрываем навигацию
burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});