import { add } from './add.js'
import { mul } from './multiply.js'
import { sep } from './separation.js'

const [ ,, num1, num2, operation ] = process.argv
const operations = { add, mul, sep }

function start (num1, num2, operation) {
    let isNumber = [num1, num2].map(Number).includes(NaN)
    if (isNumber || !operation) throw new Error(`Передан неправильный тип данных или неверно указана операция`)

    try {
        return operations[operation](num1, num2)
    } catch (e) {
        throw new Error('Unknown operation')
    }
}

console.log('result: ', start(num1, num2, operation))