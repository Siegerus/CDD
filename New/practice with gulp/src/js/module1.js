import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

function firstModule() {
    window.addEventListener("DOMContentLoaded", function () {
          
        let test = "test"; 

        let slider = tns({
            container: '.my-slider',
            items: 1,
            slideBy: 'page',
            navAsThumbnails: true,
            autoplay: false,
            controls: true,
            nav: true,  
            responsive: {
                420: {
                    items: 2,
                    nav: false
                },

                761: {
                    items: 3,
                    controls: false,

                },

                992: {
                    items: 1,
                    controls: false,

                }
            }
        });

        document.querySelector('.slider__next').onclick = function () {
            slider.goTo('next');
        };
        document.querySelector('.slider__prev').onclick = function () {
            slider.goTo('prev');
        };


        let dropdown = this.document.querySelector(".header__dropdown"),
            dropdownItems = this.document.querySelectorAll(".header__dropdown-item"),
            menuLink = this.document.querySelector(".header__list-item_dropdown");

        menuLink.addEventListener("mouseenter", function() {
            dropdown.classList.remove("animation-fade-out");
            dropdown.classList.add("animation-fade");
            dropdown.style.display = "block";
            
            for(let i = 0; i < dropdownItems.length; i++) {
                dropdownItems[i].style.display = "block";
            }
        });

        menuLink.addEventListener("mouseleave", function() {
            dropdown.classList.remove("animation-fade");
            dropdown.classList.add("animation-fade-out");
            dropdown.addEventListener("animationend", function(e) {
                if(e.target.classList.contains("animation-fade-out")) {
                    dropdown.style.display = "none";
                }
            });
        });









    });
}

export { firstModule }
    
 