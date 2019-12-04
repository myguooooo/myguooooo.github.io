

//changing colors 
$('input[type="range"]').on("change mousemove", function () {
	var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

	$(this).css('background-image',
		'-webkit-gradient(linear, left top, right top, '
		+ 'color-stop(' + val + ', white), '
		+ 'color-stop(' + val + ', #AABEE9)'
		+ ')'
		);
});

//adding images
var imageUrl = new Array();

        imageUrl[0] = '1.png';
        imageUrl[1] = '2.png';
        imageUrl[2] = '3.png';
        imageUrl[3] = '4.png';
        imageUrl[4] = '5.png';
        imageUrl[5] = '6.png';
        imageUrl[6] = '7.png';
        imageUrl[7] = '8.png';
        imageUrl[8] = '9.png';
        imageUrl[9] = '10.png';
        imageUrl[10] = '11.png';
        imageUrl[11] = '12.png';
        imageUrl[12] = '13.png';
        imageUrl[13] = '14.png';
        imageUrl[14] = '15.png';
        imageUrl[15] = '16.png';
        imageUrl[16] = '17.png';
        imageUrl[17] = '18.png';
        imageUrl[18] = '19.png';
        imageUrl[19] = '20.png';
        imageUrl[20] = '21.png';
        imageUrl[21] = '23.png';
        imageUrl[22] = '23.png';
        imageUrl[23] = '24.png';
        imageUrl[24] = '25.png';
        imageUrl[25] = '26.png';
        imageUrl[26] = '27.png';
        imageUrl[27] = '28.png';
        imageUrl[28] = '29.png';
       
$(document).on('input change', '#slider', function() {//listen to slider changes
    var v=$(this).val();//getting slider val
   $('#sliderStatus').html( $(this).val() );
  $("#img").prop("src", imageUrl[v]);
});


