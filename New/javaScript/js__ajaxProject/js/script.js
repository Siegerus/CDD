let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');   
    
    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();   // создаём главный объект конструктор для работы с запросами
        /* request.open(method , url, acync, log, pass); //метод с помощью которого желается запрос и его аргументы */
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; chsarset=utf-8');// метод настройки хедера запроса
        request.send(); //этот метод запускает запрос и он идёт за ответом к серверу
    
// св-ва объекта  XMLHttpRequest()

    //status  - св-во которое содержит код ответа от сервера (404 напримар)
    //statusText - текстовый вариант этого кода
    //responseText / response - содержит текст ответа сервера
    //readyState - содержит текущее состояние запроса

// события 

        request.addEventListener('readystatechange', function() { // событие на изменение состояния запроса
            if (request.readyState === 4 && request.status == 200) { //4 - 'это "done"
                let data = JSON.parse(request.response); // переводим из JSON формата ответ от сервера

                inputUsd.value = inputRub.value / data.usd; //  data.usd - обращение к св ву аншеро объкта, который типа пришёл с серверп
            } else {
                inputUsd.value = "Что то пошло не так!";
            }
        });
    });