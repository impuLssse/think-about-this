

function setTimer (message, hour, min, sec) {
    //  если в строке кроме цифр есть любой другой тип данных, то он отдаст мне NaN
    let nums = [hour, min, sec].map(Number).includes(NaN)
    if (nums) throw new Error(`Передан неправильный тип данных`)

    //  теперь можно безопасно делать расчеты
    if (hour) hour = hour * 60 * 60 * 1000
    if (min) min = min * 60 * 1000
    if (sec) sec = sec * 1000

    let summaryTime = [hour, min, sec].filter(Boolean).reduce((acc, num) => acc * num)

    setTimeout(() => {
        console.log(`completed: `, summaryTime + 'ms')
        console.log(`with message: `, message)
    }, summaryTime)
}

setTimer(process.argv[2], process.argv[3], process.argv[4], process.argv[5])