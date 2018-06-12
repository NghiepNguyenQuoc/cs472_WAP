"use strict";
const NORMAL_SPEED = 250;
const TURBO_SPEED = 50;
let duration = NORMAL_SPEED;
let objInterval;
let currentFrame = 0;
let presetAnimation;

/**
 * start animation event
 */
function onStart() {
    if (presetAnimation !== "changeanimation") {
        presetAnimation = document.getElementById('mytextarea').value;
    }
    objInterval = setInterval(generateAnimation, duration);
    preAnimation(true);
}

/**
 * generate animation from text.
 */
function generateAnimation() {
    let e = document.getElementById("aminationopt");
    let abc = e.options[e.selectedIndex].value;
    let arrAnimation = ANIMATIONS[abc].split("=====\n");
    if (presetAnimation !== null && presetAnimation !== "changeanimation") {
        arrAnimation.unshift(presetAnimation);
    }
    if (currentFrame >= arrAnimation.length) {
        currentFrame = 0;
    }
    document.getElementById('mytextarea').value = arrAnimation[currentFrame++];
}

/**
 * disable/enable UI
 * @param {boolean} isStart The second number.
 */
function preAnimation(isStart) {
    document.getElementById('startBtn').disabled = isStart;
    document.getElementById('aminationopt').disabled = isStart;
    document.getElementById('stopBtn').disabled = !isStart;
}

/**
 * stop button click event
 */
function onStop() {
    preAnimation(false);
    clearInterval(objInterval);
    if (presetAnimation !== null && presetAnimation !== "" && presetAnimation !== "changeanimation") {
        document.getElementById('mytextarea').value = presetAnimation;
    }
}

/**
 * change size event
 */
function onChangeSize() {
    document.getElementById("mytextarea").style.fontSize = document.getElementById("sizeopt").value;
}

/**
 * stop button click event
 */
function onCheckSpeed() {
    let checkedValue = document.getElementById("speedcheckbox").checked;
    duration = checkedValue ? TURBO_SPEED : NORMAL_SPEED;
    clearInterval(objInterval);
    objInterval = setInterval(generateAnimation, duration);
}