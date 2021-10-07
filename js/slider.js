
//слайдер
let position = 0;
let count = 1;
let width=document.querySelector('.text-box-customers').offsetWidth;
let elems=document.querySelectorAll('.text-box-customers');


document.querySelector('.back').onclick=function() {
    position -= width * count;
    position = Math.min(position, width * (elems.length - count));
    document.querySelector('.customer-quotes').style.marginLeft = position + 'px';


}

document.querySelector('.forward').onclick=function() {
    position += width * count;
    position = Math.max(position, -width*(elems.length-count));
    document.querySelector('.customer-quotes').style.marginLeft = position+'px';

}
