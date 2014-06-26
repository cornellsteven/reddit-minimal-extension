if (window.top === window) {
	init();
}
function init() {
	var submit = $('.submit .morelink a');
	$(submit).addClass('submit-link');
	var login_login_main = $('#login_login-main');
	$(login_login_main).hide();
	var siteTable_organic = $('#siteTable_organic');
	var search = $('form#search').clone();
	var toRemove = ['#ad-frame', '.side', '#siteTable_organic'];
	for (var i=0; i < toRemove.length; i++) {
		$(toRemove[i]).remove();
	};
	$('.footer').removeClass('rounded');
	$('#header-img-a').html('<img src="' + safari.extension.baseURI + 'reddit-logo.gif" width="112" height="35" />').css('visibility', 'visible');
	if (login_login_main.length > 0) {
		$('#header-bottom-right').append('<a href="#" id="log-in">Log In <img src="' + safari.extension.baseURI + 'down-arrow.png" width="12" height="12" /></a>').append(login_login_main);
		$('#log-in').live('click', function(event) {
			$(this).toggleClass('open');
			$('#login_login-main').toggle();
			if ($('#login_login-main').css('display') == 'block') {
				$('body').bind('click', function(event) {
					if (event.target.id != 'login_login-main' && $(event.target).parents('#login_login-main').length == 0) {
						$('#log-in').toggleClass('open');
						$('#login_login-main').toggle();
						$('body').unbind('click');
					}
				});
			} else {
				$('body').unbind('click');
			}
			event.preventDefault();
		});
		$('#remember-me .btn').css({ 'float': 'left', 'margin-right': '15px' });
		$('#remember-me label').after('<br/>');
		$('#login_login-main input[type="text"]').attr('id', 'user_input').before('<label for="user_input">Username</label>');
		$('#login_login-main input[type="password"]').attr('id', 'passwd_input').before('<label for="passwd_input">Password</label>');
	} else {
		if (submit.length > 0) {
			$('#header-bottom-right').append(' | ').append(submit);
		}
	}
	if ($('p.nextprev').length > 0) {
		var nextprev_html = $('p.nextprev').html();
		$('p.nextprev').html(nextprev_html.replace(' | ', '').replace('view more: ', ''));
		$('p.nextprev a[rel="nofollow next"]').addClass('next-btn');
		$('p.nextprev a[rel="nofollow prev"]').addClass('prev-btn');
	}
	$('.morecomments .button').each(function() {
		$(this).removeClass('button').addClass('new-blue');
	});
	if (search.length > 0) {
		$('#header-bottom-right').append('<form id="rm_search" action="' + $(search).attr('action') + '"><input type="text" name="q" placeholder="search reddit" /></form>');
	}
	
	$('a[href$="/spoiler"]').addClass("warning-spoiler-alert");
}