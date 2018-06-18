var empty_row = 300;
var empty_col = 300;
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

        $(this).click(function (keyframes, options) {
            var curLeft = $(this).position().left;
            var curTop = $(this).position().top;
            if (curLeft === empty_row) {
                if (Math.abs(empty_col - curTop) === TILE_SIZE) {
                    $(this).animate({top: (empty_col === curTop + TILE_SIZE ? curTop + TILE_SIZE : curTop - TILE_SIZE)}, options);
                    empty_col = curTop;
                }
            }
            else if (curTop === empty_col) {
                if (Math.abs(empty_row - curLeft) === TILE_SIZE) {
                    $(this).animate({left: (empty_row === curLeft + TILE_SIZE) ? curLeft + TILE_SIZE : curLeft - TILE_SIZE}, options);
                    empty_row = curLeft;
                }
            }
        });


        $(this).hover(function () {
                if (canMove($(this))) {
                    $(this).addClass("movablepiece");
                }
            },
            function () {
                $(this).removeClass("movablepiece");
            });

        var canMove = function (object) {
            var curLeft = object.position().left;
            var curTop = object.position().top;
            if (curLeft === empty_row || curTop === empty_col) {
                if (Math.abs(empty_col - curTop) === TILE_SIZE || Math.abs(empty_row - curLeft) === TILE_SIZE) {
                    return true;
                }
            }
            return false;
        };


    });

    $('#shufflebutton').click(function () {
        var arrItem = [];
        if (empty_row - TILE_SIZE >= 0) {
            arrItem.push("#square_" + ((empty_row - TILE_SIZE) / 100) + "_" + (empty_col / 100));
        }
        if (empty_row + TILE_SIZE < TILE_SIZE * PUZZLE_NUMBER) {
            arrItem.push("#square_" + ((empty_row + TILE_SIZE) / 100) + "_" + (empty_col / 100));
        }

        if (empty_col - TILE_SIZE >= 0) {
            arrItem.push("#square_" + ((empty_row / 100) + "_" + (empty_col - TILE_SIZE) / 100));
        }
        if (empty_col + TILE_SIZE < TILE_SIZE * PUZZLE_NUMBER) {
            arrItem.push("#square_" + ((empty_row / 100) + "_" + (empty_col + TILE_SIZE) / 100));
        }

        var randomIndex = Math.floor(Math.random() * arrItem.size());
        var tLeft = $(arrItem[randomIndex]).position().left;
        var tTop = $(arrItem[randomIndex]).position().top;
        console.log(arrItem[randomIndex]);
        $(arrItem[randomIndex]).css("left", empty_row);
        $(arrItem[randomIndex]).css("top", empty_col);
        $(arrItem[randomIndex]).id = "square_" + (empty_row / 100) + "_" + (empty_col / 100);
        empty_col = tTop;
        empty_row = tLeft;
        console.log(empty_col + "/" + empty_row);
    });
});

