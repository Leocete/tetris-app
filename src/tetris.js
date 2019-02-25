let tetris = {};

tetris.currentCoordinates = [
    {row: 1, col: 1},
    {row: 1, col: 2},
    {row: 2, col: 1},
    {row: 2, col: 2}
]

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
tetris.fillCells = function (coordinates, fillColor) {
    for (let i = 0; i < coordinates.length; i++) {
        let row = coordinates[i].row;
        let col = coordinates[i].col;
        let $coor = $('.'+row).find('#'+col);
        $coor.attr('bgcolor', fillColor);
    }
}

// Moving the object right/left
tetris.move = function(direction) {
    this.fillCells(this.currentCoordinates, '');
    for (let i = 0; i < tetris.currentCoordinates.length; i++) {
        if (direction === 'right') {
            this.currentCoordinates[i].col++;
        } else if (direction === 'left') {
            this.currentCoordinates[i].col--;
        }
    }
    this.fillCells(this.currentCoordinates, 'red');
}

$(document).ready(function() {
    tetris.drawPlayField();
    tetris.fillCells(tetris.currentCoordinates, 'red');
    $(document).keydown(function(e) {
        console.log(e.keyCode);
    })
})

