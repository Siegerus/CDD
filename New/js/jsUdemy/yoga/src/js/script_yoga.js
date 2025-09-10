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
            tab.forEach((item, i) => {
                if (e.target == tab[i]) {// ели таргет - определённый таб м порядковым номером  "i"
                    hideTabContent(0); // то теперь скрываем все контенты
                    showTabContent(i); // а показываем соответствующий контент (i сюда ставим вместо аргумента b )
                }
            }); 
        }
    });


    // Timer

    let deadline = "2024-9-8";    //конечная дата
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
                    /* hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00'; */
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



// form


  /*   let message = {
        loading: 'Загрузка...',
        success: 'Спасибо, мы с Вами свяжемся!',
        failure: 'Что то пошло не так.'
    }

    let modalForm = document.querySelector('.main-form'),
        modalInput = modalForm.getElementsByTagName('input'),
        contactForm = document.getElementById('form'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function formSubmit(form, input) {

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);
            request.send(formData);

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }

        });
    }

    formSubmit(modalForm, modalInput);
    formSubmit(contactForm, contactInput); */


    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо, мы с Вами свяжемся!',
        failure: 'Что то пошло не так.'
    }

    let modalForm = document.querySelector('.main-form'),
        modalInput = modalForm.getElementsByTagName('input'),
        contactForm = document.getElementById('form'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function formSubmit(form, input) {

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            form.appendChild(statusMessage);

            function usePromise() {

                return new Promise(function (resolve, reject) { // start promise
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    let formData = new FormData(form);
                    request.send(formData);

                    // начать промис можно было и сдлесь

                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve()
                        }
                        else if (request.readyState === 4 && request.status == 200) {
                            resolve()
                        }
                        else {
                            reject()
                        }
                    });
                });
                
            }                      // end promise

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            usePromise()
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)      // при использовании промиса, функции, которые идут после .catch( - выполняются в любомм случае
        });
    }

    formSubmit(modalForm, modalInput);
    formSubmit(contactForm, contactInput);


    // slider

    let slideIndex = 1,  // переменная, которая отвечает за тот слайд, который показывается в текущий момент
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'), // ообёртка с точками
        dots = document.querySelectorAll('.dot');

        
       
    function showSlides(n) { //аргументом "n" будет номер нашего слайда

        if (n > slides.length) {  //если слайды закончились, то перемещамся к 1му слайду
            slideIndex = 1;
        }

        if (n < 1) { // наоборот. если листаем назад, перемещаемся к последнему
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); //скрываем все слайды
        /* for(let i = 0; i < slides.length; i++) { // тоже самое, старый вариант до "forEach"
            slides[i].style.display = 'none';
        } */
       dots.forEach((item) => item.classList.remove('dot-active'));

       slides[slideIndex - 1].style.display = 'block'; // показываем слайд по индексу.Вычитаем 1Ю что ьы получился 0 - т.е первый слайд
       dots[slideIndex - 1].classList.add('dot-active');// так же добавляем по индексу класс точкам
    }

    showSlides(slideIndex); // первый раз вызываем функциюю с slideIndex, после она уже будет сама вызываться с "n",
    // через функцию "plusSlides", которую вызываем при нажатии на срелки
    

    
    function plusSlides(n) {        // функция показа следующего слайда
        showSlides(slideIndex += n); // прибавляем к слайдиндексу номер нашего слайда
    }

    function currentSlide(n) {         //функция показв текущего слайда
        showSlides(slideIndex = n);     // слайдиндекс = номкру нвшего слайда
    }
    

    prev.addEventListener('click', function() {  // при клике на назад, от текущего илайда отнимаем 1
        plusSlides(-1);                          // и таким образом перелистываем назад
    });

    next.addEventListener('click', function() {
        plusSlides(1);                 
    });

    dotsWrap.addEventListener('click', function(e) {
        for (let i = 0; i < dots.length + 1; i++)  // -1 и +1  связанно с тем, что в showSlides есть [slideIndex - 1]
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                currentSlide(i);
            }
    });
    



    // calculator

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,  // переменные, в которые будут записываться вводимые данные
        daysSum = 0,
        total = 0; 

console.log(place);

        totalValue.innerHTML = '0';

        persons.addEventListener('change', function() {
            personsSum = +this.value; //унарный плюс
            total = (daysSum + personsSum) * 4000; // формула расчёта, обычно у заказчика
            
            
            if (restDays.value == '' || persons.value == '') {         // если второй инпут пустой, то инпут с общей суммой, тоже делаем пустым
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }  
        });

        restDays.addEventListener('change', function() { // тоже самое со вторым инпутом
            daysSum = +this.value; 
            total = (daysSum + personsSum) * 4000; 
            
            if (persons.value == '' || restDays.value == '') {     
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }  
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total; // промежуточная переменная, для корректного расчёта, без неё сумма будет показана не верно
                totalValue.innerHTML = a * this.options[this.selectedIndex].value; // так млжно достучаться до value элем. списка
            }                                                                     // обращаемся как к св-вам объекта
        });


        


});