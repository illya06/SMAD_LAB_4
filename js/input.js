
var data = {};

function getInput() {
    for (i = 1; i <= 4; i++) {
        let row = [];
        for (j = 1; j <= 8; j++) {
            let val = document.getElementById(`${i*10+j}`).value;
            row.push(+val);
        }
        data[`${i}`] = row;
    }
}