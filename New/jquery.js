$('input[name=phone]').focus( function() {                      //если инпут в фокусе - меняем плейсхолдер
    $(this).attr('placeholder', '+38099 / 38099 / 8099 / 099');
    $(this).focusout(function() {                               // когда нет - возвращаем как было
        $(this).attr('placeholder', 'Введите номер')
    }); 
});

$('.feed-form__radio').on('click', function(){
    let input = $('#sign-nickname, #reviews-nickname, #theme-nickname, #instructions-nickname');
    let text = $('input.feed-form__radio_social:checked + .feed-form__radio-label').text();
    input.attr('placeholder', 'Как вас найти в ' + text + ' (введите ваш ник или номер телефона)');        
});


$('.feed-form__radio').on('click', function(){
    let text = $('input.feed-form__radio_social:checked + .feed-form__radio-label').text();
    $('#sign-nickname, #reviews-nickname, #theme-nickname, #instructions-nickname').attr('placeholder', 'Как вас найти в ' + text + ' (введите ваш ник или номер телефона)');  // извлекли текст из лейбла радио и поместили в плейсхолдер
});

$.validator.addMethod("justphone", function(value, element) {          // свои методы валидации
        return this.optional( element ) || /^[0-9+]/.test( value );
      }, 
      "Неверный формат")
      

$.validator.addMethod("justtime", function(value, element) {
    return this.optional( element ) || /^[0-9]/.test( value );

    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/ // пример допустимых симыолов для мыла
    }, 
    "Неверный формат")


    $('#theme-form').validate({                             // меняем расположение ошибки при валидации
        errorPlacement: function(error, element) {
            if (element.hasClass('theme-radio')) {
                error.appendTo('.feed-form__theme-error-box');   // добавляем её в созданный контейнер
            } else {
                error.insertAfter(element);
              }
        },
        ignore: "",   // ошибка будет показываться у скрытых форм тоже
        rules: {
            theme: {
            required: true
            },
        } 
    })

$('#theme-form').validate({                                       // тоже меняем расположение ошибки 
    errorPlacement: function(error, element) {
            if(element.attr('name') == 'theme'){
                error.insertAfter('.feed-form__theme-error-box');
                error.css('display', 'none');
                error.css('color', 'red');
                error.fadeIn();
            } else {
                error.insertAfter(element);
              }  
        },
        })
 
    $.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"          // маска
    $('input[name=phone]').mask("+7 (h99) 999-99-99");


$('#modal-sign-button').click(function() {            // делаем инпут обязательным, если радио перед ним было отмечено
    let radio = $('input.feed-form__radio_social');
    if (radio.is(':checked')) {
        $('input#sign-nickname').prop('required', true);
    }
});


$('form').submit(function(e) {                         // сабмит формы
    e.preventDefault();
    if (!$(this).valid()) { 
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()}).done(function() {
            $(this).find("input").val("");
            $('.modal_sign-succes').fadeIn('slow');
            $('form').trigger('reset');
        })
        return false;
    });


    form.submit(function(e){                         // Проверка на валидность формы при отправке,
        e.preventDefault();
        if (form.valid()) {
            alert('Форма отправлена');
        }
        return;
    });    


$('a[href*="#"]').on("click", function(e) {            //плавный скрол
    e.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});

$('#theme-form').submit((function (){              // если форма при сабмите не валидна, скрыть элемент
    if (!$('.theme-radio').valid()) {
        $('#theme-error').fadeOut();
    }
}));


if($("#checkSurfaceEnvironment-1").prop('checked') == true){
    //do something
}

$.validator.addMethod("justcomment", function(value, element) {
    return this.optional( element ) || !/(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/gim.test( value );
    });         //  фильтр без ссылок

$.validator.addMethod("justmail", function(value, element) {
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
        });              // только почта

$('input[name=phone]').on('input', function(){  
    this.value = this.value.replace(/[^0-9\+]/g, '');      // только цифры
});


$('input#reviews-textarea').on('input', function(){       // без html кода
    this.value = this.value.replace(/<[^>]*>/g,'');
});






const isEmpty = (str) => !str.trim().length

const isBoolean = (str) => ['true', 'false', '1', '0'].indexOf(str) > -1

const isAlpha = /^[A-ZА-ЯЁ]+$/i.test(str)

const isAlphaNumeric = (str) => /^[0-9A-ZА-ЯЁ]+$/i.test(str)

const numeric = (delimiter = '.') =>
  new RegExp(`^[+-]?([0-9]*\\${delimiter})?[0-9]+$`)
const isNumeric = (str, delimiter) => numeric(delimiter).test(str)

const isPostalCode = (str) => /^\d{6}$/.test(str)

const isPassportNumber = (str) => /^\d{10}$/.test(str)

const isMobilePhone = (str) => /^(\+?7|8)?9\d{9}$/.test(str)

const isURL = (str) => /https?:\/\/(www\.)?[-\w@:%\.\+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-\w()@:%\.\+~#=//?&]*)/i.test(str)

const isEmail = (str) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i.test(str)

const isStrongPassword = (str) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?\/])[-\w#!$@%^&*+~=:;?\/]{8,}$/.test(str)

const isCreditCard = (str) =>
  str.trim().length !== 0 &&
  str
    .replace(/\D/g, '')
    .split('')
    .reverse()
    .reduce((s, c, i) =>
      (s += +(i % 2 !== 0 && (c *= 2) > 9 ? (c -= 9) : c)), 0) % 10 === 0



    $('#footer-link').on('click', function(e){    // вернуть ссылке поведение по умолчанию
        e.preventDefault();
        location.href = $(this).attr('href');
       })