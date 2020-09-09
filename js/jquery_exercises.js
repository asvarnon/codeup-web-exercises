"use strict";

// $(document).ready(() => {
//     alert('the DOM has finished loading!');
//     });

$('#container').css('border', '1px solid black');

$('.important').css('background-color', 'yellow');

$('.codeup').css('border', '1px solid red');

$('li, .codeup').css("font-size", "20px");

$('h1').click(function() {
    $(this).css('background-color', 'green');
});

$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('background-color', 'red');
    },
    function() {
        $(this).css('background-color', 'white');
    });

//note from Kenneth, Tailwind is a css framework that is similar to bootstrap
