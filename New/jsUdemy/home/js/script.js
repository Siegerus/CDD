"use strict"

let menu = document.querySelectorAll('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    newElement = document.createElement('li'),
    column = document.querySelectorAll('.column'),
    title = document.querySelectorAll('#title'),
    ans = prompt("Как Вы относитесь к технике Apple?", ''),
    promptBlock = document.querySelectorAll('#prompt'),
    adv = document.querySelectorAll('.adv');

    console.log(column[1]);
    console.log(title);
    console.log(promptBlock);
    
    newElement.classList.add('menu-item_new');

    menu[0].appendChild(newElement);

    
    (newElement).style.height = '40px';
    (newElement).style.color = 'coral';
    (newElement).style.lineHeight = '40px';
    (newElement).style.paddingRight = '15px';
    (newElement).style.paddingLeft = '15px';
    (newElement).style.border = '1px solid #fff';
    (newElement).style.borderRadius = '8px';
    (newElement).style.cursor = 'pointer';
    (newElement).style.boxShadow = '0px 0px 20px  rgba(256,256,256,.4)';

    newElement.textContent = 'Пятый элемент';
    title[0].textContent = 'Мы продаем только подлинную технику Apple';
    /* title[0].innerHTML = '<div>Мы продаем только подлинную технику Apple</div>'; */
    promptBlock[0].textContent = ans;

    menu[0].insertBefore(menuItem[2],menuItem[1]);

    column[1].removeChild(adv[0]);

    document.body.style.background = 'url("img/apple_true.jpg")';




    
    menuItem.forEach(function(item, i) {
        item.style.color = 'coral';
        /* menu[0].replaceChild(item[0], i); */
    });

