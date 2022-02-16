const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    closeElemTwo = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElemTwo.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skill__percentage'),
    lines = document.querySelectorAll('.skill__dial span');

counters.forEach( (item, i) => {
    lines[i].style.width  = item.innerHTML;
});

$(document).ready(function(){
    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                required: true,
                minlength: 2
                },
                checkbox: "required",
                email: {
                required: true,
                email: true
                }
            },
            messages: {
                name: {
                required: "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Введите не менее {0} символов")
                },
                checkbox: "нажмите сюда",
                email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введена почта"
                }
            }
        });
    };

    valideForms(form);

    $('form').submit(function(e) {
        e.preventDefault();
        
        if (!$(this).valid()) {
        return;
        }
        
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });
});
