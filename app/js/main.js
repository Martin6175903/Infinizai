$(function() {
    $(".custom__slider").slick({
        prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev__img" src="images/arrow-prev.svg" alt="Prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slick-next__img" src="images/arrow-next.svg" alt="Next"></button>',
        fade: true
    });

    $('.header__menu-burger').click(function() {
        $('.header__menu-burger').toggleClass('open-menu');
        $('.header__list').toggleClass('open-menu');
    });

    if($(window).width() < 551) {
        $('.header__img').appendTo($('.header__info'));
        $('.header__info-btns').before($('.header__img'));
        $('.cloud-gaming__popup').appendTo($('cloud-gaming__info'));
        $('.cloud-gaming__info-btn').before($('.cloud-gaming__popup'));
    }

    if($(window).width() < 901) {
        let $link1 = document.querySelector('.footer__social-list__item-newDiv1');
        let $newDiv = document.createElement('div');
    
        $link1.before($newDiv);
        $newDiv.className += 'footer__social-list-div2';
    
        let $link2 = document.querySelector('.footer__social-list-div2');
        let $newDiv2 = document.createElement('div');

        $newDiv2.className += 'footer__social-list-div1';
        $link2.before($newDiv2);

        $('.footer__social-list__item-newDiv1').appendTo($('.footer__social-list-div1'));
        $('.footer__social-list__item-newDiv2').appendTo($('.footer__social-list-div2'));
    }

})