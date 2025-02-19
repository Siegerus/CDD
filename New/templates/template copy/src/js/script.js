
let box = document.querySelector(".box"),
    innerBox = box.querySelector(".box__inner");

/* box.addEventListener("click", () => {
    async function toAsync () {
        await console.log("1");
        await console.log("2");
        await console.log("3");
        await console.log("4");
    }
    toAsync();
}); */

/* let anyEvent = new CustomEvent("myEvent");

let displayedToConsole = () => {
    console.log("Event!");
}
box.addEventListener("myEvent", displayedToConsole);

box.addEventListener("click", () => {
    box.dispatchEvent(anyEvent);
});
 */

// let someFetch = ;
/* fetch("js/server.json")
    .then((response) => console.log(response.json())); */
// console.log(fetch("js/server.json"));

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

let sendResponse = async (formData) => {
    const response = await fetch("reviews-form_telegram.php", {
        method: "POST",
        body: formData
    });

    if(!response.ok) {
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




     





