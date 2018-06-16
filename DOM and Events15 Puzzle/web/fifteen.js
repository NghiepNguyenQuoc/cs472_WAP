var empty_row = 3;
var empty_col = 3;
const PUZZLE_NUMBER = 4;
const TILE_SIZE = 100;
$(document).ready(function () {
    $('#puzzlearea div').each(function (i) {
        // calculate x and y for this piece
        var row = i % PUZZLE_NUMBER;
        var col = Math.floor(i / PUZZLE_NUMBER);
        var x = (row * TILE_SIZE);
        var y = (col * TILE_SIZE);

        // set basic style and background
        this.className = "puzzlepiece";
        this.id = "square_" + row + "_" + col;
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        this.style.backgroundImage = 'url("background.jpg")';
        this.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        this.x = x;
        this.y = y;
        $(this).click(function () {
            
        })
    });
});
