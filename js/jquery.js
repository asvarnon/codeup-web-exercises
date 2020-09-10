"use strict";

var inputList = [];
const cheatCodeKeyID = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

$(document).ready(function (){

    // var inputList = [];
    // const cheatCodeKeyID = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    //correct sequence


    // $('#sequence-reset').click(function (){
    //     return inputList = [];
    // });

    $(document).keyup(function(event){
        inputList.push(event.keyCode);
        console.log(event.keyCode);
        for (var i = 0; i < inputList.length; i++) {
            if (inputList[i] !== cheatCodeKeyID[i]){
                inputList = [];
            }
        }
    });

    $(document).keyup(function(event){

    });












});










