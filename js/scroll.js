$(function() {

	$(window).scroll(function() { 
		
		if($(window).width() > 768) {
			if($(this).scrollTop() != 0) { 
				$('#totop').fadeIn(); 
			}
			else { 
				$('#totop').fadeOut(); 
			}
		}

		if($(window).width() <= 768) {
			$('#totop').css({"display":"none",});
		}

	});

	$('#totop').click(function() { 
		$('body,html').animate({scrollTop:0},700); 
	});

}); 