let index = 0;
let amount = 0;//amount of blocks
let currTransl = []
let translationComplete = true;
let transitionCompleted = function() {
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event) {
    amount = document.querySelectorAll('.text-box-customers').length;
    for(let i = 0; i < amount; i++)
    {
        currTransl[i] = -250;
        document.querySelectorAll(".text-box-customers")[i].addEventListener("transitionend", transitionCompleted, true);
    }
});
document.querySelector(".right").onclick = function right(){
    if(translationComplete === true) {
        translationComplete = false;
        index--;
        if(index == -1)
        {
            index = amount-1;
        }
        let outerIndex = (index) % amount;

        for(let i = 0; i < amount; i++)
        {
            let block=document.querySelectorAll(".text-box-customers")[i];
             block.style.opacity = '1';
            block.style.transform = 'translate('+(currTransl[i]+250)+'px)';
            currTransl[i] = currTransl[i]+250;
        }

        let outerBlock = document.querySelectorAll(".text-box-customers")[outerIndex];
        outerBlock.style.transform = 'translate('+(currTransl[outerIndex]-250*(amount))+'px)';
        outerBlock.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-250*(amount);

    }
}
document.querySelector(".left").onclick = function left(){
    if(translationComplete === true) {
        translationComplete = false;
        index++;
        let outerIndex = (index-1) % amount;
        for(let i = 0; i < amount; i++)
        {
            let block=document.querySelectorAll(".text-box-customers")[i];
            block.style.opacity = '1';
            block.style.transform = 'translate('+(currTransl[i]-250)+'px)';
            currTransl[i] = currTransl[i]-250;
        }
        let outerBlock = document.querySelectorAll(".text-box-customers")[outerIndex];
        outerBlock.style.transform = 'translate('+(currTransl[outerIndex]+250*(amount))+'px)';
        outerBlock.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]+250*(amount);

    }
}


