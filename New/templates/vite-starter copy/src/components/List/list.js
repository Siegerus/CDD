import styles from "./List.module.scss";
import myIcon from "../../icons/javascript.svg";

export default () =>  `
<ul class="${styles.root}">
<li><span class="${styles.label}">list-item</span>
</li><li>list-item</li>
<li>list-item</li>
</ul>
<img src="${myIcon}">
`


