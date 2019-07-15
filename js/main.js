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
// owl carousel-4
$('.owl-carousel-4').owlCarousel({
loop:true,
margin:0,
navContainer: ".navigation-4",
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
// раскрывающиеся блоки THIRD
function change_visibility (block_4_close, block_4_open) {
document.getElementById(block_4_close).style.display='block';
document.getElementById(block_4_open).style.display='none';
}
// range ползунок
$( function() {
$( "#slider-range" ).slider({
range: true,
min: 3500,
max: 100000,
values: [ 0, 25000],
slide: function( event, ui ) {
$( "#amount" ).val( ui.values[ 0 ] );
$( "#amount2" ).val( ui.values[ 1 ] );
}
});
$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
$( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ) );
} );
// range SECOND ползунок
$( function() {
$( "#slider-range2" ).slider({
range: true,
min: 40,
max: 300,
values: [ 40, 120],
slide: function( event, ui ) {
$( "#amount3" ).val( ui.values[ 0 ] );
$( "#amount4" ).val( ui.values[ 1 ] );
}
});
$( "#amount3" ).val( $( "#slider-range2" ).slider( "values", 0 ) );
$( "#amount4" ).val( $( "#slider-range2" ).slider( "values", 1 ) );
} );
// range THIRD ползунок
$( function() {
$( "#slider-range3" ).slider({
range: true,
min: 1,
max: 20,
values: [ 1, 5],
slide: function( event, ui ) {
$( "#amount5" ).val( ui.values[ 0 ] );
$( "#amount6" ).val( ui.values[ 1 ] );
}
});
$( "#amount5" ).val( $( "#slider-range3" ).slider( "values", 0 ) );
$( "#amount6" ).val( $( "#slider-range3" ).slider( "values", 1 ) );
} );
// range FOUR ползунок
$( function() {
$( "#slider-range4" ).slider({
range: true,
min: 3500,
max: 100000,
values: [ 0, 25000],
slide: function( event, ui ) {
$( "#amount7" ).val( ui.values[ 0 ] );
$( "#amount8" ).val( ui.values[ 1 ] );
}
});
$( "#amount7" ).val( $( "#slider-range4" ).slider( "values", 0 ) );
$( "#amount8" ).val( $( "#slider-range4" ).slider( "values", 1 ) );
} );
// range FIVE ползунок
$( function() {
$( "#slider-range5" ).slider({
range: true,
min: 40,
max: 300,
values: [ 40, 120],
slide: function( event, ui ) {
$( "#amount9" ).val( ui.values[ 0 ] );
$( "#amount10" ).val( ui.values[ 1 ] );
}
});
$( "#amount9" ).val( $( "#slider-range5" ).slider( "values", 0 ) );
$( "#amount10" ).val( $( "#slider-range5" ).slider( "values", 1 ) );
} );
// range SIX ползунок
$( function() {
$( "#slider-range6" ).slider({
range: true,
min: 1,
max: 20,
values: [ 1, 5],
slide: function( event, ui ) {
$( "#amount11" ).val( ui.values[ 0 ] );
$( "#amount12" ).val( ui.values[ 1 ] );
}
});
$( "#amount11" ).val( $( "#slider-range6" ).slider( "values", 0 ) );
$( "#amount12" ).val( $( "#slider-range6" ).slider( "values", 1 ) );
} );
// Select
$('.slct').click(function(){
var dropBlock = $(this).parent().find('.drop');
if( dropBlock.is(':hidden') ) {
dropBlock.slideDown();
$(this).addClass('active');
$('.drop').find('li').click(function(){
var selectResult = $(this).html();
$(this).parent().parent().find('input').val(selectResult);
$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
dropBlock.slideUp();
});
} else {
$(this).removeClass('active');
dropBlock.slideUp();
}
return false;
});
// bxslider
jQuery(document).ready(function(){
jQuery('.bxslider').bxSlider({
controls: false,
pagerCustom: '#bx-pager'
});
});
// padding у tab
var p = document.getElementById('tab-content').clientHeight;
var h = document.getElementById('tabs');
h.style.paddingBottom = p + 30 + 'px';
// счетчик товара
var count = document.getElementById('count').innerHTML = 0;
function func() {
var plusButton = document.getElementsByClassName("button_plus");
var minusButton = document.getElementsByClassName("button_minus");
if (document.onclick = plusButton) {
count++;
count.innerHTML = count;
} else if (document.onclick = minusButton) {
count--;
count.innerHTML = count;
}
};
// раскрывающиеся блоки FIRST
var menuElem = document.getElementById('sweeties');
var titleElem = menuElem.querySelector('.title');
titleElem.onclick = function() {
menuElem.classList.toggle('open');
};
// раскрывающиеся блоки SECOND
var menu1Elem = document.getElementById('sweeties1');
var title1Elem = menu1Elem.querySelector('.title1');
title1Elem.onclick = function() {
menu1Elem.classList.toggle('open1');
};