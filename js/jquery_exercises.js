"use strict";

// $(document).ready(() => {
//     alert('the DOM has finished loading!');
//     });


$(document).ready(function(){

    $('#container').css('border', '1px solid black');

    $('.important').css('background-color', 'yellow');

    $('.codeup').css('border', '1px solid red');

    $('li, .codeup').css("font-size", "20px");

    $('li').click(function() {
        $(this).css('text-decoration', 'line-through');
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').hover(
        function() {
            $(this).css('background-color', 'blue');
        },
        function() {
            $(this).css('background-color', 'yellow');
        });

    $('#textfield').keydown(function(event) {
        console.log("the " + event.key + " key was pressed");
        // console.log(`the keycode is ${event.keyCode}`);
        $('#result').append(event.key);
    });


});
//note from Kenneth, Tailwind is a css framework that is similar to bootstrap
