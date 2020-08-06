let mat = [
    [ 1,  2,  3,  4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9]
]
let up = 0
let down = mat.length - 1;
let left = 0
let right = mat[0].length - 1;
let output = [];


while (true) {
    if (left > right) break;
    for (let i = left; i < right; i++)
        output.push(mat[up][i])
    up++;
    if (up > down) break;
    for (let i = up; i < down; i++)
        output.push(mat[i][right]);    
    right--;
    if (left > right) break;
    for(let i = right; i >= left; i--)
        output.push(mat[down][i]);
    down--;
    if (up > down) break;
    for(let i = down; i >= up; i--)
        output.push(mat[i][left]);
    left++;
}

console.log(output);