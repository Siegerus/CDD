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


// 

let toTestFn = () => {
    let v = 8 ? console.log("Done") : console.log("Not");
    return true;
}
toTestFn()

toTestFn ? console.log("toTest - true") : console.log("toTest - false");
    

// Перебор объекта 

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
    .finally(() => console.log("final Done"));


// "promise all" в действии

Promise.all([
    new Promise ((resolve) => {
        resolve("first")
    }),
    new Promise ((resolve) => {
        resolve("second")
    }),
    new Promise ((resolve) => {
        resolve("third")
    })
])
    .then((value)=> console.log(value))


// Пример обработки множественных запросов с "promise all"
let urlArr = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://api.github.com/users/jeresig"
];

let requests = urlArr.map((item) => {
    item = fetch(item);
    return item
});

Promise.all(requests)
    .then((responses) => {
        responses.forEach((item) => {
            console.log(`${item.url}"--"${item.status}`);
        });
        return responses;
    })
    .then((responses) => {
        responses.forEach((item) => {
            console.log(item.text());
        })
    });


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


// функция - конструктор
function User(name, age, descr) {
    this.name = name;
    this.age = age;
    this.descr = descr;
}

let user1 = new User("Smith", 19, "ugly");
let user2 = new User("Ann", 22, "beauty");
console.log(user1);
console.log(user2);

/* function Accumulator(startingValue)   {
    this.value = startingValue;
    this.read = () => {
        let inputValue = +prompt("Введите число","");
        return this.value = this.value + inputValue;
    }
} 
let accumulator = new Accumulator(33);
accumulator.read(); */


// Функция, которая вернёт Слово с большой буквы
let ucFirst = (str) => {
    let text =  str;
    let upper = text.at(0).toUpperCase() + text.slice(1);
    return upper;
};
console.log(ucFirst("kjf"));


// Деструктуризация 
let options = {
    size: {     // переменные для size и items отсутствуют, так как мы взяли сразу их содержимое.
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
let { size: {anyWidth, anyHeight}, items : [item1, item2] } = options

console.log(anyWidth);
console.log(anyHeight);
console.log(item1);


// Функция спрашивает дату и выводит день недели этой даты
let getDate = () => {
    let date = new Date(prompt("Enter your Date"));
    let getWeekDay1 = (date) => {
        let arr = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        return result = arr[date.getDay()];
    };
    if(!isFinite(date)) {
        console.log("Error!");
        return;
    } else {
        console.log(getWeekDay1(date));
    }
}
getDate();


// Функция возвращает последний день месяца
let date = new Date();
let getLastDayOfMonth = (year, month) => {
    let copyDate = new Date(date)
    result = new Date(copyDate.setFullYear(year, month + 1, 0));
    return result.getDate();
};
console.log(getLastDayOfMonth(2019, 2));


//Date
//Колличество секунд с начала дня
let dateq = new Date();
let getSecondsToday = (time) => {
    let today = new Date(dateq.getFullYear(), dateq.getMonth(), dateq.getDate());
    let diff = Math.floor((dateq - today)/1000);
    return diff; 
};
console.log(getSecondsToday(dateq));


// Форматируем дату
let datew = new Date();
let formatDate = (set) => {
    let currentDate = new Date(datew);
    let setDate = set;
    let diff = currentDate - setDate;

    if (diff < 1000) {
        return "прямо сейчас";
    }

    let sec = Math.floor(diff/1000);
    if (sec < 60) {
        return sec + " сек. назад";
    }  

    let min = Math.floor(diff/60000); 
    if (min < 60) {
        return min + " мин. назад";
    } 

    let arr = [
        "0" + set.getDate(),
        "0" + (set.getMonth() + 1),
        "" + set.getFullYear(),
        "0" + set.getHours(),
        "0" + set.getMinutes(),
    ].map((item) => item.slice(-2));
    return arr.slice(0, 3).join(".") + " " +  arr.slice(3).join(":");
};
console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86300 * 1000)));


// JSON с параметром функцией
console.log(JSON.stringify(obj, function replacer(key, value) {
    return (key == "married") ? undefined : value;
    /* if (key == "married") {
        return undefined;
    } else {
        return value;
    } */
} ));


// синтаксис оператора расширения "spread"
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) );
//
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];
let merged = [0, ...arr3, 2, ...arr4];
console.log(merged); // 0,3,5,1,2,8,9,15 (0, затем arr, затем 2, в конце arr2)
//
let any = "1233445";
console.log([...any]); //['1', '2', '3', '3', '4', '4', '5']
//
function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Юлий Цезарь
    console.log( titles[0] ); // Консул
    console.log( titles[1] ); // Император
  }
  showName("Юлий", "Цезарь", "Консул", "Император");


//просто практика
let anyF = function(par){
    console.log(par);
  };
  let toTestt = (a, b, func, ...other) => {
    let random = Math.random(4);
    for(let i = 8; i > 3; i--) {
      console.log(b + ":" + i);
    }
  
    for (let args of other) {
      if(args) {
        console.log(args);
      }
    }
    func(random);
  };
  toTestt("smth", "smth else", anyF,  1, 5, false);

  

// Прототипирование. Функция-конструктор с прототипом man.Установили для "user" этот прототип
let man = {
	walk : true,
	eat : true,
	breeth : true,
	sleep : true,
};
function User(name, age, func) {
	this.name = name;
	this.age = age;
	function sayHi() {
		console.log("Hi!");
	}
	this.sayAge = function() {
		let date = new Date(1989, 10 ,4);
		let birth = date.getFullYear() + "-" +  date.getDate() + "-" +  date.getMonth();
		func(this.age + " , My birthday : " + birth) ;
	}
}
User.prototype.man = man;

let user = new User("Alex", 35, console.log);
let user22 = new user.constructor("John", 94, console.log); // можно создать нового "user" через св-во "constructor"(встроенное св-во)
user.sayAge();
user22.sayAge();
console.log(user.man.walk);
console.log(user22.man.eat);