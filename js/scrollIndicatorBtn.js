let scrollCarousel = document.getElementById("scrollCarousel");
let backToTopBtn = document.getElementById("backToTopBtn");
let rootElement = document.documentElement;
// https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
function scrollToSomething() {
    window.scrollBy(0, 630);
    addDisplayNone();
}

function addDisplayBlock() {
    scrollCarousel.style.display = "block";
}

function addDisplayNone() {
    scrollCarousel.style.display = "none";
}

function backToTop() {
    rootElement.scrollTo({
        top: 0
    })
}

function addDisplayBlock_To_BackToTop() {
    backToTopBtn.style.display = "block";
}

function addDisplayNone_To_BackToTop() {
    backToTopBtn.style.display = "none";
}