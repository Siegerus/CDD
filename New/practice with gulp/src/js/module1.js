
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';


function firstModule() {
    window.addEventListener("DOMContentLoaded", function () {
          
        let test = "test"; 
        console.log(test);

        let slider = tns({
            container: '.my-slider',
            items: 1,
            slideBy: 'page',
            navAsThumbnails: true,
            autoplay: false,
            controls: true,
            nav: true,
            
            
        });

        document.querySelector('.slider__next').onclick = function () {
            slider.goTo('next');
        };
        document.querySelector('.slider__prev').onclick = function () {
            slider.goTo('prev');
        };

    
    });
}

export { firstModule }
    
 