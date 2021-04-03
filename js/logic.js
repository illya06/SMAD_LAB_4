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