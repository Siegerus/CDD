function tabs() {

    let tab = document.querySelectorAll('.info-header-tab'), // сами табы
        info = document.querySelector('.info-header'),       // родитель табов
        tabContent = document.querySelectorAll('.info-tabcontent'); // контент табов, который скрывается/показывается

    function hideTabContent(a) {       // функция, которая будет скрывать контенты (а -технический аргумент)
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');//"tabContent[i]"- при проходе цикла будет использоваться каждый контент от 1го до последнего 
            tabContent[i].classList.add('hide');  // манипулируем классами, xтобы скрыть элементы
        }
    }

    hideTabContent(1);//для этого и вводили тех переменнуюю Тюк как "i = a", а "i < tabContent.length" ,то цикл мработает для 
    //всех элементов, кроме первого.


    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) { // если контент имеет класс скрытности
            tabContent[b].classList.remove('hide');  // то удаляем класс скрытности
            tabContent[b].classList.add('show');   // и добавляем класс видимости
        }
    }

    info.addEventListener('click', function (e) {   // назначаем делегирование по клику для всех табов внутри родителя
        if (e.target && e.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) { //теперь цикл реребора самих табов
                if (e.target == tab[i]) {// ели таргет - определённый таб м порядковым номером  "i"
                    hideTabContent(0); // то теперь скрываем все контенты
                    showTabContent(i); // а показываем соответствующий контент (i сюда ставим вместо аргумента b )
                    break; // останавливаем цикл
                }
            }
        }
    });
}

module.export = tabs;    // экспортируем модуль