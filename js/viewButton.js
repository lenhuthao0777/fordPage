let item = document.getElementsByClassName("viewMd");
let viewLessbtn = document.getElementById("viewLess");
console.log(viewLessbtn);
let viewAllbtn = document.getElementById("viewAll");

function viewAll() {
    for (var i = 0; i < item.length; i++) {
        item[i].style.display = "block";
        viewAllbtn.style.display = "none";
        viewLessbtn.style.display = "block";
    }
}

function viewLess() {
    for (var i = 0; i < item.length; i++) {
        item[i].style.display = "none";
        viewLessbtn.style.display = "none";
        viewAllbtn.style.display = "block";
    }
}