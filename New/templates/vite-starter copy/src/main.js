//scss
import './scss/main.scss';

//js
import './js/section.js'; 
import './js/header.js';
import './js/footer.js';

import List from "./components/List/list";

document.querySelector(".box").innerHTML = `
    <div>${List()}</div>

`