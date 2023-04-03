import EventEmitter from 'events'

const emitter = new EventEmitter()

emitter.on('result', info => console.log(`result: `, info))

emitter.on('add', (num1, num2) => {
    let isNumber = typeof num1 === 'number' && typeof num2 === 'number'
    
    if (isNumber) {
        emitter.emit('result', num1 + num2)
    } else {
        throw new Error(`Передан неправильный тип данных`)
    }
})

emitter.emit('add', 3, 2)