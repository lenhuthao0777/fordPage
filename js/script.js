const menuIcon = document.querySelector(".hamburger-menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const Menutxt = document.querySelector(".menu-text");
const navMobile = document.querySelector(".navbar__mobile");
const disclosuresBtn = document.querySelector(".disclosures-btn");
const footerPolicy = document.querySelector(".footer__policy");
const disclosuresIcon = document.querySelector("#icon");


const iTem1 = document.querySelector("#item1");
const iTem2 = document.querySelector("#item2");
const iTem3 = document.querySelector("#item3");


const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");



const iTemMb2 = document.querySelector("#item-mb2");
const iTemMb3 = document.querySelector("#item-mb3");
const iTemMb4 = document.querySelector("#item-mb4");
const iTemMb5 = document.querySelector("#item-mb5");


const menuMb2 = document.querySelector("#menu-mb2");
const menuMb3 = document.querySelector("#menu-mb3");
const menuMb4 = document.querySelector("#menu-mb4");
const menuMb5 = document.querySelector("#menu-mb5");

const noneBorder = document.querySelector(".none-border");

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("open");
    hamburgerBtn.classList.toggle("change");
    navMobile.classList.toggle("open");
})

disclosuresBtn.addEventListener("click", ()=>{
    footerPolicy.classList.toggle("open");
    disclosuresIcon.classList.toggle("disclosures-icon-up");
})




menu1.addEventListener("click", ()=>{
    iTem1.classList.toggle("open");
    iTem2.classList.remove("open");
    iTem3.classList.remove("open");
})
menu2.addEventListener("click", ()=>{
    iTem2.classList.toggle("open");
    iTem1.classList.remove("open");
    iTem3.classList.remove("open");
})
menu3.addEventListener("click", ()=>{
    iTem3.classList.toggle("open");
    iTem2.classList.remove("open");
    iTem1.classList.remove("open");
})





menuMb2.addEventListener("click", ()=>{
    iTemMb2.classList.toggle("open");
    iTemMb3.classList.remove("open");
    iTemMb4.classList.remove("open");
    iTemMb5.classList.remove("open");
})
menuMb3.addEventListener("click", ()=>{
    iTemMb3.classList.toggle("open");
    iTemMb2.classList.remove("open");
    iTemMb4.classList.remove("open");
    iTemMb5.classList.remove("open");
})
menuMb4.addEventListener("click", ()=>{
    iTemMb4.classList.toggle("open");
    iTemMb3.classList.remove("open");
    iTemMb2.classList.remove("open");
    iTemMb5.classList.remove("open");
})
menuMb5.addEventListener("click", ()=>{
    iTemMb5.classList.toggle("open");
    iTemMb3.classList.remove("open");
    iTemMb4.classList.remove("open");
    iTemMb2.classList.remove("open");
    noneBorder.style.border = "none";
})