const mat =[
    [1,2,3,4], 
    [5,6,7,8]
];
for(let i=0; i < mat.length; i++){
    let string=""
for (let j=0; j < mat[0].length;j++){
    string +" "+mat[i][j];
}    
console.log(string);
}

// 2 nd matrix sum
function generatematrix(row,col){
    let mat = Array.from({length: row },()=> Array(col).fill(0));
    for(let i=0; i<row; i++){
        for(let j=0; j<col;j++){
            mat[i][j]=Math.floor(Math.rondom()*100+2);
        }
    }
    return mat;
}
function printmatix(mat){
    for(let i=0; i<mat.length; i++){
        console.log(mat[i]);
    }
    function sumofmatrixes(mat1,mat2){
        let sumofmatrixe =Array.from({length:mat1.length}),()=>Array(mat1[0].length.fill(0));
        for(let i=0; i<mat1.length;i++){
            for(let i=0; i<mat1[0].length; j++)
                sumofmatrix[i][j]=mat[i][j]+mat2[i][j];
        }
    }
       return sumofmatrixe;
}