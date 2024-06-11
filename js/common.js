$(document).ready(function() {

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.billbord', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.billbord',
			start: 'center',
			end: '1500',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.element .title-page')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.element .row > div > img')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}



//прилипающие меню
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    	return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	$('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

	//плавный скролл
	$(".link-scroll").mPageScroll2id({
		offset: 130
	});


	//кнопка sandwich
	$(".sandwich").click(function() {
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(200);
			$(".header").addClass("active");
			$(".sandwich").addClass("active");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".menu").slideUp(200);
			$(".header").removeClass("active");
			$(".sandwich").removeClass("active");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay").click(function() {
		$(".menu-overlay").fadeOut(200);
		$(".menu").slideUp(200);
		$(".header").removeClass("active");
		$(".sandwich").removeClass("active");
	});

	//слайдер


    $('.slider-catalog').each(function() {
		var sliderCatalog = $(this);
		sliderCatalog.slick({
			arrows: false,
			dots: true,
			infinite: false,
			appendDots: sliderCatalog.siblings('.pagination-container').find(".pagination"),
			touchThreshold: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 200,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		});
		$(document).on('mouseenter', '.slick-dots li', function() {
			if (!$(this).hasClass('slick-active')) {
			  var slider = $(this).parents(".item-slider").find('.slider-catalog');
			  var index = $(this).index();
			  slider.slick('slickGoTo', index);
			}
		  });
	});

	




	

	$('.slider-for').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		speed: 100,
		touchThreshold: 100,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					speed: 500,
					touchThreshold: 500,
				}
			}
		]
	});


	var scrollCount = 0;
	var scrollTimeout;

	var slider = $('.slider-nav').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.slider-for',
		speed: 100,
		touchThreshold: 100,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fal fa-chevron-up"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fal fa-chevron-down"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					vertical: false,
					verticalSwiping: false,
					speed: 500,
					touchThreshold: 500,
					slidesToShow: 4,
				}
			}
		]
	});

	slider.on('wheel', function(e) {
        e.preventDefault();

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
          scrollCount = 0;
        }, 10);

        if (scrollCount) return;
        scrollCount = 1;

        if (e.originalEvent.deltaY < 0) {
          slider.slick('slickPrev');
        } else {
          slider.slick('slickNext');
        }
      });





	$(".item-driver__head").click(function() {
		$(this).parents(".col-lg-6").siblings().find(".item-driver__content").slideUp(200);
		$(this).parents(".col-lg-6").siblings().find(".item-driver").removeClass("active");
		if ($(this).siblings(".item-driver__content").is(":hidden")) {
			$(this).siblings(".item-driver__content").slideDown(200);
			$(this).parent().addClass("active");
		} else {
			$(this).siblings(".item-driver__content").slideUp(200);
			$(this).parent().removeClass("active");
		}
	});



	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".footer__top a").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

