// for front page displaying
window.onload = function() {
    window.scrollTo(0, 0);
};


// about view more detail about button working


const moreBtn = document.querySelector('.about-more');
const aboutDetail = document.querySelector('.about-detail');

moreBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Stop the default jump-to-top behavior

    // Toggle expanded class
    aboutDetail.classList.toggle('expanded');

    // Change button text
    if (aboutDetail.classList.contains('expanded')) {
        moreBtn.textContent = 'View Less';
    } else {
        moreBtn.textContent = 'View More';
    }
});



// LOAD MORE SERVICES BUTTON WORKING

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick =() =>{
    let boxes = [...document.querySelectorAll('.services-section .box-container .box')]
    for (var i = currentItem; i < currentItem + 3 ; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;

    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }

}

// WIN  hide and show DETAIL FOR 2025

var div = document.getElementById('win-detail');
var display = 0;

 function hideshow(){
    if(display == 1){
        div.style.display = 'block';
        display = 0;
    }
    else
    {
        div.style.display = 'none';
        display = 1;
    }

 }

//  WIN DETAL FOR 2024

function hideshow2024() {
    var div2024 = document.getElementById("win-detail-2024");

    if (div2024.style.display === "none" || div2024.style.display === "") {
        div2024.style.display = "block"; // Show details for 2024
    } else {
        div2024.style.display = "none"; // Hide details for 2024
    }
}

// Win detail for 2023
function hideshow2023() {
    var div2023 = document.getElementById("win-detail-2023");

    if (div2023.style.display === "none" || div2023.style.display === "") {
        div2023.style.display = "block"; // Show details for 2023
    } else {
        div2023.style.display = "none"; // Hide details for 2023
    }
}
// Win detail for 2022
function hideshow2022() {
    var div2022 = document.getElementById("win-detail-2022");

    if (div2022.style.display === "none" || div2022.style.display === "") {
        div2022.style.display = "block"; // Show details for 2023
    } else {
        div2022.style.display = "none"; // Hide details for 2023
    }
}




