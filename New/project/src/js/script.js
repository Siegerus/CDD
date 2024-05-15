$(document).ready(function(){

    $(".reviews__arrow-prev, .reviews__arrow-next").click(function(){   
        $a = $(".reviews__wrapper .reviews__content");
        
        $x = $(this).hasClass('reviews__arrow-prev') ? $a.prev() : $a.next(); 
        
            
          $x.add($a).toggleClass('reviews__content_active');      
          $('.modal').show();
    });





    $('.modal').fadeOut(); 


    $('.modal').on(':focus', function(){
        $('body').addClass('modal-open');
    });


    $('#form').validate({
        rules: {
            name: { // название поля обязательно должно быть указано в верстке
                required: true, // обязательность заполнения
               // minlength: 2,
                rangelength: [2, 23]
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true        //что бы вводить именно мейл   
            }
          },
          messages: {      // Так настраиваются сообщения при вводе.Так же все энадписи можно стилизовать посмотрев их класс в браузере в режиме разработчика
            name: {        
                required: "Пожалуйста, введите своё имя",
        //        minlength: jQuery.validator.format("Введите минимум {2} символа"),
                rangelength: jQuery.validator.format("Введите от {2} до {23} символов")
            },
            phone: "Пожалуйста, введите свой номер",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильный адрес почты"
            }
          }
    });







   });
   
