let arr = [],
        el1 = {},
        el2 = {},
        el3 = {};
    
    let addToArray = function() {
        arr.push(el1,el2,el3);
        arr.forEach((item, i) => {
            arr[i].smth = " text";        
            arr[i].smthElse = " moreText";
        });
        let arrData = JSON.stringify(arr);
        return arrData;
    };
    console.log(addToArray());


// Перебор объекта 

let ob = {
    width: 300, 
    height: 200, 
    title: "Menu",
}

Object.defineProperty(ob, "width", { /* способ менять зачение в объекте */
    value : 400,
}); 

console.log(ob);

Object.keys(ob).forEach((key) => { /* ".keys(ob)"-метод, который вернёт из объкта его ключи */
    ob[key] =  key + "lorem";       /* меняем все хначения ключей в лбъекте */
}); 

console.log(ob);


Object.entries(ob).forEach(([key, value]) => { /*"entries"-метод, который вернёт из объкута пару ключ/значение в виде массивов */
    console.log(key, value);
}); 

console.log(ob);


// действие с массивом (для примера. Объкт выше от этого не поменяется)

let entries = Object.entries(ob); /* в переменной массив, который содежит массивы из пар ключ/значение */

entries.splice(1, 1, ['min-height', 300]);  /* с помощью "splice" можем поменять нужные ключ/значение массива */

entries[0].splice(1, 1, "test"); /* а так можно менять массив внутри массива */


entries = entries.map((item) => {
    return item = ['min-height', 300];/*а с помощью "map" сразу все элементы массива (ключ/значение). "return" обязателен */
}); 

console.log(entries);


// Ещё один пример

let array = ["smth", "smth2", "smth3", "smth4"];

array = array.map((item) => {
    item = "smthNew";

    return item;                    /* "return" обязателен  */
});
console.log(array);


//спред 

const persona = { name: 'Иван', lastName: 'Объектов'}
const userData = { ...persona, username: 'killer3000' }

console.log(userData)

// Безымянная функция, которая сразу же вызывается
(() => {
    console.log("smth");
}) (); 


// Непрямой вызов функции через "call"

let toTestCallFn = function(smth) {
    let a = {
        width: (300 + this) + "px",
        height: (250 + this) + "px"
    }
    console.log(smth);
    return a;
};
// console.log(toTestCallFn.call(12, "smth"));
let testBind = toTestCallFn.bind(213);  // или через связывание фунскций с "bind"
console.log(testBind());


// "try" "catch" в действии

let toDo = () => {
    console.log("do smth..")
    console.log("do smth...")
    console.log("do smth else..")
    try {
        // let variable;
        console.log(variable);
    } catch(err) {
        console.log("this is error! variable is lost", err);
    }
    console.log("do smth more again..")
    console.log("do smth...")
    console.log("do smth else..")
};
toDo();


// "promise" в действии

let anyVar = 5;
let toTestPromise = function() {
    return new Promise(function(resolve, reject) {
        if (anyVar == 5) {
            resolve();
        } else {
            reject();
        }
    });
};
toTestPromise()
    .then(() => console.log("Done1"))
    .then(() => console.log("Done2"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("final Done"))


// рекурсивная функция. Вызывает сама себя

let toTest = (n) => {
    if (n <= 0) {
        console.log("Thats all");
        return;
    }
    console. log(n);
    setTimeout(() => toTest(n-1), 1000);
}
toTest(20);


// Асинхронная функция

let toTestAcync = async () => {
    await console.log("first acync");
    await console.log("second acync");
    await console.log("third acync");
}

toTestAcync();


// Кастомное событие

let box = document.querySelector(".box");
let anyEvent = new CustomEvent("myEvent");

let displayedToConsole = () => {
    console.log("Event!");
}
box.addEventListener("myEvent", displayedToConsole);
box.addEventListener("click", () => {
    box.dispatchEvent(anyEvent);  // Запуск кастомного события
});



//  Отправка формы с "fetch"

let form = document.querySelector(".feed-form"),
    inputs = document.querySelectorAll(".feed-form__input"),
    messageBox = document.createElement("div"),
    message = {
        success : "Спасибо, данные отправлены!",
        error : "Ошибка отправки данных!"
    };

    messageBox.classList.add("message-box");

let handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    fetch("reviews-form_telegram.php", {
        method : "POST",
        body : formData
    })
        .then((response) => {
            document.body.appendChild(messageBox);
            if(response.ok) {
                messageBox.innerHTML = message.success;
            } else {
                throw new Error('Error occurred!'); //кидаем ошибку, тогда она появится в "catch"
            }
            return response.json();
        })
        .catch((err) => {
            messageBox.innerHTML = message.error;
            console.log(err);
        })
        .finally(() => {
            form.reset();
            setTimeout(() => {
                messageBox.remove()
            }, 2000)
        });  
    };

form.addEventListener("submit", handleSubmit);


// Вариант с async

let sendResponse = async (formData) => {
    const response = await fetch("reviews-form_telegram.php", {
        method: "POST",
        body: formData
    });

    if (!response.ok) {
        throw new Error('Error occurred!');
    }
    return await response.text();
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    document.body.appendChild(messageBox);

    sendResponse(formData)
        .then((response) => {
            messageBox.innerHTML = message.success;
        })
        .catch((err) => {
            messageBox.innerHTML = message.error;
            console.log(err);
        })
        .finally(() => {
            form.reset();
            setTimeout(() => {
                messageBox.remove()
            }, 2000)
        });
});