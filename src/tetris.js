let tetris = {};

// Variable to store current coordinates
tetris.origin = {row: 5, col:5};
tetris.currentShape = 'L';
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
            {row:origin.row,col:origin.col},
            {row:origin.row-1,col:origin.col},
            {row:origin.row+1,col:origin.col},
            {row:origin.row+1,col:origin.col+1}
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
    } else if (shape === 'S') {
		return [
            {row:origin.row,col:origin.col},
            {row:origin.row-1,col:origin.col},
            {row:origin.row,col:origin.col-1},
            {row:origin.row-1,col:origin.col+1}
        ];
	} else if (shape === 'T') {
		return [
            {row:origin.row,col:origin.col},
            {row:origin.row-1,col:origin.col},
            {row:origin.row,col:origin.col-1},
            {row:origin.row,col:origin.col+1}
        ];
	} else if (shape === 'Z') {
		return [
            {row:origin.row,col:origin.col},
            {row:origin.row-1,col:origin.col},
            {row:origin.row-1,col:origin.col-1},
            {row:origin.row,col:origin.col+1}
        ];
	} else if (shape ==='L90') {
        return [
            {row:origin.row,col:origin.col},
            {row:origin.row,col:origin.col+1},
            {row:origin.row,col:origin.col-1},
            {row:origin.row+1,col:origin.col-1}
        ]
    } else if (shape === 'L90') {
        return [
            {row:origin.row,col:origin.col},
            {row:origin.row,col:origin.col+1},
            {row:origin.row,col:origin.col-1},
            {row:origin.row+1,col:origin.col-1}
        ];
    } else if (shape === 'L180') {
        return [
            {row:origin.row,col:origin.col},
            {row:origin.row-1,col:origin.col},
            {row:origin.row+1,col:origin.col},
            {row:origin.row-1,col:origin.col-1}
        ];
    } else if (shape === 'L270') {
        return [
            {row:origin.row,col:origin.col},
            {row:origin.row,col:origin.col+1},
            {row:origin.row,col:origin.col-1},
            {row:origin.row-1,col:origin.col+1}
        ];
    } else if (shape === 'J90') { 
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row,col:origin.col-1},
              {row:origin.row,col:origin.col+1},
              {row:origin.row-1,col:origin.col-1}
            ];
      } else if (shape === 'J180') { 
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row-1,col:origin.col},
              {row:origin.row+1,col:origin.col},
              {row:origin.row-1,col:origin.col+1}
            ];
      } else if (shape === 'J270') { 
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row,col:origin.col-1},
              {row:origin.row,col:origin.col+1},
              {row:origin.row+1,col:origin.col+1}
            ];
      } else if (shape === 'I90') {
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row,col:origin.col-1},
              {row:origin.row,col:origin.col+1},
              {row:origin.row,col:origin.col+2}
            ];
      } else if (shape === 'S90') {
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row-1,col:origin.col},
              {row:origin.row-1,col:origin.col-1},
              {row:origin.row-2,col:origin.col-1}
            ];
      } else if (shape === 'Z90') {
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row-1,col:origin.col},
              {row:origin.row-1,col:origin.col+1},
              {row:origin.row-2,col:origin.col+1}
            ];
      } else if (shape === 'T90') {
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row-1,col:origin.col},
              {row:origin.row+1,col:origin.col},
              {row:origin.row,col:origin.col+1}
            ];
      } else if (shape === 'T180') {
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row+1,col:origin.col},
              {row:origin.row,col:origin.col-1},
              {row:origin.row,col:origin.col+1}
            ];
      } else if (shape === 'T270') {
          return [
              {row:origin.row,col:origin.col},
              {row:origin.row-1,col:origin.col},
              {row:origin.row+1,col:origin.col},
              {row:origin.row,col:origin.col-1}
            ];
      } 
}

// Moving the object right/left
tetris.move = function(direction) {
    let reverse = false;
    this.fillCells(this.currentCoordinates, '');

    for (let i = 0; i < this.currentCoordinates.length; i++) {
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
    // Сhanging our origin coordinates so we can rotate our shapes in any place
    if (direction === 'right') {
        this.origin.col++;
    } else if (direction === 'left') {
        this.origin.col--;
    } 

    this.fillCells(this.currentCoordinates, 'red');

    if (reverse && direction === 'left') {
        this.move('right');
    } else if (reverse && direction === 'right') {
        this.move('left');
    }
}
// Rotating our shapes
tetris.rotate = function() {
    let lastShape = this.currentShape;
    this.fillCells(this.currentCoordinates,'');

    if (this.currentShape === 'L') {
		this.currentShape = 'L90';
	} else if (this.currentShape === 'L90') {
		this.currentShape = 'L180';
	} else if (this.currentShape === 'L180') {
		this.currentShape = 'L270';
	} else if (this.currentShape === 'L270') {
		this.currentShape = 'L';
	} else if (this.currentShape === 'J') {
		this.currentShape = 'J90';
	} else if (this.currentShape === 'J90') {
		this.currentShape = 'J180';
	} else if (this.currentShape === 'J180') {
		this.currentShape = 'J270';
	} else if (this.currentShape === 'J270') {
		this.currentShape = 'J';
	} else if (this.currentShape === 'I') {
		this.currentShape = 'I90';
	} else if (this.currentShape === 'I90') {
		this.currentShape = 'I';
	} else if (this.currentShape === 'S') {
		this.currentShape = 'S90';
	} else if (this.currentShape === 'S90') {
		this.currentShape = 'S';
	} else if (this.currentShape === 'Z') {
		this.currentShape = 'Z90';
	} else if (this.currentShape === 'Z90') {
		this.currentShape = 'Z';
	} else if (this.currentShape === 'T') {
		this.currentShape = 'T90';
	} else if(this.currentShape === 'T90') {
		this.currentShape = 'T180';
	} else if (this.currentShape === 'T180') {
		this.currentShape = 'T270';
	} else if (this.currentShape === 'T270') {
		this.currentShape = 'T';
	}

    this.currentCoordinates = this.shapeToCoordinates(this.currentShape, this.origin);

    for (let i = 0; i < this.currentCoordinates.length; i++) {
        if (this.currentCoordinates[i].col > 9 || this.currentCoordinates[i].col < 0) {
            this.currentShape = lastShape;
        }
    }

    this.currentCoordinates = this.shapeToCoordinates(this.currentShape, this.origin);
    this.fillCells(this.currentCoordinates, 'red');
}

$(document).ready(function() {

    tetris.drawPlayField();
    tetris.currentCoordinates = tetris.shapeToCoordinates(tetris.currentShape, tetris.origin);
    tetris.fillCells(tetris.currentCoordinates, 'red');

    $(document).keydown(function(e) {
        if (e.keyCode === 39) {
            tetris.move('right');
        } else if (e.keyCode === 37) {
            tetris.move('left');
        } else if (e.keyCode === 38) {
            tetris.rotate();
        }
    })

})

