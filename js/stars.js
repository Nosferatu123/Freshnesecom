// Родитель элементов star
let parentItems = document.querySelectorAll('.stars');

// Функция проверяет куда нажали и меняет классы
let cStars = function(nowPos,child) {
    // Убираем у всех элементов active
    for (let i = 0; i <child.length ; i++) {
        child[i].classList.remove('active');
    }
    // Добавляет активный класс всем элементам до выбранного, включая выбранный
    for (let i = 0; i <nowPos + 1; i++) {
        child[i].classList.toggle('active');
    }
}


parentItems.forEach(function(element) {
    let active=element.querySelectorAll('.active').length;
    let child = element.children;

    //при убирании мыши
    [].forEach.call(child, function (element) {
        element.addEventListener('mouseleave', function mouseOver(element) {
                cStars(active-1,child);
        })
    });


    // При наведении
    [].forEach.call(child, function (element) {
        element.addEventListener('mouseover', function mouseOver(element) {
            let myTarget = element.target;
            let i = child.length;
            while (i--) {
                if (child[i] == myTarget) {
                    let currentIndex = i;
                    cStars(currentIndex, child);
                    break;
                }
            }

        })
    });

    // При клике
    [].forEach.call(child, function (element) {
        element.addEventListener('click', function click(element) {
            let myTarget = element.target;
            let i = child.length;

            while (i--) {
                if (child[i] == myTarget) {
                    let currentIndex = i;
                    active=currentIndex+1;
                    cStars(currentIndex, child);
                    break;
                }
            }

        })

    });
})





