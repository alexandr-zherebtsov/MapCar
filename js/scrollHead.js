$(function() {
	var header = $(".scroll_head-1");
	$(window).scroll(function() {

		var scroll = $(window).scrollTop();

		if ($(window).width() >= 1900) {		

			if (scroll >= 800) {
				header.removeClass('scroll_head-1').addClass("scroll_head-2");
			}
			else {
				header.removeClass("scroll_head-2").addClass('scroll_head-1');
			}
		}

		else {

			if (scroll >= 530) {
				header.removeClass('scroll_head-1').addClass("scroll_head-2");
			}
			else {
				header.removeClass("scroll_head-2").addClass('scroll_head-1');
			}
		}
		
	});
});