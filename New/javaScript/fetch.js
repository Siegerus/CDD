// Отправка fetch запроса
fetch(`https://api.github.com/users/iliakan`)
    .then((response) => response.json())
    .then((user) => {
        return new Promise((resolve) => {
            let elem = document.createElement("img");
            elem.src = user.avatar_url;
            elem.classList.add("section__img");
            document.body.appendChild(elem);
            resolve(elem)
            setTimeout(() => document.body.removeChild(elem), 2000)
        }).then((elem) => alert(`Через 2с ${elem} будет удалён со страницы!`));
    });



// Более оптимизированная запись fetch запроса
let LoadRequest = (url) => {
    return fetch(url).then((response) => response.json());
};
let getImage = (url) => {
    return new Promise((resolve) => {
        let elem = document.createElement("img");
        elem.src = url;
        elem.classList.add("section__img");
        document.body.appendChild(elem);

        setTimeout(() => {
            resolve(elem);
            document.body.removeChild(elem);
        }, 3000);
    });
}
LoadRequest(`https://api.github.com/users/iliakan`)
    .then((json) => getImage(json.avatar_url))
    .then((elem) => console.log(`${elem} удалён со страницы!`));



// 
async function LoadRequest(url) {
	let response = await fetch(url);
	let json = await response.json();

	let setImage = await function setImage() {
		let elem = document.createElement("img");
		elem.src = json.avatar_url;
		elem.classList.add("section__img");
        document.body.appendChild(elem);
		return elem;
	}(); 

	await new Promise ((resolve) => {
		setTimeout(resolve, 3000);
	}).then(() => console.log(`${setImage} удалён со страницы!`));

	document.body.removeChild(setImage);	
}
LoadRequest(`https://api.github.com/users/iliakan`);



// Promise.all с массивом из fetch запросов
let urls = [
	'https://api.github.com/users/iliakan',
	'https://api.github.com/users/remy',
	'https://api.github.com/users/jeresig'
  ];

let arr = urls.map((item) => fetch(item));

Promise.all(arr)
  .then((responses) => {
	for(let items of responses) {
		console.log(items.url + " : " + items.status);
	}
	return responses;
  })
  .then((responses) => Promise.all(responses.map((item) => item.json())))
  .then((responses) => responses.forEach((item) => console.log(item.id)))
  .catch(() => {
	throw new Error("this is Error!");
  });


// Работа с кэшем
let loadData = () => {
	let map = new Map();
	console.log(map)
	let wrapper = (url) => {
		return fetch(url)
			.then((response) => response.json())
			.then((result) => {
				if(map.has(url)) {
					console.log("to get!");
					return Promise.resolve(map.get(url))
				} 
				console.log("to set!");
				return map.set(result.url, result.name);
			});
	}
	return wrapper;
}
let f = loadData();
f('https://api.github.com/users/remy');
f('https://api.github.com/users/iliakan');
f('https://api.github.com/users/si');

// Тоже самое что и выше, только с массивом url
function loadData() {
	let cache = new Map();
	function wrapper(...url) {
		let arr = Promise.all(url.map(item => {
			return fetch(item);
		}))
		.then((responses) => {
			let jsons = Promise.all(responses.map(item => item.json())) 
			return jsons;
		})
		.then((jsons) => {
			for(let json of jsons) {
				if(cache.has(json.url)) {
					console.log("get!");
					return cache.get(json.url);
				} else {
					console.log("set!")
					return cache.set(json.url);
				}
			}
		})
		.catch((e) => {
			throw new Error(e.message)
		});
	}
	return wrapper
}
let ff = loadData();
ff(['https://api.github.com/users/remy'], [`https://api.github.com/users/iliakan`], [`https://api.github.com/users/si`]);
ff(['https://api.github.com/users/remy'], [`https://api.github.com/users/iliakan`], [`https://api.github.com/users/si`]);


//
let toCachedFn = () => {
	let cache = new Map();
	let closeur = (url) => {
		return fetch(url)
			.then((response) => response.json())
			.then((res) => {
				cache.set(res.name, res.avatar_url);
				console.log(cache);
				return res
			})
			.then((res) => {
				let img = document.createElement("img");
				img.src = res.avatar_url;
				document.body.appendChild(img);
			});
	};
	return closeur;
};
let fd = toCachedFn();
fd('https://api.github.com/users/remy');
fd('https://api.github.com/users/iliakan');
fd('https://api.github.com/users/jeresig');



// Получаем данные с сервера в json
let response = fetch("https://jsonplaceholder.typicode.com/posts");
let resObj;
response.then((response) => {return response.json()})
		.then((json) => {
			resObj = json.map((item, i) => {
				return {
					["Number " + (i + 1)]: item.title,
				}
			});
	console.log(resObj);
});


// Получаем данные с сервера в blob
let responsee = fetch("https://jsonplaceholder.typicode.com/posts");
response.then((response) => {return responsee.blob()})
		.then((blob) => {	
			let a = document.createElement("a");
			a.href = URL.createObjectURL(blob);
			a.download = "fileName.txt";
			a.click();
		});


// отправка объекта на сервер
let submitButton = document.querySelector("body > button");
let obj = {
	user : "Alex",
	age: 28,
}
submitButton.addEventListener("click", () => { 
	async function toSend(obj) {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"Content-Type" : "application/json;charset=utf-8",
			},
			body: JSON.stringify(obj),
		});
		let result = await response.json();
		console.log(result);
	}
	toSend(obj);
});


//Отправка изображения на сервер через blob
let canvasImg = document.querySelector("body > img");
let canvas = document.getElementById("canvas");
let clickItem = document.querySelector("body > div.any-item1");
async function toFetch() {
	function crateCanvas() {
		let context = canvas.getContext("2d");
    	context.drawImage(canvasImg, 100, 100);
	}
	crateCanvas();
	let blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
	let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: blob,
	});
	let result = await response.json();
	console.log(result);
}
clickItem.addEventListener("click", toFetch)



// задача с получением массива объектов пользователей гитхаб по массиву из логинов
let clickItemm = document.querySelector("body > div.any-item1");
// моё решение.
async function getUsers(users) {
	let res = [];
	let responses = await Promise.all(users.map((item) => {
		return fetch(`https://api.github.com/users/${item}`);
	})).then((responses) => {
			responses.forEach(item => {
			let json = item.json();
			if(item.status !== 200) {
				res.push(null)
			} else {
				res.push(json);
			} 
		});
		
	})
	.catch((responses) => {return null});
	let results = await Promise.all(res);
	console.log(results);
	return results;
}
// Улучшеное решение без цикла forEach внутри, а просто сразу в map
/* async function getUsers(users) {
	let arr = [];
	let urls = await Promise.all(
		users.map(item => {
			return fetch(`https://api.github.com/users/${item}`)
			.then((responses) => {
				if(responses.status !== 200) arr.push(null);
				else arr.push(responses.json());
			})
			.catch((responses) => {return null});
		})
	) 
	let results = await Promise.all(arr);
	console.log(results);
	return results;
} */

/* // решение из учебника
async function getUsers(names) {
  let jobs = [];
  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }
  let results = await Promise.all(jobs);
  console.log(jobs);
  return results;
} */
clickItemm.addEventListener("click", () => getUsers(["mojombo", "defunkt", "qwqqqwwq"]));


// Отаправка формы на разные url
let myForm = document.forms[0];
let urlss = ["https://webhook.site/b4b25183-2460-4744-9ab9-402b3907d146", "https://jsonplaceholder.typicode.com/posts", "../reviews-form_telegram.php"];
function submitForm(form) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		let formData = new FormData(myForm);

		let requests = Promise.all(urlss.map(item => {
			return fetch(item, {
				method: "POST",
				body: formData,
			})
		})).then((responses) => {
			let results =  Promise.all(responses.map(item => item.status))
			return results;
		}).then((results) => console.log(results));
	});
}
submitForm(myForm);



// Код, который читает специальный объект response.body, который в свою очередь предоставляет тело ответа по частям, по мере поступления
async function getData() {
	let response = await fetch("https://jsonplaceholder.typicode.com/posts");
	let reader = response.body.getReader();

	let receivedLength = 0;
	let receivedDataArr = [];

	while(true) {
		let result = await reader.read();
		if(result.done) {
			break;
		}
		receivedLength += result.value.length;
		receivedDataArr.push(result.value)

		console.log(receivedLength + " байт ;" + receivedDataArr);
	}
}
getData();

// Вот полный рабочий пример, который получает ответ сервера и в процессе получения выводит в консоли длину полученных данных
/* 
	async function readState() {
	// Шаг 1: начинаем загрузку fetch, получаем поток для чтения
	let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

	const reader = response.body.getReader();

	// Шаг 2: получаем длину содержимого ответа
	const contentLength = +response.headers.get('Content-Length');

	// Шаг 3: считываем данные:
	let receivedLength = 0; // количество байт, полученных на данный момент
	let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)
	while(true) {
	const {done, value} = await reader.read();

	if (done) {
		break;
	}

	chunks.push(value);
	receivedLength += value.length;

	console.log(`Получено ${receivedLength} из ${contentLength}`)
	}

	// Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
	let chunksAll = new Uint8Array(receivedLength); // (4.1)
	let positionn = 0;
	for(let chunk of chunks) {
	chunksAll.set(chunk, positionn); // (4.2)
	positionn += chunk.length;
	}

	// Шаг 5: декодируем Uint8Array обратно в строку
	let result = new TextDecoder("utf-8").decode(chunksAll);

	// Готово!
	let commits = JSON.parse(result);
	alert(commits[0].author.login);
}
readState(); */