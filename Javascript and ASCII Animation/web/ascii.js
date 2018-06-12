var duration = 250;
var objInterval;
var currentFrame = 0;
$("#startBtn").click(function () {
    objInterval = setInterval(generateAnimation, duration);
});

function generateAnimation() {
    var abc = $('#aminationopt').find(":selected").text();
    var arrAnimation = ANIMATIONS[abc].split("=====\n");
    if (currentFrame >= arrAnimation.length)
        currentFrame = 0;
    $('#mytextarea').val(arrAnimation[currentFrame++]);
}

$("#stopBtn").click(function () {
    alert("1234");
})
$('#aminationopt').on('change', function () {
    // alert("123121");

});
$('#sizeopt').on('change', function () {
    $("#mytextarea").css({'font-size': $(this).val()});
});

$("#speedcheckbox").change(function () {
    duration = this.checked ? 50 : 250
    clearInterval(objInterval);
    objInterval = setInterval(generateAnimation, duration)
});
//
// $("#aminationopt").change(function() {
//    alert($(this).val());
// });
//
// var conceptName = $('#aminationopt').find(":selected").text();
// alert(conceptName);