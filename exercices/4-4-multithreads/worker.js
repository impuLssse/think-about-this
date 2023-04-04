import { workerData } from 'worker_threads'

(() => {
    let nums = [ ...workerData.keys() ]
        .filter(num => num % 3 === 0)

    // console.log(nums)
})()

