import not from "node-notifier"


function setTimer (message, hour, min, sec) {
    let nums = [hour, min, sec].map(Number)
    if (nums.includes(NaN)) throw new Error(`Передан неправильный тип данных`)

    if (hour) hour = hour * 60 * 60 * 1000
    if (min) min = min * 60 * 1000
    if (sec) sec = sec * 1000

    let summaryTime = [hour, min, sec]
        .filter(Boolean)
        .reduce((acc, num) => acc * num)

    setTimeout(() => {
        not.notify({
            title: 'Timer',
            sound: true,
            type: 'info',
            message: `has expired with message: ${message}`,
        })

        console.log(`completed: `, summaryTime + 'ms')
    }, summaryTime)
}

setTimer(process.argv[2], process.argv[3], process.argv[4], process.argv[5])