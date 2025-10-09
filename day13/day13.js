let mat =[[30,40,50],[60,70,80]];
for(let i=0; i<mat.length; i++){
    let string=""
    for(let j=0;j<mat[0].length; j++){
        string+" "+mat[i][j];
         
    }
    console.log(string.trim(mat));
}

