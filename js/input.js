
var data = [
    [0.35, 0.35, 0.30, 0.36, 0.31, 0.36, 0.34, 0.34],
    [0.38, 0.37, 0.38, 0.36, 0.40, 0.36, 0.48, 0.32],
    [0.32, 0.31, 0.36, 0.33, 0.40, 0.42, 0.43, 0.41],
    [0.35, 0.38, 0.42, 0.47, 0.60, 0.91, 0.89, 0.59]
];

function getInput() {
    if (document.getElementById('11').value != '')
        for (i = 1; i <= 4; i++) {
            let row = [];
            for (j = 1; j <= 8; j++) {
                let val = document.getElementById(`${i * 10 + j}`).value;
                row.push(+val);
            }
            data.push(row);
        }
}