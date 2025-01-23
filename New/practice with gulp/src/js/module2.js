import validator from "validator";
function secondModule() {
    window.addEventListener("DOMContentLoaded", function(){

        let input = document.querySelectorAll(".feed-form__input"),
            output = document.querySelectorAll(".feed-form__output");
            
        function getValue() {
            input.forEach((item, i) => {
                item.addEventListener("input", function(){
                    let inputVal = validator.isEmail(item.value);;
                    
                    console.log(inputVal);
                    output[i].value = inputVal;
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

export { secondModule };

