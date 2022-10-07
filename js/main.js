// Bootstrap Components
// This affects the carousel on the review section; I changed the class names but to no avail, kindly help look into it.

const track = document.querySelector('.track')
const slides = Array.from(track.children)
const slideWidth = slides[0].getBoundingClientRect().width
const btnContainer = document.querySelector('.buttons')
const btns = Array.from(btnContainer.children)
const nextBtn = document.querySelector('.next')

slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`
})

let targetIndex = 0;
btnContainer.addEventListener('click', e => {
    targetIndex = 0;
    const targetDot = e.target.closest('button')
    if (!targetDot) return;
    targetIndex = btns.findIndex(dot => dot === targetDot)
    updateSlide(targetDot)
})

nextBtn.addEventListener('click', () => {
    targetIndex++;
    if (targetIndex === btns.length) {
        track.style.transition = 'none'
        targetIndex = 0
        updateSlide()
    } else {
        track.style.transition = '400ms all ease-in-out'
        updateSlide()
    }
})

track.addEventListener('transitionend', () => {
    if (slides[targetIndex].classList.contains('clone')) {
        track.style.transition = 'none'
        targetIndex = 0
        updateSlide()
    }
})

function updateSlide(transitDot = btns[targetIndex]) {
    transitSlide = slides[targetIndex]
    const currentDot = btnContainer.querySelector('.current')
    track.style.transform = `translateX(-${transitSlide.style.left})`
    currentDot.classList.remove('current')
    transitDot.classList.add('current')
}

timer = setInterval(() => {
    nextBtn.click()
}, 6000)
$('.carousel').carousel()

