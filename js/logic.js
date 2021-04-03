function x(numbers) {
    let res = 0;
    for (let i = 0; i <= 7; i++)
        res += numbers[i]

    return res / (numbers.length)
}

function xGeneral(data) {
    let res = 0;
    for (let i = 0; i <= 3; i++)
        res += +x(data[i])

    return res / data.length
}

function qGeneral(data) {
    let x = xGeneral(data)
    let res = 0

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 8; j++) {
            res += Math.pow(data[i][j]-x,2)
        }

    return res
}

function qGroup(data){
    let xG = xGeneral(data);
    let res =0;

    for(let i=0;i<4;i++)
        res+=Math.pow(x(data[i])-xG, 2)
    
    return res*8;
}