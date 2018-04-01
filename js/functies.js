// header sticky inner
if($('header .inner').size() !== 0) {
	$(window).on("load resize scroll",function(){
		if(($('header .inner').offset().top + 40) - $(window).scrollTop() <= 0) {
			if($('header .inner_sticky').size() === 0) {
				$('header .inner').before('<div class="inner_sticky"></div>');
				$('header .inner .navbar').clone(true).appendTo('header .inner_sticky');
			}
 			$('header .inner_sticky').slideDown(200);
		}
		else if(($('header .inner').offset().top + 40) - $(window).scrollTop() > 0) {
 			$('header .inner_sticky').slideUp(200);
		}
	});
}

function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
        center: new google.maps.LatLng(52.3116551, 6.926828300000011),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);

<!--Email must be an email -->
$('#email').on('input', function() {
    var input=$(this);
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email=re.test(input.val());
    if(is_email){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}
});

<!--Message cant be blank -->
$('#message,#name').keyup(function(event) {
    var input=$(this);
    var message=$(this).val();
    console.log(message);
    if(message){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}	
});

$("#contact_submit button").click(function(event){
    var form_data=$("#contact").serializeArray();
    var error_free=true;
    for (var input in form_data){
        var element=$("#contact_"+form_data[input]['name']);
        var valid=element.hasClass("valid");
        var error_element=$("span", element.parent());
        if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
        else{error_element.removeClass("error_show").addClass("error");}
    }
    if (!error_free){
        event.preventDefault(); 
    }
    else{
        alert('No errors: Form will be submitted');
    }
});