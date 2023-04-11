import EventEmitter from 'events'
const emitter = new EventEmitter()

const [ ,, num1, num2, operation ] = process.argv
const operations = { add: 'add', mul: 'mul', sep: 'sep' }

emitter.on('calculate', (num1, num2, operation) => {
    const nums = [num1, num2].map(Number)
    if (nums.includes(NaN) || !operations[operation]) throw new Error(`Передан неправильный тип данных или неверно указана операция`)
    
    const res = nums.reduce((acc, item) => {
        if (operations.add === operation) return acc + item
        if (operations.mul === operation) return acc * item
        if (operations.sep === operation) return acc / item
    })

    emitter.emit('result', res)
})

emitter.on('result', res => console.log(`result: `, res))
emitter.emit('calculate', num1, num2, operation)