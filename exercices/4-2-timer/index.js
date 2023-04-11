
const [ ,, message, hour, min, sec] = process.argv

function setTimer (message, hour, min, sec) {
    const nums = [hour, min, sec].map(Number).includes(NaN)
    if (nums) throw new Error(`Передан неправильный тип данных`)

    let summaryTime = 0

    if (hour) summaryTime += hour * 60 * 60 * 1000
    if (min) summaryTime += min * 60 * 1000
    if (sec) summaryTime += sec * 1000

    setTimeout(() => {
        console.log(`completed ms: `, summaryTime)
        console.log(`with message: `, message)
    }, summaryTime)
}

setTimer(message, hour, min, sec)