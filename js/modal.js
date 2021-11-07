let widthOne=document.documentElement.clientWidth;

function makeCounter(currentCount) {
    return function() {
        return currentCount++;
    };
}
function minus(currentCount){
    return function() {
        currentCount--
        return currentCount=currentCount<1?1:currentCount;
    };
}
var counter = makeCounter(1);
var counter2 = makeCounter(1);
var counter3 = makeCounter(1);
var counter4 = makeCounter(1);
var counter5 = makeCounter(1);
var counter6= makeCounter(1);
var counter7= makeCounter(1);
var counter8 = makeCounter(1);
var counter9 = makeCounter(1);
var counter10 = makeCounter(1);
var counter11 = makeCounter(1);
var counter12 = makeCounter(1);
var counter13 = makeCounter(1);
var counter14 = makeCounter(1);
var counter15 = makeCounter(1);
var counter16 = makeCounter(1);
var counter17 = makeCounter(1);
var counter18 = makeCounter(1);

document.querySelectorAll('.modal-show').forEach(function(element){
       element.onclick=showModal;
    });
document.querySelectorAll('.card-banner-text4').forEach(function(element){

    element.onclick=addToBasket;
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
    document.body.style.paddingRight="0";
    document.querySelector(".header").style.left="0";

}

//создает блок товара в корзине
function chips(message,price){
     let chips=document.querySelector(".chips");
    let clone=chips.cloneNode(true);
     clone.classList.add("_"+message);
     clone.children[1].children[0].classList.add(message);
     clone.children[1].children[0].innerHTML=message;
     let img=document.querySelector("."+message);
     let cloneImg=img.cloneNode(true);
     clone.children[0].insertAdjacentElement("beforeend", cloneImg);
     clone.children[1].children[2].innerHTML=price+"&nbsp"+"&#36";
    clone.classList.remove('hide');

    document.querySelector(".if-empty-basket").appendChild(clone);

}
//вставляет блок товара в корзину
var count=0;
function addCart(closest,counter,price){

    let message=closest.children[1].children[0].children[0].textContent.toLowerCase();


    let length=document.querySelector(".if-empty-basket").children.length;

        if (document.querySelector(".if-empty-basket").children[0]===undefined) {
           chips(message,price);
            length=document.querySelector(".if-empty-basket").children.length;
        } else {

                for (let i=0;i<length;i++){

                    if (document.querySelector(".if-empty-basket").children[i].children[1].children[0].textContent !== message) {
                        count++;
                        if (count===length){

                            chips(message,price);
                            length=document.querySelector(".if-empty-basket").children.length;
                        }
                        continue;
                    }

                    if (document.querySelector(".if-empty-basket").children[i].children[1].children[0].textContent!==message) {
                       continue;
                    }
                    if (document.querySelector(".if-empty-basket").children[i].children[1].children[0].textContent===message){
                        document.querySelector(".if-empty-basket").children[i].children[1].children[1].children[1].value = counter;
                    }

                }

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
var countBasket=0;
function addToBasket(){

    document.querySelector(".basket").classList.remove("hide");
    countBasket++;
    document.querySelector(".basket").innerHTML=countBasket;
    document.querySelector(".if-empty-basket").classList.remove("hide");
    document.querySelector(".my-modal").style.height="505px";
    document.querySelector(".if-empty-basket").style.height="360px";
    let closest=this.closest(".card-card");
    let message=closest.children[1].children[0].children[0].textContent.toLowerCase();
    let totalPrice=0;
    if (closest!==null) {
         this.closest(".view-box").children[0].children[0].classList.add(message+"_");

         const price=parseFloat(this.closest(".view-box").children[0].children[0].textContent);

        document.querySelector(".empty-basket").style.display="none";
        document.querySelector(".if-empty-basket").classList.remove("hide");
        document.querySelector(".if-empty-basket").style.height="360px";

        switch (true){

            case closest.children[0].children[0].classList.contains("carrot"):

                if (document.querySelector(".if-empty-basket ._carrot")===null){
                    addCart(closest,counter(),price);

                } else {
                    counter=makeCounter(Number(document.querySelector(".if-empty-basket ._carrot").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._carrot").children[1].children[1].children[1].value=counter();

                    totalPrice=price*(counter()-1);
                    document.querySelector(".if-empty-basket ._carrot").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                     // console.log(document.querySelector(".if-empty-basket ._carrot").children[3].textContent,
                     //     Number(document.querySelector(".if-empty-basket ._carrot").children[2].children[1].value));
                }
                break;

            case closest.children[0].children[0].classList.contains("potato"):

                if (document.querySelector(".if-empty-basket ._potato")===null){
                    addCart(closest,counter2(),price);
                } else {

                    counter2=makeCounter(Number(document.querySelector(".if-empty-basket ._potato").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._potato").children[1].children[1].children[1].value=counter2();

                    totalPrice=price*(counter2()-1);
                    document.querySelector(".if-empty-basket ._potato").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";

                }
                break;

            case closest.children[0].children[0].classList.contains("pumpkin"):

                if (document.querySelector(".if-empty-basket ._pumpkin")===null){
                    addCart(closest,counter3(),price);

                } else {

                    counter3=makeCounter(Number(document.querySelector(".if-empty-basket ._pumpkin").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._pumpkin").children[1].children[1].children[1].value=counter3();

                    totalPrice=price*(counter3()-1);
                    document.querySelector(".if-empty-basket ._pumpkin").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";

                }
                break;

            case closest.children[0].children[0].classList.contains("cucumber"):

                if (document.querySelector(".if-empty-basket ._cucumber")===null){
                    addCart(closest,counter4(),price);
                } else {


                    counter4=makeCounter(Number(document.querySelector(".if-empty-basket ._cucumber").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._cucumber").children[1].children[1].children[1].value=counter4();

                    totalPrice=price*(counter4()-1);
                    document.querySelector(".if-empty-basket ._cucumber").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("onion"):

                if (document.querySelector(".if-empty-basket ._onion")===null){
                    addCart(closest,counter5(),price);
                } else {

                    counter5=makeCounter(Number(document.querySelector(".if-empty-basket ._onion").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._onion").children[1].children[1].children[1].value=counter5();

                    totalPrice=price*(counter5()-1);
                    document.querySelector(".if-empty-basket ._onion").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("beet"):

                if (document.querySelector(".if-empty-basket ._beet")===null){
                    addCart(closest,counter6(),price);
                } else {

                    counter6=makeCounter(Number(document.querySelector(".if-empty-basket ._beet").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._beet").children[1].children[1].children[1].value=counter6();

                    totalPrice=price*(counter6()-1);
                    document.querySelector(".if-empty-basket ._beet").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("pepper"):

                if (document.querySelector(".if-empty-basket ._pepper")===null){
                    addCart(closest,counter7(),price);
                } else {

                    counter7=makeCounter(Number(document.querySelector(".if-empty-basket ._pepper").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._pepper").children[1].children[1].children[1].value=counter7();

                    totalPrice=price*(counter7()-1);
                    document.querySelector(".if-empty-basket ._pepper").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("corn"):

                if (document.querySelector(".if-empty-basket ._corn")===null){
                    addCart(closest,counter8(),price);
                } else {

                    counter8=makeCounter(Number(document.querySelector(".if-empty-basket ._corn").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._corn").children[1].children[1].children[1].value=counter8();

                    totalPrice=price*(counter8()-1);
                    document.querySelector(".if-empty-basket ._corn").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("tomato"):

                if (document.querySelector(".if-empty-basket ._tomato")===null){
                    addCart(closest,counter9(),price);
                } else {

                    counter9=makeCounter(Number(document.querySelector(".if-empty-basket ._tomato").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._tomato").children[1].children[1].children[1].value=counter9();

                    totalPrice=price*(counter9()-1);
                    document.querySelector(".if-empty-basket ._tomato").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("apple"):

                if (document.querySelector(".if-empty-basket ._apple")===null){
                    addCart(closest,counter10(),price);
                } else {


                    counter10=makeCounter(Number(document.querySelector(".if-empty-basket ._apple").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._apple").children[1].children[1].children[1].value=counter10();

                    totalPrice=price*(counter10()-1);
                    document.querySelector(".if-empty-basket ._apple").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("banana"):

                if (document.querySelector(".if-empty-basket ._banana")===null){
                    addCart(closest,counter11(),price);
                } else {

                    counter11=makeCounter(Number(document.querySelector(".if-empty-basket ._banana").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._banana").children[1].children[1].children[1].value=counter11();

                    totalPrice=price*(counter11()-1);
                    document.querySelector(".if-empty-basket ._banana").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("pear"):

                if (document.querySelector(".if-empty-basket ._pear")===null){
                    addCart(closest,counter12(),price);
                } else {

                    counter12=makeCounter(Number(document.querySelector(".if-empty-basket ._pear").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._pear").children[1].children[1].children[1].value=counter12();

                    totalPrice=price*(counter12()-1);
                    document.querySelector(".if-empty-basket ._pear").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("plum"):

                if (document.querySelector(".if-empty-basket ._plum")===null){
                    addCart(closest,counter13(),price);
                } else {

                    counter13=makeCounter(Number(document.querySelector(".if-empty-basket ._plum").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._plum").children[1].children[1].children[1].value=counter13();

                    totalPrice=price*(counter13()-1);
                    document.querySelector(".if-empty-basket ._plum").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("peach"):

                if (document.querySelector(".if-empty-basket ._peach")===null){
                    addCart(closest,counter14(),price);
                } else {

                    counter14=makeCounter(Number(document.querySelector(".if-empty-basket ._peach").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._peach").children[1].children[1].children[1].value=counter14();

                    totalPrice=price*(counter14()-1);
                    document.querySelector(".if-empty-basket ._peach").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("kiwi"):

                if (document.querySelector(".if-empty-basket ._kiwi")===null){
                    addCart(closest,counter15(),price);
                } else {

                    counter15=makeCounter(Number(document.querySelector(".if-empty-basket ._kiwi").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._kiwi").children[1].children[1].children[1].value=counter15();

                    totalPrice=price*(counter15()-1);
                    document.querySelector(".if-empty-basket ._kiwi").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("avocado"):

                if (document.querySelector(".if-empty-basket ._avocado")===null){
                    addCart(closest,counter16(),price);
                } else {

                    counter16=makeCounter(Number(document.querySelector(".if-empty-basket ._avocado").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._avocado").children[1].children[1].children[1].value=counter16();

                    totalPrice=price*(counter16()-1);
                    document.querySelector(".if-empty-basket ._avocado").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("watermelon"):

                if (document.querySelector(".if-empty-basket ._watermelon")===null){
                    addCart(closest,counter17(),price);
                } else {

                    counter17=makeCounter(Number(document.querySelector(".if-empty-basket ._watermelon").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._watermelon").children[1].children[1].children[1].value=counter17();

                    totalPrice=price*(counter17()-1);
                    document.querySelector(".if-empty-basket ._watermelon").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

            case closest.children[0].children[0].classList.contains("tangerine"):

                if (document.querySelector(".if-empty-basket ._tangerine")===null){
                    addCart(closest,counter18(),price);
                } else {

                    counter18=makeCounter(Number(document.querySelector(".if-empty-basket ._tangerine").children[1].children[1].children[1].value)+1);
                    document.querySelector(".if-empty-basket ._tangerine").children[1].children[1].children[1].value=counter18();

                    totalPrice=price*(counter18()-1);
                    document.querySelector(".if-empty-basket ._tangerine").children[1].children[2].innerHTML=totalPrice.toFixed(2)+"&nbsp"+"&#36";
                }

                break;

        }

    }
}
var sumValue=0;
var sumTotal=0;

function showModal() {

    //изменение количества товара в корзине
if (document.querySelector(" .if-empty-basket .chips .quantity_inner")!==null){

    document.querySelectorAll(".if-empty-basket .chips .quantity_inner").forEach(function(element){

        //уменьшение товара
        //  console.log(element.closest(".chips").children[1].children[1]);
        element.children[0].onclick=function(){
            switch (true) {

                case element.closest(".chips").children[1].children[0].textContent === "carrot":

                    var counterMinus=minus(element.children[1].value);
                    element.children[1].value=counterMinus();
                    // console.log(element.children[1].value);
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".carrot_").textContent)).toFixed(2)+"&nbsp"+"&#36";

                    break;

                case element.closest(".chips").children[1].children[0].textContent === "potato":

                    var counterMinus2=minus(element.children[1].value);
                    element.children[1].value=counterMinus2();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".potato_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "pumpkin":

                    var counterMinus3=minus(element.children[1].value);
                    element.children[1].value=counterMinus3();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".pumpkin_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "cucumber":

                    var counterMinus4=minus(element.children[1].value);
                    element.children[1].value=counterMinus4();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".cucumber_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "onion":

                    var counterMinus5=minus(element.children[1].value);
                    element.children[1].value=counterMinus5();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".onion_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "beet":

                    var counterMinus6=minus(element.children[1].value);
                    element.children[1].value=counterMinus6();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".beet_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "pepper":

                    var counterMinus7=minus(element.children[1].value);
                    element.children[1].value=counterMinus7();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".pepper_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "corn":

                    var counterMinus8=minus(element.children[1].value);
                    element.children[1].value=counterMinus8();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".corn_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "tomato":

                    var counterMinus9=minus(element.children[1].value);
                    element.children[1].value=counterMinus9();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".tomato_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "apple":

                    var counterMinus10=minus(element.children[1].value);
                    element.children[1].value=counterMinus10();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".apple_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "banana":

                    var counterMinus11=minus(element.children[1].value);
                    element.children[1].value=counterMinus11();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".banana_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "pear":

                    var counterMinus12=minus(element.children[1].value);
                    element.children[1].value=counterMinus12();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".pear_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "plum":

                    var counterMinus13=minus(element.children[1].value);
                    element.children[1].value=counterMinus13();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".plum_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "peach":

                    var counterMinus14=minus(element.children[1].value);
                    element.children[1].value=counterMinus14();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".peach_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "kiwi":

                    var counterMinus15=minus(element.children[1].value);
                    element.children[1].value=counterMinus15();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".kiwi_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "avocado":

                    var counterMinus16=minus(element.children[1].value);
                    element.children[1].value=counterMinus16();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".avocado_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "watermelon":

                    var counterMinus17=minus(element.children[1].value);
                    element.children[1].value=counterMinus17();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".watermelon_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;

                case element.closest(".chips").children[1].children[0].textContent === "tangerine":

                    var counterMinus18=minus(element.children[1].value);
                    element.children[1].value=counterMinus18();
                    element.closest(".chips").children[1].children[2].innerHTML=
                    (element.children[1].value*parseFloat(document.querySelector(".tangerine_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    break;
            }

            document.querySelectorAll(".if-empty-basket .chips .quantity_inner").forEach(function(element){
               sumValue+=Number(element.children[1].value);
            })

            countBasket=sumValue;
            document.querySelector(".basket").innerHTML=countBasket;
            sumValue=0;

            document.querySelectorAll(".if-empty-basket .chips .total-price").forEach(function(element){
                let price=parseFloat(element.textContent).toFixed(2);
               sumTotal+=Number(price);

            })
            document.querySelector(".total-total").innerHTML=sumTotal.toFixed(2)+"&nbsp"+"&#36";
            sumTotal=0;

        }

        //    увеличение товара
        element.children[2].onclick=function(){
            countBasket++;
            document.querySelector(".basket").innerHTML=countBasket;
            switch (true){

                case element.closest(".chips").children[1].children[0].textContent==="carrot":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".carrot_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="potato":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".potato_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter2=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter2();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="pumpkin":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".pumpkin_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter3=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter3();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="cucumber":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".cucumber_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter4=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter4();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="onion":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".onion_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter5=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter5();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="beet":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".beet_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter6=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter6();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="pepper":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".pepper_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter7=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter7();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="corn":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".corn_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter8=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter8();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="tomato":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".tomato_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter9=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter9();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="apple":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".apple_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter10=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter10();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="banana":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".banana_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter11=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter11();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="pear":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".pear_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter12=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter12();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="plum":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".plum_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter13=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter13();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="peach":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".peach_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter14=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter14();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="kiwi":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".kiwi_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter15=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter15();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="avocado":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".avocado_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter16=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter16();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="watermelon":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".watermelon_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter17=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter17();
                    break;

                case element.closest(".chips").children[1].children[0].textContent==="tangerine":

                    element.closest(".chips").children[1].children[2].innerHTML=
                    ((Number(element.children[1].value)+1)*parseFloat(document.querySelector(".tangerine_").textContent)).toFixed(2)+"&nbsp"+"&#36";
                    counter18=makeCounter(Number(element.children[1].value)+1);
                    element.children[1].value=counter18();
                    break;

            }
            document.querySelectorAll(".if-empty-basket .chips .total-price").forEach(function(element){
                let price=parseFloat(element.textContent).toFixed(2);
                sumTotal+=Number(price);
            })
            document.querySelector(".total-total").innerHTML=sumTotal.toFixed(2)+"&nbsp"+"&#36";
            sumTotal=0;

        }


        document.querySelectorAll(".if-empty-basket .chips .total-price").forEach(function(element){
            let price=parseFloat(element.textContent).toFixed(2);
            sumTotal+=Number(price);
        })
        document.querySelector(".total-total").innerHTML=sumTotal.toFixed(2)+"&nbsp"+"&#36";
        sumTotal=0;
    })

}

//удаление товара из корзины
    if (document.querySelector(".fa-trash-alt")!==null) {

        document.querySelectorAll(".fa-trash-alt").forEach(function(element){
            element.onclick=function(){
                switch (true){
                    case  this.closest(".chips").children[0].children[0].classList.contains("carrot"):
                    counter=makeCounter(1);
                    break;
                    case  this.closest(".chips").children[0].children[0].classList.contains("potato"):
                          counter2=makeCounter(1);
                    break;
                    case this.closest(".chips").children[0].children[0].classList.contains("pumpkin"):
                         counter3=makeCounter(1);
                    break;
                    case this.closest(".chips").children[0].children[0].classList.contains("cucumber"):
                         counter4=makeCounter(1);
                    break;
                    case this.closest(".chips").children[0].children[0].classList.contains("onion"):
                        counter5=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("beet"):
                        counter6=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("pepper"):
                        counter7=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("corn"):
                        counter8=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("tomato"):
                        counter9=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("apple"):
                        counter10=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("banana"):
                        counter11=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("pear"):
                        counter12=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("plum"):
                        counter13=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("peach"):
                        counter14=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("kiwi"):
                        counter15=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("avocado"):
                        counter16=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("watermelon"):
                        counter17=makeCounter(1);
                        break;
                    case this.closest(".chips").children[0].children[0].classList.contains("tangerine"):
                        counter18=makeCounter(1);
                        break;


                }

                this.closest(".chips").parentNode.removeChild( this.closest(".chips"));
                if (document.querySelector(".if-empty-basket").children.length===0){
                    document.querySelector(".empty-basket").style.display="";
                    document.querySelector(".if-empty-basket").style.height="";
                }

                document.querySelectorAll(".if-empty-basket .chips .quantity_inner").forEach(function(element){
                    sumValue+=Number(element.children[1].value);
                    // console.log(element);
                })
                countBasket=sumValue;
                document.querySelector(".basket").innerHTML=countBasket;
                if (countBasket===0){
                    document.querySelector(".basket").classList.add("hide");
                }
                sumValue=0;

                document.querySelectorAll(".if-empty-basket .chips .total-price").forEach(function(element){
                    let price=parseFloat(element.textContent).toFixed(2);
                    sumTotal+=Number(price);
                })
                document.querySelector(".total-total").innerHTML=sumTotal.toFixed(2)+"&nbsp"+"&#36";
                sumTotal=0;

                if (parseFloat(document.querySelector(".total-total").textContent)===0){

                    document.querySelector(".total-total").parentElement.style.display="none";
                    document.querySelector(".total-total").innerHTML="1";
                    document.querySelector(".my-modal").style.height="350px";
                    document.querySelector(".empty-basket").style.height="210px";

                } else {
                    document.querySelector(".total-total").parentElement.style.display="";
                }
            }
        })
    }

    if (parseFloat(document.querySelector(".total-total").textContent)===1 ){

        document.querySelector(".total-total").parentElement.style.display="none";
        document.querySelector(".my-modal").style.height="350px";
        document.querySelector(".empty-basket").style.height="210px";

    } else {
        document.querySelector(".total-total").parentElement.style.display="";
    }

    document.body.style.overflow = 'hidden';
    // let widthTwo = document.documentElement.clientWidth;
    // let diff = widthTwo - widthOne;
    // if ((diff) >= 0) {
    //    document.body.style.paddingRight = diff + "px";
    //     document.querySelector(".header").style.left=Math.round(-diff/2)+ "px";
    // }
    if( (window.innerWidth || document.documentElement.clientWidth) >=1200) {
        document.body.style.paddingRight = "17px";
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
    document.body.style.paddingRight="0";
    document.querySelector(".header").style.left="0";

}

function closeModalWrap(event){

    if (event.target.classList.contains("modal-wrap")){
        event.target.classList.add('hide');
        document.body.style.overflow = 'visible';
        document.body.style.paddingRight="0";
        document.querySelector(".header").style.left="0";

    }

}





