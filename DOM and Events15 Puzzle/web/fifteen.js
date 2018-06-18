/*
Make the fifteen puzzle pieces appear in the correct positions without any background behind them.
 Make the correct parts of the background show through behind each tile.
 Write the code that moves a tile when it is clicked from its current location to the empty square's location.
Don't worry initially about whether the clicked tile is next to the empty square.
 Write code to determine whether a square can move or not (whether it neighbors the empty square).
Implement the highlight when the user's mouse hovers over tiles that can be moved. You must keep track of
where the empty square is at all times.
 Write the shuffling algorithm. We suggest first implementing the code to perform a single random move; that
is, randomly picking one square that neighbors the empty square and moving that square to the empty spot.
    Get it to do this one time when Shuffle is clicked, then work on doing it many times in a loop.
*/

let emptyRow = 300;
let emptyCol = 300;
const PUZZLE_NUMBER = 4;
const TILE_SIZE = 100;
$(document).ready(function () {
    $('#puzzlearea div').each(function (i) {
        // calculate x and y for this piece
        let row = i % PUZZLE_NUMBER;
        let col = Math.floor(i / PUZZLE_NUMBER);
        let x = (row * TILE_SIZE);
        let y = (col * TILE_SIZE);

        // set basic style and background
        this.className = "puzzlepiece";
        this.id = "square_" + row + "_" + col;
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        this.style.backgroundImage = 'url("background.jpg")';
        this.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        $(this).click(function () {
            let curLeft = $(this).position().left;
            let curTop = $(this).position().top;
            if (curLeft === emptyRow) {
                if (Math.abs(emptyCol - curTop) === TILE_SIZE) {
                    if (emptyCol === curTop + TILE_SIZE) {
                        $(this).animate({top: curTop + TILE_SIZE});
                    }
                    else {
                        $(this).animate({top: curTop - TILE_SIZE});
                    }
                    emptyCol = curTop;
                }
            }
            else if (curTop === emptyCol) {
                if (Math.abs(emptyRow - curLeft) === TILE_SIZE) {
                    if (emptyRow === curLeft + TILE_SIZE) {
                        $(this).animate({left: curLeft + TILE_SIZE});
                    } else {
                        $(this).animate({left: curLeft - TILE_SIZE});
                    }
                    emptyRow = curLeft;
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

        let canMove = function (object) {
            let curLeft = object.position().left;
            let curTop = object.position().top;
            if (curLeft === emptyRow || curTop === emptyCol) {
                if (Math.abs(emptyCol - curTop) === TILE_SIZE
                    || Math.abs(emptyRow - curLeft) === TILE_SIZE) {
                    return true;
                }
            }
            return false;
        };
    });

    /*When the Shuffle button is clicked, the tiles of the puzzle are randomized.
    * every loop in 10 miliseconds
    * shuffle in 1 second
    * */
    $('#shufflebutton').click(function () {0
        const timeout = 1000;
        const timeShuffle = 10;
        let timer = setInterval(shuffle, timeShuffle);
        setTimeout(function () {
            clearTimeout(timer);
        }, timeout);
    });

    /*choosing a random neighbor of the blank square
    * */
    let shuffle = function () {
        let arrItem = [];
        // above the blank square
        if (emptyRow - TILE_SIZE >= 0) {
            let rowIdx = (emptyRow - TILE_SIZE) / TILE_SIZE;
            arrItem.push("#square_" + rowIdx + "_" + (emptyCol / TILE_SIZE));
        }
        // below the blank square
        if (emptyRow + TILE_SIZE < TILE_SIZE * PUZZLE_NUMBER) {
            let rowIdx = (emptyRow + TILE_SIZE) / TILE_SIZE;
            arrItem.push("#square_" + rowIdx + "_" + (emptyCol / TILE_SIZE));
        }

        // left of the blank square
        if (emptyCol - TILE_SIZE >= 0) {
            let colIdx = (emptyCol - TILE_SIZE) / TILE_SIZE;
            arrItem.push("#square_" + (emptyRow / TILE_SIZE) + "_" + colIdx);
        }

        // right of the blank square
        if (emptyCol + TILE_SIZE < TILE_SIZE * PUZZLE_NUMBER) {
            let colIdx = (emptyCol + TILE_SIZE) / TILE_SIZE;
            arrItem.push("#square_" + (emptyRow / TILE_SIZE) + "_" + colIdx);
        }

        // random select neighbor of the blank square
        let randomIndex = Math.floor(Math.random() * arrItem.size());
        let tLeft = $(arrItem[randomIndex]).position().left;
        let tTop = $(arrItem[randomIndex]).position().top;

        // move it to the blank square position
        $(arrItem[randomIndex]).css({"left": emptyRow, "top": emptyCol});

        // keep tracking the blank square
        emptyCol = tTop;
        emptyRow = tLeft;
    };
});

