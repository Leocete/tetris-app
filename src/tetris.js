let tetris = {};

// Drawing the grid (playfield)
tetris.drawPlayField = function() {
    for (let row = 0; row < 22; row++) {
        $('#playfield').append('<tr class="'+row+'"></tr>');
        for (let col = 0; col < 10; col++) {
            $('tr.'+row).append('<td id="'+col+'"></td>');
        }
    }
}

tetris.currentCoordinates = [
    {row: 1, col: 1},
    {row: 1, col: 2},
    {row: 2, col: 1},
    {row: 2, col: 2}
]

//Filling the cells
tetris.fillCells = function (coordinates, fillColor) {
    for (let i = 0; i < coordinates.length; i++) {
        let row = coordinates[i].row;
        let col = coordinates[i].col;
        let $coor = $('.'+row).find('#'+col);
        $coor.attr('bgcolor', fillColor);
    }
}


$(document).ready(function(){
    tetris.drawPlayField();
    tetris.fillCells(tetris.currentCoordinates, 'red');
})
