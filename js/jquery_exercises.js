"use strict";

// $(document).ready(() => {
//     alert('the DOM has finished loading!');
//     });

$('#container').css('border', '1px solid black');

$('.important').css('background-color', 'yellow');

$('.codeup').css('border', '1px solid red');

$('li, .codeup').css("font-size", "20px");

// $('#title-main').click(() => {
//     alert('This is the main header.');
// });

// $('#title-main').dblclick(() => {
//     alert('This is the main header that was double clicked.');
// });

$('#title-main').hover(
    () => {
        $(this).css('background-color', '#FF0');
    },
    () => {
        $(this).css('background-color', '#FFF');
    });

//note from Kenneth, Tailwind is a css framework that is similar to bootstrap
