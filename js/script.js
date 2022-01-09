// Burger

    let burger = document.querySelector("#burger-icon");
    let header = document.querySelector("#header");
    burger.onclick = function() {
        header.classList.toggle("menu-open");
    }

 
// Slider

	$(document).ready(function(){
	  $('.slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 400,
		  arrows: false,
		  autoplay: true,
		  autoplayspeed: 3000,
	  });
	});