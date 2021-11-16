

//кнопка вверх
let arrowTop=document.querySelector(".arrow-top");
arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

// let filterHeight=document.querySelector(".header").offsetHeight+document.querySelector(".breadcrumbs").offsetHeight;
let filterHeight=182;
if (document.querySelector(".side-bar")!==null){
    window.addEventListener('scroll', function() {

        if (pageYOffset>=130 && ((window.innerWidth || document.documentElement.clientWidth) <=576)){

            document.querySelector(".side-bar").style.top="0";
            // document.querySelector(".side-bar").style.position="fixed";


        }
        if (pageYOffset<130 && ((window.innerWidth || document.documentElement.clientWidth) <=576)){
            let scroll=130-pageYOffset;
            document.querySelector(".side-bar").style.top=scroll+"px";
            // document.querySelector(".side-bar").style.position="fixed";

        }

        if (pageYOffset>=filterHeight && ((window.innerWidth || document.documentElement.clientWidth) <=576)){

            document.querySelector(".vegetable").style.position="fixed";
            document.querySelector(".vegetable").style.top="0";
            document.querySelector(".vegetable").style.right="0";
            document.querySelector(".vegetable").style.left="0";
            document.querySelector(".vegetable").style.backgroundColor="#FFFFFF";
            document.querySelector(".vegetable").style.borderBottom="1px solid darkgray";
            document.querySelector(".view-content").style.marginTop=document.querySelector(".vegetable").offsetHeight+"px";

        }
        if (pageYOffset<=filterHeight && ((window.innerWidth || document.documentElement.clientWidth) <=576)){
            document.querySelector(".vegetable").style.position="static";
            document.querySelector(".vegetable").style.borderBottom="";
            document.querySelector(".view-content").style.marginTop="";
        }
    });
}

//открытие footer навигации

document.querySelectorAll(".accordion").forEach(function(element){
    if( (window.innerWidth || document.documentElement.clientWidth) <=576){
        element.onclick = function () {
            var panel=element.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                element.children[0].children[0].style.transform = 'rotate(0deg)';

            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
               element.children[0].children[0].style.transform = 'rotate(180deg)';


                // element.children[0].classList.remove("fa-chevron-down");
                // element.children[0].classList.add("fa-chevron-up");
            }

        }
    }


})
//
if( (window.innerWidth || document.documentElement.clientWidth) <=576) {
    document.querySelector(".menu-content").classList.add("hide");
    document.querySelectorAll(".menu-box").forEach(function(element){
        element.classList.add("col-9");
    })
    if (document.querySelector(".side-bar")!==null){
        document.querySelector(".side-bar").classList.add("hide");
    }
    document.querySelector(".fa-bars").parentElement.classList.remove("hide");
}
else {
    // document.querySelector(".menu-content").classList.remove("hide","animate__animated","animate__slideInDown","animate__slideOutUp");
    document.querySelector(".menu-content").classList.remove("hide","animate__animated","animate__slideInDown","animate__slideOutUp");
    document.querySelector(".menu-content").style.position="static";
    if ( document.querySelector(".side-bar")!=null){
        document.querySelector(".side-bar").classList.remove("hide","animate__animated","animate__fadeInLeft","animate__fadeOutLeft");
    }
    document.querySelectorAll(".menu-box").forEach(function(element){
        element.classList.remove("col-9");
    })
    document.querySelector(".fa-bars").parentElement.classList.add("hide");
    if (document.querySelector(".view-content")!=null){
        document.querySelector(".view-content").style.marginTop="";
    }


}

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 576px)").matches) {
        // document.querySelector(".menu-content").classList.remove("hide","animate__animated","animate__slideInDown","animate__slideOutUp");
        document.querySelector(".menu-content").classList.remove("hide","animate__animated","animate__slideInDown","animate__slideOutUp");
        document.querySelector(".menu-content").style.position="static";

        if (document.querySelector(".side-bar")!=null){
            document.querySelector(".side-bar").classList.remove("hide","animate__animated","animate__fadeInLeft","animate__fadeOutLeft");
        }

        document.querySelectorAll(".menu-box").forEach(function(element){
            element.classList.remove("col-9");
        })
        document.querySelector(".fa-bars").parentElement.classList.add("hide");

        if (document.querySelector(".list")!=null) {
            if (document.querySelector(".list").children[0].classList.contains("btn-active")) {
                document.querySelectorAll('.view-card').forEach(function (element) {
                    element.style.padding = "16px";
                });
            }
            if (document.querySelector(".list").children[1].classList.contains("btn-active")) {
                document.querySelectorAll('.view-card .equal-part').forEach(function (element) {
                    element.style.height = "280px";
                });
                document.querySelectorAll('.card-banner-text4').forEach(function (element) {
                    element.classList.add("hide");
                })
            }

            document.querySelector(".vegetable").style.position = "";
            document.querySelector(".vegetable").style.top = "";
            document.querySelector(".vegetable").style.right = "";
            document.querySelector(".vegetable").style.left = "";
            document.querySelector(".vegetable").style.borderBottom = "";
            document.querySelector(".view-content").style.marginTop = "";
        }


    } else {
        if (document.querySelector(".list")!==null) {
            if (document.querySelector(".list").children[0].classList.contains("btn-active")) {
                document.querySelectorAll('.view-card').forEach(function (element) {
                    element.style.padding = "8px";
                });
            }
            if (document.querySelector(".list").children[1].classList.contains("btn-active")) {
                document.querySelectorAll('.view-card .equal-part').forEach(function (element) {
                    element.style.height = "140px";
                });
                document.querySelectorAll('.card-banner-text4').forEach(function (element) {
                    element.classList.remove("hide");
                })
            }
        }
        document.querySelector(".menu-content").classList.add("hide");
        document.querySelectorAll(".menu-box").forEach(function(element){
            element.classList.add("col-9");
        })

        if (document.querySelector(".side-bar")!=null){
            document.querySelector(".side-bar").classList.add("hide");
        }
        document.querySelector(".fa-bars").parentElement.classList.remove("hide");

        document.querySelectorAll(".accordion").forEach(function(element) {

            element.onclick = function () {
                var panel = element.nextElementSibling;

                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    element.children[0].children[0].style.transform = 'rotate(0deg)';

                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    element.children[0].children[0].style.transform = 'rotate(180deg)';


                    // element.children[0].classList.remove("fa-chevron-down");
                    // element.children[0].classList.add("fa-chevron-up");
                }

            }
        })
    }
});
//nav меню на маленьком экране
document.querySelector(".fa-bars").onclick=function(){
    document.querySelector(".menu-content").classList.remove("hide");
    document.querySelector(".menu-content").classList.remove("animate__slideOutUp");
    document.querySelector(".menu-content").classList.add("animate__animated","animate__slideInDown");
    document.querySelector(".menu-content").style.position="fixed";
    document.querySelector(".menu-content").style.top="0";
    document.querySelector(".menu-content").style.left="0";
    document.querySelector(".menu-content").style.zIndex="3";
    // document.querySelector(".menu-content").style.height="100%";
    // document.querySelector(".menu-content").style.background="#F9F9F9";
    // document.querySelectorAll('.menu-box').forEach(function(element){
    //     // element.style.background="#F9F9F9";
    //     element.classList.add("animate__animated","animate__fadeInDown");
    // })
    document.querySelectorAll('.menu-box').forEach(function(element){
            element.style.background="#F9F9F9";
            element.style.border="1px solid #F9F9F9";
        })
}
//закрытие nav меню
document.querySelector(".navigation").children[0].onclick=function(){

    document.querySelector(".menu-content").classList.remove("animate__slideInDown");
    document.querySelector(".menu-content").classList.add("animate__animated","animate__slideOutUp");

    setTimeout( del,1000);
    function del(){
        document.querySelector(".menu-content").classList.add("hide");
    }
}
// скрытие сайд-бара

    let sideBar=document.querySelector(".side-bar");
    if (document.querySelector(".filter")!==null){
        document.querySelector(".filter").onclick=function sideBarVisible(){

            if (sideBar.classList.contains("hide")){
                if (pageYOffset>=130 && ((window.innerWidth || document.documentElement.clientWidth) <=576)){
                    document.querySelector(".side-bar").style.top="0";

                }
                if (pageYOffset<130 && ((window.innerWidth || document.documentElement.clientWidth) <=576)){
                    let scroll=130-pageYOffset;
                    document.querySelector(".side-bar").style.top=scroll+"px";
                }
                sideBar.classList.remove("hide");
                sideBar.classList.remove("animate__fadeOutLeft");
                sideBar.classList.add("animate__animated","animate__fadeInLeft");

            } else {

                sideBar.classList.remove("animate__fadeInLeft");
                sideBar.classList.add("animate__animated","animate__fadeOutLeft");
                setTimeout( del2,1000);
                function del2(){
                    sideBar.classList.add("hide");
                }
            }

        }
    }




//поставить лайк товару
document.querySelectorAll('.wish-list').forEach(function(element){

  element.addEventListener("click",function(element){

      let heart=element.target;

      if (heart.classList.contains("fa-heart")){
          heart.classList.toggle("far");
          heart.classList.toggle("fas");
      }else if (heart.children[0]){
          heart.children[0].classList.toggle("far");
          heart.children[0].classList.toggle("fas");
      } else if(heart.parentElement.children[0]){
          heart.parentElement.children[0].classList.toggle("far");
          heart.parentElement.children[0].classList.toggle("fas");
      }

  })
})

let listView=document.querySelector('#list-view');
let gridView=document.querySelector('#grid-view');

// List View
if (listView!=null){
    listView.onclick = function () {

        document.querySelector('.fa-list-ul').style.color="#6A983C";
        document.querySelector('.fa-border-all').style.color="#A9A9A9";
        listView.classList.add("btn-active");
        gridView.classList.remove("btn-active");

        document.querySelectorAll('.card-card').forEach(function(element){

            element.classList.add("box");
            element.children[0].classList.add("col-4", "col-sm-4", "col-md-4", "col-lg-4","col-xl-4");
            element.children[1].classList.add("col-5", "col-sm-5", "col-md-5", "col-lg-5","col-xl-5");
            element.children[2].classList.add("col-3", "col-sm-3", "col-md-3", "col-lg-3","col-xl-3");
        });

        document.querySelectorAll('.hidden').forEach(function (element) {
            element.classList.remove('hide');
        });

        document.querySelectorAll('.column').forEach(function(element){
            element.classList.remove("col-6", "col-sm-6", "col-md-6", "col-lg-4", "col-xl-4");
            element.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-12","col-xl-12");
        });

        document.querySelector(".view-content").style.flexWrap="nowrap";


        document.querySelectorAll('.product-detail').forEach(function(element){
            element.classList.add("col-11", "col-sm-11", "col-md-11", "col-lg-11","col-xl-11");
        });
        document.querySelectorAll('.wish-list').forEach(function(element){
            element.classList.add("col-11", "col-sm-11", "col-md-11", "col-lg-11","col-xl-11");
        });


        document.querySelectorAll('.card-banner-text4').forEach(function(element){
            if( (window.innerWidth || document.documentElement.clientWidth) >576){
                element.classList.add("hide");
            }
            element.classList.remove('col-12');
            element.classList.add('col-11');
        })

        document.querySelectorAll('.view-card').forEach(function (element) {
            element.style.padding="0";

        });


        document.querySelectorAll('.view-card .equal-part').forEach(function (element) {
            if( (window.innerWidth || document.documentElement.clientWidth) <=576){
                element.style.height="140px";
            } else {
                element.style.height="280px";
            }

            element.style.display="flex";
            element.style.flexDirection="column";
            element.style.justifyContent="center";
        });



    }
}


// Grid View
if (gridView!=null){
    gridView.onclick = function () {

        document.querySelector('.fa-list-ul').style.color="#A9A9A9";
        document.querySelector('.fa-border-all').style.color="#6A983C";
        listView.classList.remove("btn-active");
        gridView.classList.add("btn-active");

        document.querySelectorAll('.column').forEach(function(element){
            element.classList.remove("col-12", "col-sm-12", "col-md-12", "col-lg-12","col-xl-12");
            element.classList.add("col-6", "col-sm-6", "col-md-6", "col-lg-4", "col-xl-4");
        });

        document.querySelectorAll('.hidden').forEach(function (element) {
            element.classList.add('hide');
        });


        document.querySelectorAll('.card-card').forEach(function(element){
            element.classList.remove("box");
            element.children[0].classList.remove("col-4", "col-sm-4", "col-md-4", "col-lg-4","col-xl-4");
            element.children[1].classList.remove("col-5", "col-sm-5", "col-md-5", "col-lg-5","col-xl-5");
            element.children[2].classList.remove("col-3", "col-sm-3", "col-md-3", "col-lg-3","col-xl-3");
            // element.children[2].style.paddingLeft="";
        });

        document.querySelectorAll('.card-banner-text4').forEach(function(element){
            if( (window.innerWidth || document.documentElement.clientWidth) >576){
                element.classList.remove("hide");
            }
            element.classList.remove('col-11');
            element.classList.add('col-12');
        })

        document.querySelectorAll('.view-card').forEach(function (element) {
            if( (window.innerWidth || document.documentElement.clientWidth) <=576){
                element.style.padding="8px";
            } else {
                element.style.padding="16px";
            }

        });

        document.querySelectorAll('.view-card .equal-part').forEach(function (element) {
            element.style.height="";
            element.style.display="";
            element.style.flexDirection="";
            element.style.justifyContent="";
        });
    }
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


// переход на страницу category
// let breadcrumbsText=document.querySelector(".breadcrumbs-text");
// document.querySelectorAll(".fruitVegetables").forEach(function(element){
//     element.onclick = function () {
//
//         document.querySelector('.description-content').style.display="none";
//         document.querySelector(".side-bar").classList.remove("hide", "visually-hidden");
//         document.querySelector(".vegetable").classList.remove("hide");
//         document.querySelector(".columns").style.display="";
//
//         breadcrumbsText.children[breadcrumbsText.children.length-1].classList.add("hide");
//         breadcrumbsText.children[breadcrumbsText.children.length-2].classList.remove("gray");
//
//     }
// })


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
if (apply!=null) {
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
        let counterTotalProducts=0;
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
        let counterPrice=0;
        let counterPrice2=0;
        for (let i = 0; i < price.length; i++) {
            if (!(price[i] >= minField && price[i] <= maxField)) {
                counterPrice2++;
                 card[i].classList.add("hide");

            } else if (card[i].classList.contains("selected")){
                counterPrice++;

            }

        }
       console.log(counterPrice2);
        if (counterPrice===0){
            counterPrice=document.querySelectorAll(".column").length-counterPrice2;
        }

        document.querySelector(".total-products").innerHTML=counterPrice;


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
        if(uncheck[i].type==='checkbox') {
            uncheck[i].checked=false;
        }
    }

    document.querySelector("#min-field").value='0';
    document.querySelector("#max-field").value='1000';
    document.querySelector("#min-range").value = '0'
    document.querySelector("#max-range").value = '1000';
    document.querySelector(".total-products").innerHTML=document.querySelectorAll(".column").length;
}
//ползуное минимальной цены
let minRange=document.querySelector('#min-range');
if (minRange!=null){
    minRange.oninput=function(){
        let minField=document.querySelector("#min-field");
        if (Number(minRange.value) < Number(maxRange.value)) {
            minField.value = minRange.value;
        } else {
            minField.value = Number(maxRange.value) - 1;
            minRange.value = Number(maxRange.value) - 1;
        }
    }
}


//ползунок максимальной цены
let maxRange=document.querySelector('#max-range');
if (maxRange!=null){
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
}


//сохраняет последнее число в input при mouseout

if (document.querySelector("#min-field")!=null) {
    document.querySelector("#min-field").addEventListener("mouseout", function mouseOut(element) {

        document.querySelector("#min-field").value = element.currentTarget.value;
        if (element.currentTarget.value === "") {
            document.querySelector("#min-field").value = 0;
        }
    });
}
if (document.querySelector("#max-field")!=null) {
    document.querySelector("#max-field").addEventListener("mouseout", function mouseOut(element) {
        document.querySelector("#max-field").value = element.currentTarget.value;
        ;
        if (element.currentTarget.value === "") {
            document.querySelector("#max-field").value = 1000;
        }
    })
}


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

