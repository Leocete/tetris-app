let tetris = {};

// Variable to store current coordinates
tetris.origin = {row: 5, col:5};
tetris.currentShape = 'O';
tetris.currentCoordinates;

// Drawing the grid (playfield)
tetris.drawPlayField = function() {
    for (let row = 0; row < 22; row++) {
        $('#playfield').append('<tr class="'+row+'"></tr>');
        for (let col = 0; col < 10; col++) {
            $('tr.'+row).append('<td id="'+col+'"></td>');
        }
    }
}

//Filling the cells
tetris.fillCells = function(coordinates, fillColor) {
    for (let i = 0; i < coordinates.length; i++) {
        let row = coordinates[i].row;
        let col = coordinates[i].col;
        let $coor = $('.'+row).find('#'+col);
        $coor.attr('bgcolor', fillColor);
    }
}

// Drawing different shapes
tetris.shapeToCoordinates = function(shape, origin) {
    if (shape === 'L') {
        return [
            {row: origin.row, col: origin.col},
            {row: origin.row - 1, col: origin.col},
            {row: origin.row + 1, col: origin.col},
            {row: origin.row + 1, col: origin.col + 1}
        ];
    } else if (shape === 'I') {
        return [
            {row: origin.row, col: origin.col},
            {row: origin.row - 1, col: origin.col},
            {row: origin.row - 2, col: origin.col},
            {row: origin.row + 1, col: origin.col},
        ]
    } else if (shape === 'J') {
        return [
            {row: origin.row, col: origin.col},
            {row: origin.row - 1, col: origin.col},
            {row: origin.row + 1, col: origin.col},
            {row: origin.row + 1, col: origin.col - 1}
        ];
    } else if (shape === 'O') {
        return [
            {row: origin.row, col: origin.col},
            {row: origin.row + 1, col: origin.col},
            {row: origin.row, col: origin.col + 1},
            {row: origin.row + 1, col: origin.col + 1}
        ];
    }
}

// Moving the object right/left
tetris.move = function(direction) {
    let reverse = false;
    this.fillCells(this.currentCoordinates, '');

    for (let i = 0; i < tetris.currentCoordinates.length; i++) {
        if (direction === 'right') {
            this.currentCoordinates[i].col++;
            if (this.currentCoordinates[i].col > 9) {
                reverse = true;
            }
        } else if (direction === 'left') {
            this.currentCoordinates[i].col--;
            if (this.currentCoordinates[i].col < 0) {
                reverse = true;
            }
        }
    }
    this.fillCells(this.currentCoordinates, 'red');

    if (reverse && direction === 'left') {
        this.move('right');
    } else if (reverse && direction === 'right') {
        this.move('left');
    }
}

$(document).ready(function() {

    tetris.drawPlayField();
    tetris.currentCoordinates = tetris.shapeToCoordinates(tetris.currentShape, tetris.origin);
    tetris.fillCells(tetris.currentCoordinates, 'red');

    $(document).keydown(function(e) {
        console.log(e.keyCode);
        if (e.keyCode === 39) {
            tetris.move('right');
        } else if (e.keyCode === 37) {
            tetris.move('left');
        }
    })

})

