
function findthematrix(row, col){
    let mat= Array.from({length: row},()=> new Array(col).fill(0));
    for(let i=0; i<row; i++){
        for( let j=0; j<col; j++){
            mat[i][j]=Math.floor(Math.random()*10);
        }
    }
    return mat;
}
function printmatrix(mat){
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
    return mat;
}
function maxmatrix(row,col){
    let mat
}
let row=10;
let col=5;
let mat=findthematrix(row, col);
printmatrix(mat);



function calculatemaximum(mat){
    for (let i=0; i<mat.length; i++){
        let maxvalue = mat[i][0];
        for(let j=0; j<mat[0].length; j++){
            if(maxvalue<mat[i][j])
                maxvalue=mat[i][j];
        }
        console.log("the maximum value in row "+(i+1)+" is "+maxvalue);
    }
}
calculatemaximum(mat)
