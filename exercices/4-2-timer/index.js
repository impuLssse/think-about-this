
\
function setTimer () {
    let message = process.argv[2]
    let hour = process.argv[3]
    let min = process.argv[4]
    let sec = process.argv[5]
    
    let nums = [hour, min, sec].map(Number)
    if (nums.includes(NaN)) throw new Error(`Передан неправильный тип данных`)

    if (hour) hour = hour * 60 * 60 * 1000
    if (min) min = min * 60 * 1000
    if (sec) sec = sec * 1000

    let summaryTime = [hour, min, sec]
        .filter(Boolean)
        .reduce((acc, num) => acc * num)

    console.log(`summary: `, summaryTime)

    setTimeout(() => {
        console.log(message)
    }, summaryTime)
}

setTimer()