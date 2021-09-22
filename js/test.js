// Get the elements with class="column"
let elements = document.getElementsByClassName("column");
console.log(elements);
// Declare a loop variable
let i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "30%";

    }
}
//
// /* Optional: Add active class to the current button (highlight it) */
// let container = document.getElementById("#btnContainer");
// let btns = container.getElementsByClassName(".btn");
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function(){
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }