window.addEventListener("DOMContentLoaded", function () {

        let menu = this.document.querySelector(".header__nav"),
            wrapper = this.document.querySelector(".header__wrap"),
            menuText = this.document.querySelector(".header__text"),
            hamburger = this.document.querySelector(".header__hamburger"),
            dropdown = this.document.querySelector(".header__dropdown");


        let menuSet = function () {

        menu.addEventListener("click", function (e) {
            if (e.target == menu || e.target == menuText || e.target == hamburger || e.target == wrapper) {
                this.classList.toggle("header__nav_active");
                menuText.classList.toggle("header__text_active");
                hamburger.classList.toggle("header__hamburger_active");
                dropdown.classList.toggle("header__dropdown_active");
            }
        });

        /* document.body.addEventListener("click", (e) => {
            if (e.target !== dropdown) {
                menu.classList.remove("header__nav_active");
                menuText.classList.remove("header__text_active");
                hamburger.classList.remove("header__hamburger_active");
                dropdown.classList.remove("header__dropdown_active");
            }
        }); */
    };

    menuSet();
});