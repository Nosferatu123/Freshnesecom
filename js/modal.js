let widthOne=document.documentElement.clientWidth;
function makeCounter() {
    var currentCount = 1;

    return function() {
        return currentCount++;
    };
}
var counter = makeCounter();
var counter2 = makeCounter();
var counter3= makeCounter();
var counter4 = makeCounter();
var counter5 = makeCounter();
var counter6= makeCounter();
var counter7= makeCounter();
var counter8 = makeCounter();
var counter9= makeCounter();
var counter10= makeCounter();
var counter11= makeCounter();
var counter12= makeCounter();
var counter13 = makeCounter();
var counter14 = makeCounter();
var counter15= makeCounter();
var counter16 = makeCounter();
var counter17 = makeCounter();
var counter18= makeCounter();

document.querySelectorAll('.modal-show').forEach(function(element){
       element.onclick=showModal;
    });
document.querySelectorAll('.card-banner-text4').forEach(function(element){

    element.onclick=showModal;
});

document.querySelectorAll('.modal-close').forEach(function(element){
    element.onclick=closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function(element){
    element.onclick=closeModalWrap;
});

document.onkeydown=function(event){

    if (event.code === "Escape"){
        document.querySelectorAll('.modal-wrap').forEach(function(element){
            element.classList.add('hide');
        })
    }
    document.body.style.overflow = 'visible';
    document.body.style.paddingRight="";
    document.querySelector(".header").style.left="";




}

//создает блок товара в корзине
function chips(message){
     let chips=document.querySelector(".chips");
    let clone=chips.cloneNode(true);
    clone.children[1].classList.add(message);
    clone.children[1].innerHTML=message;
    let img=document.querySelector("."+message);
    let cloneImg=img.cloneNode(true);
    clone.children[0].insertAdjacentElement("beforeend", cloneImg);
    // clone.children[2].children[1].setAttribute("data",message);
    clone.classList.remove('hide');
    document.querySelector(".if-empty-basket").appendChild(clone);
}
//вставляет блок товара в корзину
var count=0;
function addCart(closest,counter){

    let message=closest.children[1].children[0].children[0].textContent.toLowerCase();

    let length=document.querySelector(".if-empty-basket").children.length;

        if (document.querySelector(".if-empty-basket").children[0]===undefined) {
           chips(message);
            length=document.querySelector(".if-empty-basket").children.length;
        } else {

                for (let i=0;i<length;i++){

                    if (document.querySelector(".if-empty-basket").children[i].children[1].textContent !== message) {
                        count++;
                        if (count===length){
                            chips(message);
                            length=document.querySelector(".if-empty-basket").children.length;
                        }
                        continue;
                    }

                    if (document.querySelector(".if-empty-basket").children[i].children[1].textContent!==message) {
                       continue;
                    }
                    if (document.querySelector(".if-empty-basket").children[i].children[1].textContent===message){
                        document.querySelector(".if-empty-basket").children[i].children[2].children[1].value = counter;
                    }

                }

        }

    for (let i=0;i<length;i++){
        let buttonMinus=document.querySelector(".if-empty-basket").children[i].children[2].children[0];
        let buttonPlus=document.querySelector(".if-empty-basket").children[i].children[2].children[2];

        function Minus(){
            counter--;
            counter=counter<1?1:counter;
            document.querySelector(".if-empty-basket").children[i].children[2].children[1].value = counter;
        }

        function Plus(){
            counter++;
            document.querySelector(".if-empty-basket").children[i].children[2].children[1].value = counter;
        }

        buttonPlus.onclick=Plus;
        buttonMinus.onclick=Minus;

    }

    // console.log("-----------");
    // for (let i=0;i<length;i++) {
    //
    //     console.log(document.querySelector(".if-empty-basket").children[i]);
    //
    // }
    //  console.log("length"+length);
    // console.log("-----------");
    count=0;
}

function showModal() {

    let closest=this.closest(".card");

    if (closest!==null) {
        document.querySelector(".empty-basket").style.display="none";
        document.querySelector(".if-empty-basket").classList.remove("hide");
        document.querySelector(".if-empty-basket").style.height="250px";
        switch (true){
            case closest.children[0].children[0].classList.contains("carrot"):
                addCart(closest,counter());
                break;
            case closest.children[0].children[0].classList.contains("potato"):
                addCart(closest,counter2());
                break;
            case closest.children[0].children[0].classList.contains("pumpkin"):
                addCart(closest,counter3());
                break;
            case closest.children[0].children[0].classList.contains("cucumber"):
                addCart(closest,counter4());
                break;
            case closest.children[0].children[0].classList.contains("onion"):
                addCart(closest,counter5());
                break;
            case closest.children[0].children[0].classList.contains("beet"):
                addCart(closest,counter6());
                break;
            case closest.children[0].children[0].classList.contains("pepper"):
                addCart(closest,counter7());
                break;
            case closest.children[0].children[0].classList.contains("corn"):
                addCart(closest,counter8());
                break;
            case closest.children[0].children[0].classList.contains("tomato"):
                addCart(closest,counter9());
                break;
            case closest.children[0].children[0].classList.contains("apple"):
                addCart(closest,counter10());
                break;
            case closest.children[0].children[0].classList.contains("banana"):
                addCart(closest,counter11());
                break;
            case closest.children[0].children[0].classList.contains("pear"):
                addCart(closest,counter12());
                break;
            case closest.children[0].children[0].classList.contains("plum"):
                addCart(closest,counter13());
                break;
            case closest.children[0].children[0].classList.contains("peach"):
                addCart(closest,counter14());
                break;
            case closest.children[0].children[0].classList.contains("kiwi"):
                addCart(closest,counter15());
                break;
            case closest.children[0].children[0].classList.contains("avocado"):
                addCart(closest,counter16());
                break;
            case closest.children[0].children[0].classList.contains("watermelon"):
                addCart(closest,counter17());
                break;
            case closest.children[0].children[0].classList.contains("tangerine"):
                addCart(closest,counter18());
                break;

        }

    }

//удаление товара из корзины
    if (document.querySelector(".fa-trash-alt")!==null) {
        document.querySelectorAll(".fa-trash-alt").forEach(function(element){
            element.onclick=function(){
                switch (true){
                    case  this.closest(".chips").children[0].children[0].classList.contains("carrot"):
                    counter=0;
                    counter=makeCounter();
                    break;
                    case  this.closest(".chips").children[0].children[0].classList.contains("potato"):
                          counter2=0;
                          counter2=makeCounter();
                    break;
                    case this.closest(".chips").children[0].children[0].classList.contains("pumpkin"):
                         counter3=0;
                         counter3=makeCounter();
                    break;
                    case this.closest(".chips").children[0].children[0].classList.contains("cucumber"):
                         counter4=0;
                         counter4=makeCounter();
                    break;
                    case this.closest(".chips").children[0].children[0].classList.contains("onion"):
                        counter5=0;
                        counter5=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("beet"):
                        counter6=0;
                        counter6=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("pepper"):
                        counter7=0;
                        counter7=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("corn"):
                        counter8=0;
                        counter8=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("tomato"):
                        counter9=0;
                        counter9=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("apple"):
                        counter10=0;
                        counter10=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("banana"):
                        counter11=0;
                        counter11=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("pear"):
                        counter12=0;
                        counter12=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("plum"):
                        counter13=0;
                        counter13=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("peach"):
                        counter14=0;
                        counter14=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("kiwi"):
                        counter15=0;
                        counter15=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("avocado"):
                        counter16=0;
                        counter16=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("watermelon"):
                        counter17=0;
                        counter17=makeCounter();
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("tangerine"):
                        counter18=0;
                        counter18=makeCounter();
                        break;
                }

                this.closest(".chips").parentNode.removeChild( this.closest(".chips"));

                if (document.querySelector(".if-empty-basket").children.length===0){
                    document.querySelector(".empty-basket").style.display="";
                    document.querySelector(".if-empty-basket").style.height="";
                }


            }
        })
    }

    document.body.style.overflow = 'hidden';
    let widthTwo = document.documentElement.clientWidth;
    let diff = widthTwo - widthOne;
    if ((diff) > 0) {
        document.body.style.paddingRight += diff + "px";
        document.querySelector(".header").style.left=-diff/2  + "px";

    }

    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');

}

function closeModal(){
    document.body.style.overflow = 'visible';
    let modalId=this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.add('hide');
    document.querySelector(modalId).classList.add('hide');
    document.body.style.paddingRight="";
    document.querySelector(".header").style.left="";

}

function closeModalWrap(event){

    if (event.target.classList.contains("modal-wrap")){
        event.target.classList.add('hide');
        document.body.style.overflow = 'visible';
        document.body.style.paddingRight="";
        document.querySelector(".header").style.left="";

    }

}





