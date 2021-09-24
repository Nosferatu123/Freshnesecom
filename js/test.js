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
    document.querySelectorAll('.hidden').forEach(function (element){
        element.classList.remove('hide');
    });

    document.querySelectorAll('.card').forEach(function (element){
        element.classList.remove('box');
    });
    document.querySelectorAll('#image').forEach(function (element){
        element.style.width = "268px";
        element.style.height = "280px";
    });
    document.querySelectorAll('.view-card').forEach(function (element){
        element.style.padding='0';
        element.style.maxHeight='280px';
    });
    document.querySelectorAll('.part-one').forEach(function (element){
        element.style.marginLeft='32px';
        element.style.marginRight='96px';
    });
    document.querySelectorAll('.part-two').forEach(function (element){
        element.style.width='164px';
        element.style.marginRight='32px';
        element.style.marginTop='0';
    });
    document.querySelectorAll('.margin').forEach(function (element){
       element.style.marginRight='0';
    });
    document.querySelectorAll('.hidden2').forEach(function (element){
        element.classList.add('hide');
    });


}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "30%";
    }


    document.querySelectorAll('.hidden').forEach(function (element){
        element.classList.add('hide');
    });
    document.querySelectorAll('.card').forEach(function (element){
        element.classList.add('box');
    });
    document.querySelectorAll('#image').forEach(function (element){
        element.style.width = "236px";
        element.style.height = "180px";
    });
    document.querySelectorAll('.view-card').forEach(function (element){
        element.style.padding='16px';
        element.style.maxHeight='332px';
    });
    document.querySelectorAll('.part-one').forEach(function (element){
        element.style.marginLeft='0';
        element.style.marginRight='0';
    });
    document.querySelectorAll('.part-two').forEach(function (element){
        element.style.width='269px';
        element.style.marginRight='0';
        element.style.marginTop='-40px';
    });
    document.querySelectorAll('.margin').forEach(function (element){
        element.style.marginRight='16px';
    });
    document.querySelectorAll('.hidden2').forEach(function (element){
        element.classList.remove('hide');
    });



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