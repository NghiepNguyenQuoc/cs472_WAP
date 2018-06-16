$(document).ready(function () {
    $('#puzzlearea div').each(function (i) {
        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        this.className = "puzzlepiece";
        this.id= "puzzlepiece";
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        this.style.backgroundImage = 'url("background.jpg")';
        this.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        this.x = x;
        this.y = y;
    });
});
