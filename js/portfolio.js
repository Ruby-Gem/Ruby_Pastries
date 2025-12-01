
const slides = document.querySelectorAll('.carousel-container .slides');

document.querySelector('[name="random"]').addEventListener('click', () => {
    const targetSlide = slides[ Math.floor(Math.random() * slides.length) ]
    targetSlide.scrollIntoView({
        block: 'center'
    })
});