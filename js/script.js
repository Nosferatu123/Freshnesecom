// скрытие сайд-бара
    let sideBar=document.querySelector(".side-bar");
    document.querySelector(".filter").onclick=function sideBarVisible(){

            if (sideBar.classList.contains("hide")){
                sideBar.classList.remove("hide");
                setTimeout(function(){
                    sideBar.classList.remove("visually-hidden");
                },20);
            } else {
                sideBar.classList.add("visually-hidden");
                    sideBar.classList.add("hide");
            }
    }


let listView=document.querySelector('#list-view');
let gridView=document.querySelector('#grid-view');
// List View
    listView.onclick = function () {

        document.querySelector('.fa-bars').style.color="#6A983C";
        document.querySelector('.fa-border-all').style.color="#A9A9A9";
        listView.classList.add("btn-active");
        gridView.classList.remove("btn-active");

        document.querySelectorAll('.hidden').forEach(function (element) {
            element.classList.remove('hide');
        });

        document.querySelectorAll('.card').forEach(function (element) {
            element.classList.remove('box');
        });

        document.querySelectorAll('.column').forEach(function(element){
            element.classList.remove("col-xs-4", "col-sm-4", "col-md-4", "col-lg-4","col-xl-4");
            element.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12","col-xl-12");
        });

        document.querySelector(".view-content").style.flexWrap="nowrap";

        document.querySelectorAll('.equal-part').forEach(function(element){
            element.classList.add("col-xs-4", "col-sm-4", "col-md-4", "col-lg-4","col-xl-4");

        });

        document.querySelectorAll('.hide-two').forEach(function (element) {
            element.classList.add('hide');
        });

    }

// Grid View
    gridView.onclick = function () {

        document.querySelector('.fa-bars').style.color="#A9A9A9";
        document.querySelector('.fa-border-all').style.color="#6A983C";
        listView.classList.remove("btn-active");
        gridView.classList.add("btn-active");

        document.querySelectorAll('.column').forEach(function(element){
            element.classList.remove("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12","col-xl-12");
            element.classList.add("col-xs-4", "col-sm-4", "col-md-4", "col-lg-4","col-xl-4");
        });

        document.querySelectorAll('.hidden').forEach(function (element) {
            element.classList.add('hide');
        });
        document.querySelectorAll('.card').forEach(function (element) {
            element.classList.add('box');
        });

        document.querySelectorAll('.hide-two').forEach(function (element) {
            element.classList.remove('hide');
        });

        document.querySelectorAll('.equal-part').forEach(function(element){
            element.classList.remove("col-xs-4", "col-sm-4", "col-md-4", "col-lg-4","col-xl-4");
        });

    }

//переход к описанию товара
let carrot=document.querySelectorAll('.carrot');

if (!carrot==0) {

   carrot.forEach(function(element){
       element.onclick=function(){
           window.scroll(0,0);
           document.querySelector(".side-bar").classList.add("hide");
           document.querySelector(".vegetable").classList.add("hide");
           document.querySelector(".columns").style.display="none";
           document.querySelector('.description-content').style.display="";
           breadcrumbsText.children[breadcrumbsText.children.length-1].classList.remove("hide");
           breadcrumbsText.children[breadcrumbsText.children.length-2].classList.add("gray");
       }
   })
}


//добавление товаров в корзину
let addToCart=document.querySelector('.description-button');
let numberCart=document.querySelector('.basket');
let clicksBasket=0;
if (!addToCart==0){

        addToCart.onclick = function() {
            numberCart.classList.remove('hide');
            clicksBasket+=1;
            numberCart.innerHTML=clicksBasket;
        }
}


//переход на страницу category
let breadcrumbsText=document.querySelector(".breadcrumbs-text");
document.querySelectorAll(".fruitVegetables").forEach(function(element){
    element.onclick = function () {

        document.querySelector('.description-content').style.display="none";
        document.querySelector(".side-bar").classList.remove("hide", "visually-hidden");
        document.querySelector(".vegetable").classList.remove("hide");
        document.querySelector(".columns").style.display="";

        breadcrumbsText.children[breadcrumbsText.children.length-1].classList.add("hide");
        breadcrumbsText.children[breadcrumbsText.children.length-2].classList.remove("gray");

    }
})


//ползунки цены

let apply=document.querySelector('.apply');
let countChecked=0;
let countApply=0;
let par = document.querySelectorAll('.stars');
let select=document.querySelectorAll(".select");
document.createElement("selected");
let countFalse=0;

function deleteSelected() {
    for (let i = 0; i <= select.length - 1; i++) {
        if (select[i].checked == false) {
            countFalse++
        }
        if (countFalse == select.length) {
            document.querySelectorAll(".selected").forEach(function(element){
                element.style.display="";
            })
            par.forEach(function (element) {
                let selected = element.closest(".column");
                selected.classList.remove("selected");
            });
        }
    }
    countFalse = 0;
}

// подтверждение выбранных фильтров
if (!apply==0) {
    apply.onclick = applyAll;
    function applyAll(){

        //проверка пустые ли input
        if (document.querySelector("#min-field").value === ""){
            document.querySelector("#min-field").value = "0";
        }

        if (document.querySelector("#max-field").value === ""){
            document.querySelector("#max-field").value = "1000";
        }

        countApply++;

        document.querySelectorAll(".column").forEach(function(element){
            element.classList.remove("hide");
        })
        document.querySelectorAll(".selected").forEach(function(element){
            element.style.display="";
        })

        //проверка если все чекбоксы не выбраны
        for (let i=0;i<=select.length-1;i++){
            if (select[i].checked===true){

            } else {
                countChecked++;
            }
            if (countChecked===select.length){
                par.forEach(function (element) {
                    let selected = element.closest(".column");
                    selected.classList.add("selected");
                });
            }
        }
        countChecked=0;

        //скрываем карточки при выборе checkbox
        let notSelected=document.querySelectorAll(".column:not(.selected)");
        notSelected.forEach(function(element){
            element.style.display="none";
        })


        deleteSelected();

        let minField = document.querySelector("#min-field").value;
        let maxField = document.querySelector("#max-field").value;

            document.querySelector("#min-range").value = minField;
            document.querySelector("#max-range").value = maxField;

        let card=document.querySelectorAll(".column");

        //получаем массив всех цен карточек
        let searchPrice = document.querySelectorAll(".search-price");
        let price = [];

        searchPrice.forEach(function (element) {
            let number = parseFloat(element.textContent);
            price.push(number);
            return price;
        })
        //находим цены подходящие под параметры
        for (let i = 0; i < price.length; i++) {
            if (!(price[i] >= minField && price[i] <= maxField)) {
                 card[i].classList.add("hide");
            }

        }



    }
}

let reset = document.querySelector('.reset');
if (!reset == 0) {
    reset.onclick = resetAll;
}
//сбрасывает все фильтры
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
//ползуное минимальной цены
let minRange=document.querySelector('#min-range');

    minRange.oninput=function(){
        let minField=document.querySelector("#min-field");
        if (Number(minRange.value) < Number(maxRange.value)) {
            minField.value = minRange.value;
        } else {
            minField.value = Number(maxRange.value) - 1;
            minRange.value = Number(maxRange.value) - 1;
        }
    }

//ползунок максимальной цены
let maxRange=document.querySelector('#max-range');

    maxRange.oninput=function(){
        let maxField=document.querySelector("#max-field");
        if (Number(maxRange.value) > Number(minRange.value)) {
            maxField.value = maxRange.value;
        } else {
            maxField.value = Number(minRange.value) + 1;
            maxRange.value = Number(minRange.value) + 1;
        }

        maxField.value=maxRange.value;

    }

//сохраняет последнее число в input при mouseout


document.querySelector("#min-field").addEventListener("mouseout",function mouseOut(element){

            document.querySelector("#min-field").value=element.currentTarget.value;
            if (element.currentTarget.value===""){
                document.querySelector("#min-field").value=0;
            }
});


document.querySelector("#max-field").addEventListener("mouseout",function mouseOut(element){
    document.querySelector("#max-field").value=element.currentTarget.value;;
    if (element.currentTarget.value===""){
        document.querySelector("#max-field").value=1000;
    }
})


//-----------------выбор фильтров рейтинга------



select.forEach(function(element){
   element.onchange=function(element){

       let myTarget = element.target;


           switch (true) {

               case myTarget.classList.contains("five-stars"):
                   par.forEach(function (element) {

                       let active = element.querySelectorAll('.active').length;
                       if (active === 5) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let fiveStarsCheck=document.querySelector('[name="five-stars"]');
                       if (!fiveStarsCheck.checked===true && active===5){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;


               case myTarget.classList.contains("four-stars"):
                   par.forEach(function (element) {
                       let active = element.querySelectorAll('.active').length;

                       if (active === 4) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let fourStarsCheck=document.querySelector('[name="four-stars"]');
                       if (!fourStarsCheck.checked===true &&active===4){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;

               case myTarget.classList.contains("three-stars"):
                   par.forEach(function (element) {

                       let active = element.querySelectorAll('.active').length;
                       if (active === 3) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let threeStarsCheck=document.querySelector('[name="three-stars"]');
                       if (!threeStarsCheck.checked===true &&active===3){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;

               case myTarget.classList.contains("two-stars"):
                   par.forEach(function (element) {

                       let active = element.querySelectorAll('.active').length;
                       if (active === 2) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let twoStarsCheck=document.querySelector('[name="two-stars"]');
                       if (!twoStarsCheck.checked===true &&active===2){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;

               case myTarget.classList.contains("one-stars"):
                   par.forEach(function (element) {

                       let active = element.querySelectorAll('.active').length;
                       if (active === 1) {
                           let selected = element.closest(".column");
                           selected.classList.add("selected");
                       }

                       let oneStarsCheck=document.querySelector('[name="one-stars"]');
                       if (!oneStarsCheck.checked===true &&active===1){
                           let selected = element.closest(".column");
                           selected.classList.remove("selected");
                       }
                   });
                   break;

                 }

       }


})

//переход на другие страницы товаров
// document.querySelector("#page-one").onclick=function(){
//     document.querySelectorAll(".second-page").forEach(function(element){
//         element.classList.add("hide");
//     })
//     document.querySelectorAll(".first-page").forEach(function(element){
//         element.classList.remove("hide");
//     })
// }
// document.querySelector("#page-two").onclick=function(){
//     document.querySelectorAll(".first-page").forEach(function(element){
//         element.classList.add("hide");
//     })
//     document.querySelectorAll(".second-page").forEach(function(element){
//         element.classList.remove("hide");
//     })
// }

