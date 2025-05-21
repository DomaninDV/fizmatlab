// Плавная прокрутка для меню
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Пример модального окна для кнопки "Записаться"
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Форма записи откроется здесь!');
        // Можно добавить модальное окно с формой
    });
});