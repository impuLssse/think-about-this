import { cpus } from 'os'
import { Worker } from 'worker_threads'

const cores = cpus().length

function numberToPartsArray (num, divider) {
    let nums = [ ...Array(num).keys() ]
    let start = nums.indexOf(0)
    let middle = nums.indexOf(num / divider)

    let arrs = { parts: [ nums.slice(start, middle), nums.slice(middle) ] }
    return arrs
}

export function calculate (array) {
    return new Promise(resolve => {
        let counter = 0
        performance.mark('start')

        for (let num of array) {
            if (num % 3 === 0) counter++
        }

        performance.mark('end')
        resolve(counter)
    })
}

function createWorker (array) {
    return new Promise(resolve => {
        let worker = new Worker('./worker.js')
        worker.postMessage(array)

        worker.on('message', value => {
            worker.terminate().then(resolve(value))
        })
    })
}

function start (num) {
    if (isNaN(num)) throw new Error(`Передан неправильный тип данных`)
    let { parts } = numberToPartsArray(num, 4)

    return Promise.all([
        calculate(parts[0]),
        createWorker(parts[1]),
    ])
        .then(values => values.reduce((acc, item) => acc + item))
}

start(1000).then(res => console.log(`finished: `, res))


const main = performance.measure('main', 'start', 'end')
console.log(`ms: `, main.duration.toFixed(4))