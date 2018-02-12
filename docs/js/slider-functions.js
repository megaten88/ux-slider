var images=[1,2,3,4,5];
jQuery(document).ready(function($) {
	$("#up-arrow").click(function() {
		for (var i = 0; i < images.length; i++) {
			if (images[i]<2) {
				images[i] = 10;
			}else{
				images[i]--;
			}
		}
		for (var i = 0; i < 5; i++) {
			$("#image"+(i+1)).attr('src', 'images/img'+images[i]+'.jpg');
		}
		$("#selected").attr('src', 'images/img'+images[2]+'.jpg');

	});
	$("#down-arrow").click(function() {
		for (var i = 0; i < images.length; i++) {
			if (images[i]>9) {
				images[i] = 1;
			}else{
				images[i]++;
			}
		}
		for (var i = 0; i < 5; i++) {
			$("#image"+(i+1)).attr('src', 'images/img'+images[i]+'.jpg');
		}
		$("#selected").attr('src', 'images/img'+images[2]+'.jpg');
	});

	$(".slider-img").click(function() {
		if($(this).attr('id') == 'image1'){

		}else if($(this).attr('id') == 'image2'){

		}else if($(this).attr('id') == 'image4'){

		}else if($(this).attr('id') == 'image5'){

		}
	});

	function move_upwards(num) {
		// body...
	}

	function move_backwards(argument) {
		// body...
	}
});