var duration = 250;
var objInterval;
var currentFrame = 0;
var isStart = false;
$("#startBtn").click(function () {
    objInterval = setInterval(generateAnimation, duration);
    isStart = true;
    $("#stopBtn").prop('disabled', !isStart);
    $("#aminationopt").prop('disabled', isStart);
    $("#isStart").prop('disabled', !isStart);
});

$("#stopBtn").click(function () {
    clearInterval(objInterval);
    isStart = false;
    $("#isStart").prop('disabled', isStart);
    $("#stopBtn").prop('disabled', !isStart);
    $("#aminationopt").prop('disabled', isStart);
})

function generateAnimation() {
    var abc = $('#aminationopt').find(":selected").text();
    var arrAnimation = ANIMATIONS[abc].split("=====\n");
    if (currentFrame >= arrAnimation.length)
        currentFrame = 0;
    $('#mytextarea').val(arrAnimation[currentFrame++]);
}

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