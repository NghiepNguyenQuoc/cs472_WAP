"use strict";
var duration = 250;
var objInterval;
var currentFrame = 0;
var presetAnimation;

function onStart() {
    if (presetAnimation !== "changeanimation")
        presetAnimation = document.getElementById('mytextarea').value;
    objInterval = setInterval(generateAnimation, duration);
    preAnimation(true);
}

function generateAnimation() {
    var e = document.getElementById("aminationopt");
    var abc = e.options[e.selectedIndex].value;
    var arrAnimation = ANIMATIONS[abc].split("=====\n");
    if (presetAnimation !== null && presetAnimation !== "changeanimation") {
        arrAnimation.unshift(presetAnimation);
    }
    if (currentFrame >= arrAnimation.length)
        currentFrame = 0;
    document.getElementById('mytextarea').value = arrAnimation[currentFrame++];
}

function preAnimation(isStart) {
    document.getElementById('startBtn').disabled = isStart;
    document.getElementById('aminationopt').disabled = isStart;
    document.getElementById('stopBtn').disabled = !isStart;
}

function onStop() {
    preAnimation(false);
    clearInterval(objInterval);
    if (presetAnimation !== null && presetAnimation !== "" && presetAnimation !== "changeanimation") {
        document.getElementById('mytextarea').value = presetAnimation;
    }
}

function onChangeAnimation() {
    // presetAnimation = "changeanimation";
    // var e = document.getElementById("aminationopt");
    // document.getElementById('mytextarea').value = ANIMATIONS[e.options[e.selectedIndex].value];
}

function onChangeSize() {
    document.getElementById("mytextarea").style.fontSize = document.getElementById("sizeopt").value;
}

function onCheckSpeed() {
    var checkedValue = document.getElementById("speedcheckbox").checked;
    duration = checkedValue ? 50 : 250;
    clearInterval(objInterval);
    objInterval = setInterval(generateAnimation, duration);
}