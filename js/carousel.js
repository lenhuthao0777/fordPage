const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".navi-btn");
let currentSlide = 1;

const manualNav = (manual) => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

const repeat = (activeClass) => {
    const active = document.getElementsByClassName("active");
    let i = 1;
    let repeater = () => {
        setTimeout(() => {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove("active");
            });
            slides[i].classList.add("active");
            btns[i].classList.add("active");
            i++;
            if (slides.length == i) {
                i = 0;
            } else if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    };
    repeater();
};
repeat();
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const sliders = slides.length;
const naviBtns = document.querySelectorAll(".navi-btn");
const navigatetion = naviBtns.length; 
let slideItem = 0;

function updateSlide() {
    for (let slide of slides) {
        slide.classList.remove("active");
    }
    slides[slideItem].classList.add("active");
}
function updateNavi() {
    for (let navi of naviBtns) {
        navi.classList.remove("active");
    }
    naviBtns[slideItem].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    if (slideItem === sliders - 1) {
        slideItem = 0;
    } else {
        slideItem++;
    }
    updateSlide();
    updateNavi();
});
prevBtn.addEventListener("click", () => {
    if (slideItem === 0) {
        slideItem = sliders - 1;
    } else {
        slideItem--;
    }
    updateSlide();
    updateNavi();
});
