//Testimonial Slider

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



//Experience Statistics counter
const clients = document.querySelector(".clients")
const quality = document.querySelector(".quality")
const missions = document.querySelector(".missions")

let counterClient = 0;
let counterQuality = 0;
let counterMissions = 0;


const clientTimer = setInterval(() => {
    counterClient++;
    clients.textContent = `${counterClient}`
    if(counterClient == 570) clearInterval(clientTimer)
}, 1);

const qualityTimer = setInterval(() => {
    counterQuality++;
    quality.textContent = `${counterQuality}%`
    if(counterQuality == 100) clearInterval(qualityTimer)
}, 25);

const missionTimer = setInterval(() => {
    counterMissions++;
    missions.textContent = `${counterMissions}+`
    if(counterMissions == 957) clearInterval(missionTimer)
}, 1);




// For the accordion section 
$(document).ready(function () {
    //Bootstrap Carousel slider
    $('.carousel').carousel();

    // Add down arrow icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle right and down arrow icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});