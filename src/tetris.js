let tetris = {};

// Test - 1 
// Test - 2.1

// Variable to store current coordinates
tetris.origin = {row: 2, col: 5};
tetris.currentShape = 'I';
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

//Filling the cells
tetris.fillCells = function(coordinates, fillColor) {
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

    // Moving origin
    if (direction === 'right') {
        this.origin.col++;
    } else if (direction === 'left') {
        this.origin.col--;
    } 

    this.currentCoordinates = this.shapeToCoordinates(this.currentShape, this.origin);

    if (this.ifReverse()) {
        if (direction === 'right') {
            this.origin.col--;
        } else if (direction === 'left') {
            this.origin.col++
        }
    }

    this.currentCoordinates = this.shapeToCoordinates(this.currentShape, this.origin);
    
    this.fillCells(this.currentCoordinates, 'red');

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
        if (this.ifReverse()) {
            this.currentShape = lastShape;
        }
    }

    this.currentCoordinates = this.shapeToCoordinates(this.currentShape, this.origin);
    this.fillCells(this.currentCoordinates, 'red');
}

// Moving shapes down (adding gravity)
tetris.drop = function() {
    let reverse = false;

    this.fillCells(this.currentCoordinates, '');
    this.origin.row++;

    for (let i = 0; i < this.currentCoordinates.length; i++) {
        this.currentCoordinates[i].row++;
        if (this.ifReverse()) {   
                reverse = true;
        }
    }

    if (reverse) {
        for (let i = 0; i < this.currentCoordinates.length; i++) {
            this.currentCoordinates[i].row--;
        }
        this.origin.row--;
    }

    this.fillCells(this.currentCoordinates, 'red');

    if (reverse) {
        this.fillCells(this.currentCoordinates, 'RED');
        this.emptyFullRow();
        this.spawn();
    }
}

// If we need to reverse the shape (when shape reach the bottom/reach other shape)
tetris.ifReverse = function() {
    for (let i = 0; i < this.currentCoordinates.length; i++) {
        let row = this.currentCoordinates[i].row;
        let col = this.currentCoordinates[i].col;
        let $coor = $('.'+row).find('#'+col);

        if ($coor.length === 0 || $coor.attr('bgcolor') === 'RED') {
            return true;
        }
    }
    return false;
}

// Empty the full row
tetris.emptyFullRow = function() {
    let drops = 0; // store the number of full rows

    for (let i = 21; i >= 0; i--) { // scan rows from the bottom to the top
        let rowIsFull = true;

        for (let j = 0; j < 10; j++) { // scan columns from left to right
            let $coor = $('.'+i).find('#'+j);

            if ($coor.attr('bgcolor') !== 'RED') {
                rowIsFull = false;
            }

            if (drops > 0) {
                let $newCoor = $('.'+ (i + drops)).find('#'+j); // referencing the cell lower by the number of rows stored in drops
                $newCoor.attr('bgcolor', $coor.attr('bgcolor')); 
            }
        }

        if (rowIsFull) {
            drops++;
        }
    }
}

// Spawning a random shape
tetris.spawn = function() {
    let random = Math.floor(Math.random() * 7);
    let shapeArray = ['L', 'J', 'I', 'O', 'S', 'T', 'Z'];

    this.currentShape = shapeArray[random];
    this.origin = {row: 2, col: 5};
    this.currentCoordinates = this.shapeToCoordinates(this.currentShape, this.origin);
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
        } else if (e.keyCode === 40) {
            tetris.drop();
        }
    })

    let gravity = setInterval(function() {
        tetris.drop();
    }, 500);
    
})
