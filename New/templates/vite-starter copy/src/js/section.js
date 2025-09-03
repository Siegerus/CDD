import List from "../components/List/list";
document.querySelector(".box").innerHTML = `
    <div>${List()}</div>
`

/* function createElem() {
    let arr = [];
    for(let i = 0; i < 3; i++) {
        let elem = document.createElement("div")
        arr.push(elem);
    }
    return arr;
}

function appendElem(el) {
    document.body.append(...el);
    el.forEach(item => item.innerHTML += "<p>This is text</p>");
}
appendElem(createElem()); */
/* 
function setImage(link) {
    let img = document.createElement("img");
    document.body.append(img);
    img.src = link;
    img.onload = () => console.log("loaded!!!")
}

function getData(url) {
    fetch(url).then((response) => response.json()).then((json) => {
        let avatar = json.avatar_url;
        setImage(avatar);        
    });
}
getData("https://api.github.com/users/iliakan"); */
