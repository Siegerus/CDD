window.addEventListener('DOMContentLoaded', function() {
    'use strict';
// Tabs
    let tab = document.querySelectorAll('.info-header-tab'), // сами табы
        info = document.querySelector('.info-header'),       // родитель табов
        tabContent = document.querySelectorAll('.info-tabcontent'); // контент табов, который скрывается/показывается
        
    function hideTabContent(a) {       // функция, которая будет скрывать контенты (а -технический аргумент)
        for(let i = a; i < tabContent.length; i++) {
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

    info.addEventListener('click', function(e) {   // назначаем делегирование по клику для всех табов внутри родителя
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


    // Timer

    let deadline = "2024-8-13";    //конечная дата
    // функция , в которой определяем значения
    function getTimeRemaining(endtime) {        //"parse" переводит дату в кол -во милисекунд
        let t = Date.parse(endtime) - Date.parse(new Date()), // вычисляем разницу между конечной датой и сегодняшней. "new Date()" - дата на момкнт входа на сайт
            seconds = Math.floor((t/1000) % 60),// "Math.floor" -округляем,"t/1000"-переводим милисек в сек."% 60" - остаток от деления, что бы полусить секунды формата от 0 до 60
            minutes = Math.floor((t/1000/60) % 60), // по такой же логике переводим в минуты
            hours = Math.floor((t/(1000*60*60))); //часы (умножение в скобках математисески получится то же что и последовательное деление)
            /* hours = Math.floor((t/1000/60/60) % 24),  *///дальше если нужны дни и часы
            /* days = Math.floor((t/(1000*60*60*24))) */

            return {            // говорим функции, что бы она вернула нам объект с переменными, которые задавали выше
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        }

        // функция, в которой оживляем элементы

    function setClock (id, endtime) { //id - айди нащего элемента - таймера, в endtime будем подставлять наш deadline
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),  // ищем селектор внутри timer
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // создаём переменную с функцией-интервалом в 1сек
                                                        // в ней говорим, что будет обновляться функция ниже (updateClock)

            function updateClock() {  // функция, которая будет обновлять таймер каждую секунду
                let t = getTimeRemaining(endtime); // с функцией в переменную так же попадает и наш объект в который заптсываются значения времени
                hours.textContent = t.hours;   // задаём элементам значения из объекта
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                function plusZero(variable, objKey) {
                    if ((objKey) < 10) {
                        (variable).textContent = "0" + (objKey);
                    }
                };

                plusZero(hours, t.hours);
                plusZero(minutes, t.minutes);
                plusZero(seconds, t.seconds);
                

                if (t.total <=0) {        // останавливаем таймер, когда разница между конечной датой и сегодняшней будет 0
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        }   

    setClock ('timer', deadline);


//popup

let more = document.querySelector('.more'),
    descr = document.querySelector('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

function modalFade(item) {

    item.addEventListener("click", function() {
        overlay.style.display = "block";
        document.body.style.overflowY = "hidden";
        if (this.classList.contains('more')) {
        this.classList.add("more-splash");
        }
    });    

    close.addEventListener("click", function() {
        overlay.style.display = "none";
        overlay.classList.remove("more-splash");
        document.body.style.overflowY = "scroll";
    });
}

modalFade(more);
modalFade(descr);




});