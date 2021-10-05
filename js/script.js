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
//добавление товаров в корзину
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
//ползунки цены
let apply=document.querySelector('.apply');




if (!apply==0) {
    apply.onclick = applyAll;
    let count=0;
    function applyAll(){


        count+=1;
        if (count>=1){
            document.querySelectorAll(".column").forEach(function(element){
                element.classList.remove("hide");
                element.style.removeProperty("display");
            })
        }

        let minField = document.querySelector("#min-field").value;
        let maxField = document.querySelector("#max-field").value;
        document.querySelector("#min-range").value = minField;
        document.querySelector("#max-range").value = maxField;


        let reset = document.querySelector('.reset');
        if (!reset == 0) {
            reset.onclick = resetAll;
        }
        let column=document.querySelectorAll(".column");
        //получаем массив всех цен карточек
        let cards = document.querySelectorAll(".search-price");
        let cardsNumber = [];

        cards.forEach(function (element) {
            let number = parseFloat(element.textContent);
            cardsNumber.push(number);
            return cardsNumber;
        })
        //находим цены подходящие под параметры
        for (let i = 0; i < cardsNumber.length; i++) {
            if (!(cardsNumber[i] >= minField && cardsNumber[i] <= maxField)) {
                 column[i].classList.add("hide");
            }

        }
        //скрываем карточки при выборе checkbox
        let notSelected=document.querySelectorAll(".column:not(.selected)");
        notSelected.forEach(function(element){
            element.style.display="none";
        })


    }
}
let reset = document.querySelector('.reset');
if (!reset == 0) {
    reset.onclick = resetAll;
}

function resetAll(){
    document.querySelectorAll(".column").forEach(function(element){
        element.classList.remove("hide","selected");
        element.style.removeProperty("display");
    })


    let uncheck=document.getElementsByTagName('input');
    for(let i=0;i<uncheck.length;i++) {
        if(uncheck[i].type=='checkbox') {
            uncheck[i].checked=false;
        }
    }

    document.querySelector("#min-field").value='0';
    document.querySelector("#max-field").value='1000';
    document.querySelector("#min-range").value = '0'
    document.querySelector("#max-range").value = '1000';
}

let minRange=document.querySelector('#min-range');
if (!minRange==0){
    minRange.oninput=function(){

        let minField=document.querySelector("#min-field");
         minField.value=minRange.value;

        let reset = document.querySelector('.reset');
        if (!reset == 0) {
            reset.onclick =  resetAll;
        }

    }
}

let maxRange=document.querySelector('#max-range');
if (!maxRange==0){
    maxRange.oninput=function(){

        let maxField=document.querySelector("#max-field");
        maxField.value=maxRange.value;

        let reset = document.querySelector('.reset');
        if (!reset == 0) {
            reset.onclick =  resetAll;
        }

    }
}


//-----------------выбор фильтров рейтинга------
let par = document.querySelectorAll('.stars');



let select=document.querySelectorAll(".select");
document.createElement("selected");
select.forEach(function(element){
   element.onchange=function(element){

       let myTarget = element.target;

       if (myTarget.checked==true){

       }
           switch (true) {

               case myTarget.classList.contains("five-stars"):
                   par.forEach(function (element) {

                       let active = element.querySelectorAll('.active').length;
                       if (active == 5) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let fiveStarsCheck=document.querySelector('[name="five-stars"]');
                       if (!fiveStarsCheck.checked==true && active==5){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;


               case myTarget.classList.contains("four-stars"):
                   par.forEach(function (element) {
                       let active = element.querySelectorAll('.active').length;

                       if (active == 4) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let fourStarsCheck=document.querySelector('[name="four-stars"]');
                       if (!fourStarsCheck.checked==true &&active==4){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;

               case myTarget.classList.contains("three-stars"):
                   par.forEach(function (element) {

                       let active = element.querySelectorAll('.active').length;
                       if (active == 3) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let threeStarsCheck=document.querySelector('[name="three-stars"]');
                       if (!threeStarsCheck.checked==true &&active==3){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;

               case myTarget.classList.contains("two-stars"):
                   par.forEach(function (element) {

                       let active = element.querySelectorAll('.active').length;
                       if (active == 2) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let twoStarsCheck=document.querySelector('[name="two-stars"]');
                       if (!twoStarsCheck.checked==true &&active==2){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;

               case myTarget.classList.contains("one-stars"):
                   par.forEach(function (element) {

                       let active = element.querySelectorAll('.active').length;
                       if (active == 1) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let oneStarsCheck=document.querySelector('[name="one-stars"]');
                       if (!oneStarsCheck.checked==true &&active==1){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;
                 }

       }


})
