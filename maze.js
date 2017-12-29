var maxRows = 6;
var maxColumns = 6;

var fromRow = 0;
var fromColumn = 0;
var toRow = 5;
var toColumn = 4;
var startStep = 1;

var array = [
  [0,-1,0, 0, 0,0],
  [0,-1,0, 0, 0,0],
  [0,-1,0, 0, 0,0],
  [0,-1,0,-1,-1,0],
  [0, 0,0,-1, 0,0],
  [0, 0,0,-1, 0,0]
];

console.log(array);
function illegal (fromrow, fromcolumn) {
  if (fromrow < 0) {
    return true;
  }
  if (fromcolumn < 0) {
    return true;
  }
  if (fromrow >= maxRows) {
    return true;
  }
  if (fromcolumn >= maxColumns) {
    return true;
  }
  if (array[fromrow][fromcolumn] == -1) {
    //its a wall
    return true;
  }
  return false;
}

function search(fromrow, fromcolumn, torow, tocolumn, steps=startStep) {
  console.log(steps);

  if (illegal(fromrow,fromcolumn)) {
    return;
  }
  if (array[fromrow][fromcolumn] > 0 && array[fromrow][fromcolumn] <= steps) {
    //square already visited by shorter or equal path
    return;
  }
  array[fromrow][fromcolumn] = steps;

  //we will search in the 4 directions up, down, left, right and one of these will have a value tht is one less
  search(fromrow-1,fromcolumn, torow, tocolumn, steps+1);
  search(fromrow+1,fromcolumn, torow, tocolumn, steps+1);
  search(fromrow,fromcolumn-1, torow, tocolumn, steps+1);
  search(fromrow,fromcolumn+1, torow, tocolumn, steps+1);
};

search(fromRow,fromColumn,toRow,toColumn);
console.log(array);

function check(row,column,val) { //returns true if array[row][column] has val
  if (!illegal(row,column) && array[row][column] == val) {
    return true;
  }
  return false
}

function pathMarker (torow, tocolumn) {
  if (illegal(torow, tocolumn)) {
    return;
  }
  var valto0 = array[torow][tocolumn]
  while (valto0 >0) {
    array[torow][tocolumn] = 0;
    --valto0; //same as valto0 = valto0 -1
    var offsets = [
      [-1,0],
      [1,0],
      [0,-1],
      [0,1]
    ];
    //search the 4 nieghboors directions
    for ( i=0; i<4; ++i) {
      if (check(torow+offsets[i][0],tocolumn+offsets[i][1],valto0)) {
        torow += offsets[i][0];
        tocolumn += offsets[i][1];
        break;
      }
    }
    // the for loop above does the lines below in a more elegant way
    // //we search north
    // if(check(torow-1, tocolumn, valto0)) {
    //   --torow;
    //   continue;
    // }
    // //we search south
    // if(check(torow+1, tocolumn, valto0)) {
    //   ++torow;
    //   continue;
    // }
    // //we search west
    // if(check(torow, tocolumn-1, valto0)) {
    //   --tocolumn;
    //   continue;
    // }
    // //we search east
    // if(check(torow, tocolumn+1, valto0)) {
    //   ++tocolumn;
    //   continue;
    // }
  }
}

pathMarker(toRow, toColumn);
console.log(array);

document.getElementById('addWord').innerHTML = 'here';
document.getElementById('test1').onclick

function showArray() {
  
}

// function showNumber(a) {
//   console.log(a);
// }
//
// function adder(a,b) {
//   showNumber(a);
//
//   return(a+b)
// }

//remember you can call a function in a function!
