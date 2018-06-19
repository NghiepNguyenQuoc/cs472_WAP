"use strict";
let win = false;
let touch = false;
let inmaze = false;
let start = false;
$(document).ready(function () {
    $("#maze").find(".boundary").mouseover(function () {
        if (start === true && win === false) {
            $("#status").text("You lose");
            $(this).addClass("youlose");
        }
        touch = true;
    });
    $("#end").mouseover(function () {
        if (touch === false) {
            if (inmaze === true && touch === false) {
                $("#status").text("You win");
                win = true;
            }
        } else {
            $("#status").text("You lose");
            start = false;
        }
    });
    $("#start").click(function () {
        $("#maze").find(".boundary").removeClass("youlose");
        $("#status").text("Start new game!!!!!");
        start = true;
        touch = false;
        win = false;
    });

    $("#maze").mouseenter(function () {
        inmaze = true;
    });
    $("#maze").mouseleave(function () {
        inmaze = false;
        touch = true;
        if (start === true && win === false) {
            $('.boundary').addClass("youlose");
            $("#status").text("You lose");
        }
    });
});