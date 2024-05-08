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
   });
   
