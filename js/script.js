// Get the elements with class="column"
let elements = document.getElementsByClassName('column');
//console.log(elements);

// List View

let listView=document.querySelector('#list-view');

if (!listView==0) {

    listView.onclick = function listView() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = "100%";
        }
        document.querySelectorAll('.hidden').forEach(function (element) {
            element.classList.remove('hide');
        });

        document.querySelectorAll('.card').forEach(function (element) {
            element.classList.remove('box');
        });
        document.querySelectorAll('.image').forEach(function (element) {
            element.style.width = "268px";
            element.style.height = "280px";
        });
        document.querySelectorAll('.view-card').forEach(function (element) {
            element.style.padding = '0';
            element.style.maxHeight = '280px';
        });
        document.querySelectorAll('.part-one').forEach(function (element) {
            element.style.marginLeft = '32px';
            element.style.marginRight = '96px';
        });
        document.querySelectorAll('.part-two').forEach(function (element) {
            element.style.width = '164px';
            element.style.marginRight = '32px';
            element.style.marginTop = '0';
        });
        document.querySelectorAll('.margin').forEach(function (element) {
            element.style.marginRight = '0';
        });
        document.querySelectorAll('.hidden2').forEach(function (element) {
            element.classList.add('hide');
        });


    }
}

// Grid View
let gridView=document.querySelector('#grid-view');
if (!gridView==0) {


    gridView.onclick = function gridView() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = "30%";
        }


        document.querySelectorAll('.hidden').forEach(function (element) {
            element.classList.add('hide');
        });
        document.querySelectorAll('.card').forEach(function (element) {
            element.classList.add('box');
        });
        document.querySelectorAll('.image').forEach(function (element) {
            element.style.width = "236px";
            element.style.height = "180px";
        });
        document.querySelectorAll('.view-card').forEach(function (element) {
            element.style.padding = '16px';
            element.style.maxHeight = '332px';
        });
        document.querySelectorAll('.part-one').forEach(function (element) {
            element.style.marginLeft = '0';
            element.style.marginRight = '0';
        });
        document.querySelectorAll('.part-two').forEach(function (element) {
            element.style.width = '269px';
            element.style.marginRight = '0';
            element.style.marginTop = '-40px';
        });
        document.querySelectorAll('.margin').forEach(function (element) {
            element.style.marginRight = '16px';
        });
        document.querySelectorAll('.hidden2').forEach(function (element) {
            element.classList.remove('hide');
        });

    }
}

let carrot=document.querySelector('.carrot');

if (!carrot==0) {

    carrot.onclick = function () {
        window.location.href = 'descriptionCarrot.html';
    }
}

let addToCart=document.querySelector('.description-button');
if (!addToCart==0){


        let numberCart=document.querySelector('.basket');

        addToCart.onclick = add;
        let clicks=0;
        function add(){
            numberCart.classList.remove('hide');
            clicks+=1;
            numberCart.innerHTML=clicks;

        }




}

let apply=document.querySelector('.apply');
if (!apply==0) {
    apply.onclick = function () {
        let minField = document.querySelector("#min-field").value;
        let maxField = document.querySelector("#max-field").value;
        document.querySelector("#min-range").value = minField;
        document.querySelector("#max-range").value = maxField;


        let reset = document.querySelector('.reset');
        if (!reset == 0) {
            reset.onclick = function () {

                document.querySelector("#min-field").value='0';
                document.querySelector("#max-field").value='1000';
                document.querySelector("#min-range").value = '250'
                document.querySelector("#max-range").value = '550';

            }

        }
    }
}


