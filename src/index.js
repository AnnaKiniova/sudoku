module.exports = function solveSudoku(matrix) {
  let allowed = [];
  for (let h=0; h<9; h++){
    for (let v=0; v<9; v++) {
      if (matrix[h][v] == 0)
        {allowed=[];
        for (let i=1; i<=9; i++) {
          if (checkHor(h, v, i) == true)
            if (checkVert(h, v, i) == true)
              if (checkGrid(h,v, i) == true) {
                allowed.push(i);
              }
        }
        if (allowed.length == 0)
          return false;

        for (let n=0; n<allowed.length; n++) {
        // console.log("i="+h+"; j="+v+" => "+allowed[n]);
          let solution = matrix;
          solution[h][v] = allowed[n];
          //print(solution);
          let checkSolution=solveSudoku(solution);
          if (checkSolution != false) { 
            return checkSolution;
            }
          solution[h][v]=0;
        }
        return false;
        }
    } 
  }
  // Return array for self-check
  function print(matrix) {
    for (let h=0; h<9; h++){
    let s="";
      for (let v=0; v<9; v++) {
      s+=matrix[h][v]+" ";
      }
      console.log(s);
    }
    console.log("---------------");
  }

  function checkHor (colHor, rowHor, valHor) {       
    let resultHor=true;
    for (rowHor=0; rowHor<9; rowHor++) 
      if (matrix[colHor][rowHor] == valHor) {
        resultHor=false;
        break;
      }
    return resultHor;
  }
  
  function checkVert (colVert, rowVert, valVert) {
    let resultVert=true;
    for (colVert=0; colVert<9; colVert++)         
      if (matrix[colVert][rowVert] == valVert)
      {resultVert=false;
      break;
      }
      return resultVert;
  }
   
  function checkGrid (col, row, val) {
    let rowTop = (Math.floor((col)/3)*3);
    let colLeft = (Math.floor((row)/3)*3);
    let resultGrid=true;
      for (let sqVert=rowTop; sqVert<rowTop+3; sqVert++)
      {
        for (let sqHor=colLeft; sqHor<colLeft+3; sqHor++)
          if (matrix[sqVert][sqHor] == val)
          {resultGrid=false;
          break;
          }
      }
        return resultGrid;
  }
  //print (matrix);
  return (matrix);
  }
      
