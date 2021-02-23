let item = document.getElementsByClassName("viewMd");
let viewLessbtn = document.getElementById("viewLess");
console.log(viewLessbtn);
let viewAllbtn = document.getElementById("viewAll");

function viewAll() {
    let sceenSize = document.documentElement.clientWidth;
    if (sceenSize <= 768) {
        for (var i = 0; i < item.length; i++) {
            item[i].style.display = "block";
            viewAllbtn.style.display = "none";
            viewLessbtn.style.display = "block";
        }
    }
}

function viewLess() {
    let sceenSize = document.documentElement.clientWidth;
    if (sceenSize <= 768) {
        for (var i = 0; i < item.length; i++) {
            item[i].style.display = "none";
            viewLessbtn.style.display = "none";
            viewAllbtn.style.display = "block";
        }
    } else {
        viewLessbtn.style.display = "none";
    }
}


function reSizeWidown() {
    let windowSize = document.documentElement.clientWidth;
    if (parseFloat(windowSize) > 768) {
        if (viewAllbtn.style.display === "block" || viewLessbtn.style.display === "block") {
            for (var i = 0; i < item.length; i++) {
                item[i].style.display = "block";
            }
            viewAllbtn.style.display = "none";
            viewLessbtn.style.display = "none";
        }
      }
      if (parseInt(windowSize) <= 768) {
        for (var i = 0; i < item.length; i++) {
            item[i].style.display = "none";
        }
        viewAllbtn.style.display = "block";
        viewLessbtn.style.display = "none";
  }
}
