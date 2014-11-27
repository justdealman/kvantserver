function controls() {
	if ( $(window).width() > 1180 ) {
		$('.controls').css({
			'right': '3%',
			'margin-right': '0'
		});
	}
	else {
		$('.controls').css({
			'right': '50%',
			'margin-right': '-555px'
		});
	}
}
function moveup() {
	if ( $(window).width() > 1240 ) {
		$('.moveup').css({
			'left': '3%',
			'margin-left': '0'
		});
	}
	else {
		$('.moveup').css({
			'left': '50%',
			'margin-left': '-580px'
		});
	}
}
$(window).resize(function() {
	if ( $('.controls').length > 0 ) {
		controls();
	}
	if ( $('.moveup').length > 0 ) {
		moveup();
	}
});
$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		$('.slider').slides({
			generatePagination: false,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			slideEasing: 'easeInOutQuad',
			play: 10000,
			pause: 2500
		});
	}
	$('.header .search button').bind('click', function() {
		if ( $('.header .search').hasClass('opened') && $('.header .search input').val().length > 0 ) {
			alert('Этот алерт срабатывает если поле поиска непустое');
		}
		else {
			$('.header .search').toggleClass('opened');
		}
		return false;
	});
	if ( $('.submenu').length > 0 ) {
		$('.wrapper').css({
			'padding-top': '195px'
		});
	}
	if ( $('.controls').length > 0 ) {
		$('.controls').css({
			'margin-top': -$('.controls').outerHeight()/2+'px'
		});
		controls();
		if ( $('.submenu').length > 0 ) {
			var move = 147;
		}
		else {
			var move = 88;
		}
		$('.controls ul li:nth-child(1)').addClass('current').siblings().removeClass('current');
		$(window).bind('scroll', function() {
			if ( $(window).scrollTop()+move < $('[data-slide="2"]').offset().top ) {
				$('.controls ul li:nth-child(1)').addClass('current').siblings().removeClass('current');
			}
			else {
				$('[data-slide]').each(function() {
					if ( $(window).scrollTop()+move >= $(this).offset().top ) {
						var start = eval($(this).attr('data-slide'));
						$('.controls ul li:nth-child('+start+')').addClass('current').siblings().removeClass('current');
					}
				});
			}
		});
		$('.controls ul li a').bind('click', function() {
			if ( $(this).attr('href') == 1 ) {
				$('html, body').animate({ scrollTop: 0 }, 500);
			}
			else {
				$('html, body').animate({ scrollTop: $('[data-slide="'+$(this).attr('href')+'"]').offset().top-move }, 500);
			}
			return false;
		});
		$('.controls .down').bind('click', function() {
			var current = $(this).parents('.controls').find('li.current').index()+1;
			if ( current < 4 ) {
				$('.controls ul li:nth-child('+eval(current+1)+') a').trigger('click');
			}
			return false;
		});
	}
	if ( $('.moveup').length > 0 ) {
		moveup();
	}
	$('.slider .down').bind('click', function() {
		$('.slider .next').trigger('click');
		return false;
	});
	$('.jcarousel').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutQuad',
		wrap: 'circular'
	});
	$('.bottom img').hover(
		function() {
			$(this).stop(true,true).animate({
				'margin-top': '-75px'
			}, 1000, 'easeOutBack');
		},
		function() {
			$(this).animate({
				'margin-top': '0'
			}, 1000, 'easeOutBounce');
		}
	);
	$(window).bind('scroll', function() {	
		if ( $(window).scrollTop() > 68 ) {
			$('.header, .submenu').addClass('fixed');
		}
		else {
			$('.header, .submenu').removeClass('fixed');
		}
		if ( $(document).scrollTop() > 0 ) {
			$('.moveup').show();
		}
		else {
			$('.moveup').stop(true,true).fadeOut(500);
		}
	});
	$('.moveup').bind('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 500);
		return false;
	});
	$('.modal').append('<span class="close"></span>');
	var bh = 0;
	$('.catalog li a').bind('click', function() {
		$('.modal').css({
			'margin-top': -$('.modal').outerHeight()/2+'px',
			'-webkit-border-radius': '20px/'+Math.floor($('.modal').outerHeight()/2)+'px',
			'-moz-border-radius': '20px/'+Math.floor($('.modal').outerHeight()/2)+'px',
			'border-radius': '20px/'+Math.floor($('.modal').outerHeight()/2)+'px'
		});
		$('.fade, .modal').stop(true,true).fadeIn(500);
		bh = $('body').scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.modal .close, .fade').bind('click', function() {
		$('.fade, .modal').stop(true,true).fadeOut(500);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bh);
		return false;
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.team li:nth-child(5n), .content .products > ul li:nth-child(4n), .recipeslist li:nth-child(3n)').css({
		'margin-right': '-3px'
	});
});
$(window).load(function() {
	$('.content .description').each(function() {
		$(this).css({
			'-webkit-border-radius': '20px/'+Math.floor($(this).outerHeight()/2)+'px',
			'-moz-border-radius': '20px/'+Math.floor($(this).outerHeight()/2)+'px',
			'border-radius': '20px/'+Math.floor($(this).outerHeight()/2)+'px'
		});
	});
});