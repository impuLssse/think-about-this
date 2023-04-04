import { Worker } from 'worker_threads'

const cores = 2

function createWorker (path, data) {
    return new Worker(path, {
        workerData: data
    })
}

function calculte (num) {
    if (isNaN(num)) throw new Error(`Передан неправильный тип данных`)

    //  создаем массив и разбиваем число на кол-во ядер
    let nums = [ ...Array(num).keys() ]


    let part1 = nums.indexOf()

    console.log(halfNum)
    console.log(part1)
    //  создаем поток и отдаем половину
    let worker = createWorker('./worker.js', nums)
}

calculte(1000)