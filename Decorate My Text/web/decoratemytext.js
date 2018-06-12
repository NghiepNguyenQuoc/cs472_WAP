var myIncreaseFontSize;
var currentFontSize;

function biggerClick() {
    //alert("Hello, world!");
    //document.getElementById("textarea1").style.fontSize = "24pt";
    currentFontSize = (0.75) * parseInt($("#textarea1").css('font-size'));
    myIncreaseFontSize = setInterval(increaseFontSize, 500);
}

function increaseFontSize() {
    currentFontSize = currentFontSize + 2;
    $("#textarea1").css('font-size', currentFontSize + "pt")
}

function onCheckChange() {
    if (document.getElementById("bling").checked === true) {
        $("#textarea1").addClass("newstyle");
        $("body").css('background-image', 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")');
    } else {
        $("#textarea1").removeClass("newstyle");
        $("body").css('background-image', '');
    }
}

function fPigLatin() {
    var str = document.getElementById("textarea1").value;
    var src = str.trim().split(" ");
    var newstr = "";
    for (var i = 0; i < src.length; i++) {
        newstr += translatePigLatin(src[i]) + " ";
    }
    document.getElementById("textarea1").value = newstr;
}

function translatePigLatin(str) {
    return str.replace(/\b(\w)(\w+)\b/g, function (a, b, c) {
        if (/[A-Z]/.test(b)) {
            c = c.replace(/^\w/, function (x) {
                return x.toUpperCase()
            });
        }
        return c + b.toLowerCase() + (/[aeiou]/i.test(b) ? 'way' : 'ay');
    })
}


function fMalkovich() {
    var str = document.getElementById("textarea1").value;
    var src = str.trim().split(" ");
    var newstr = "";
    for (var i = 0; i < src.length; i++) {
        if (src[i].length >= 5) {
            newstr += "Malkovich ";
        } else {
            newstr += src[i] + " ";
        }
    }
    document.getElementById("textarea1").value = newstr;
}