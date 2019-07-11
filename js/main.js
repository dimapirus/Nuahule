var btn = document.getElementById('search-btn');
var w = search.style.width;
btn.onclick = function () {
	var search = document.getElementById('search');
	var search_input = document.getElementById('search-input');
	search.style.width = 300 + 'px';
	search_input.style.paddingLeft = 20 + 'px';
	search_input.style.paddingRight = 20 + 'px'; 
	btn.style.width = 16 + 'px';
	btn.style.right = 20 + 'px';
		var num = document.getElementById('num-none');
		num.style.display = 'none';
}
document.onclick = function() {
 if (search.width >= 93) {
 		search.style.width = 92 + 'px';
 }
}
 // owl carousel
 $('.owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    navContainer: ".navigation",
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
})
 // owl carousel-2
$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:0,
    navContainer: ".navigation-2",
    dots:true,
     responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        960:{
            items:4
        },
        1920:{
            items:4
        }
    }
})
 // owl carousel-3
 $('.owl-carousel-3').owlCarousel({
    loop:true,
    margin:0,
    navContainer: ".navigation-3",
    dots:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        960:{
            items:4
        },
        1920:{
            items:4
        }
    }
})