import { parentPort } from 'worker_threads'
import { calculate } from './index.js'

parentPort.on('message', value => {
    performance.mark('worker-start')
    calculate(value).then(res => parentPort.postMessage(res))
    performance.mark('worker-end')
})
