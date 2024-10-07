function secondModule() {
    window.addEventListener("DOMContentLoaded", function(){

        let input = document.querySelectorAll(".feed-form__input"),
            output = document.querySelectorAll(".feed-form__output");
            
    function getValue() {
        input.forEach((item, i) => {
            item.addEventListener("input", function(){
                let inputVal = +item.value;

                output[i].value = inputVal + 3;
                if (inputVal == "") {
                    output[i].value = "";
                }  
            });
        });  
    }

    getValue();



        /* console.log(output); */
        
    });
    
}

export { secondModule }

