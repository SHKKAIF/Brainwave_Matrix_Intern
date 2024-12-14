let currentSlide = 0;
const slides = document.querySelector('.slide-container');
const totalSlides = document.querySelectorAll('.slider-img').length;

document.querySelector('.next').addEventListener('click', function () {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', function () {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlider();
});

function updateSlider() {
    const slideWidth = document.querySelector('.slider-img').offsetWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}