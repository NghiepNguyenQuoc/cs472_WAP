"use strict";
let win = false;
let touch = false;
let inmaze = false;
$(document).ready(function () {
    $("#maze").find(".boundary").mouseover(function () {
        if (win === false) {
            $("#status").text("You lose");
            $(this).addClass("youlose");
        }
        touch = true;
    });
    $("#end").mouseover(function () {
        if (touch === false) {
            if (inmaze === true) {
                $("#status").text("You win");
                win = true;
            }
        } else {
            $("#status").text("You lose");
        }
    });
    $("#start").click(function () {
        $("#maze").find(".boundary").removeClass("youlose");
        $("#status").text("Click the \"S\" to begin.");
        touch = false;
        win = false;
    });

    $("#maze").mouseenter(function () {
        inmaze = true;
    });
    $("#maze").mouseleave(function () {
        inmaze = false;
    });
});