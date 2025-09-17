function main() {
    let A = [[1, 3, 4], [5, 6, 7]];
    let B = [[11, 12, 13, 20], [14, 15, 16, 18], [22, 8, 9, 44]];

    let output = matrixmultiplication(A, B);
    printmatrix(output);
}

main();

function candomultiplication(a, b) {
    return a[0].length === b.length;
}

function matrixmultiplication(a, b) {
    if (candomultiplication(a, b)) {
        let row = a.length;
        let col = b[0].length;
        let colROW = b.length;

        let output = Array.from({ length: row }, () => new Array(col).fill(0));

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let sum = 0;
                for (let k = 0; k < colROW; k++) {
                    sum += a[i][k] * b[k][j];
                }
                output[i][j] = sum;
            }
        }
        return output;
    } else {
        console.log("Cannot do the multiplication, because column ");
        return 0;
    }
}

function printmatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
}

