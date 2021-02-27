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
    let sceenSize = document.documentElement.clientWidth;
    if (sceenSize <= 1200) {
        scrollCarousel.style.display = "none";
    }
}

function addDisplayNone() {
    scrollCarousel.style.display = "none";
}
// Hàm xác định kích cỡ màn hình nếu bé hơn 1200px sẽ ẩn nút scrollCarousel
function isNeedScrollBtn() {
    let sceenSize = document.documentElement.clientWidth;
    if (sceenSize <= 1200) {
        scrollCarousel.style.display = "none";
    }
}

// back to top button
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