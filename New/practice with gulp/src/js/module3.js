function thirdModule() {
    window.addEventListener("DOMContentLoaded", function(){

        let form = this.document.querySelectorAll(".feed-form"),
            input = Array.from(this.document.querySelectorAll(".test-form__input"));


        console.log(input);

        form.forEach((item, i) => {
            item.addEventListener("submit", function(e){
                e.preventDefault();
    
                let request = new XMLHttpRequest();
    
                request.open("POST", "../mailer/telegram/telegram.php");
                /* request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); */
    
                let formData = new FormData(form[i]);
    
                request.send(formData);
    
            });
        });
        








        
    });  
}

export { thirdModule };

