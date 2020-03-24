$(document).ready(function(){
	
	$('.menu_trigger').click(function() {
			$('.mob_nav ul').slideToggle(500);
			$('.mob_body').slideToggle(0);
		}
	);

	$('.menu_trigger').click(function () {

		$('.trans_menu_icon_1_m').toggleClass('trans_menu_icon_1r_m');
		$('.trans_menu_icon_2_m').toggleClass('trans_menu_icon_2r_m');

	});

});