var image_index=[1,2,3,4,5];
jQuery(document).ready(function($) {
	$("#up-arrow").click(function() {
		move_up(1);
	});
	$("#down-arrow").click(function() {
		move_down(1);
	});

	$(".slider-img").click(function() {
		if($(this).attr('id') == 'image1'){
			move_up(2);
			console.log("image1");
		}else if($(this).attr('id') == 'image2'){
			move_up(1);
			console.log("image2");
		}else if($(this).attr('id') == 'image4'){
			move_down(1);
			console.log("image4");
		}else if($(this).attr('id') == 'image5'){
			move_down(2);
		}
	});

	function move_up(num) {
		for (var x = 0; x <num; x++) {
			for (var i = 0; i < image_index.length; i++) {
				if (image_index[i]<2) {
					image_index[i] = 10;
				}else{
					image_index[i]--;
				}
			}
		}
		for (var i = 0; i < 5; i++) {
			$("#image"+(i+1)).attr('src', 'images/img'+image_index[i]+'.jpg');
		}
		$("#selected").attr('src', 'images/img'+image_index[2]+'.jpg');
	}

	function move_down(num) {
		for (var x = 0; x < num; x++) {
			for (var i = 0; i < image_index.length; i++) {
				if (image_index[i]>10) {
					image_index[i] = 1;
				}else{
					image_index[i]++;
				}
			}
		}
		for (var i = 0; i < 5; i++) {
			$("#image"+(i+1)).attr('src', 'images/img'+image_index[i]+'.jpg');
		}
		$("#selected").attr('src', 'images/img'+image_index[2]+'.jpg');
	}
});