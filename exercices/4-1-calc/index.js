import { add } from './add.js'
import { multiply } from './multiply.js'
import { separation } from './separation.js'

let nodePath = process.argv[0]
let appPath = process.argv[1]

let num1 = process.argv[2]
let num2 = process.argv[3]

let operation = process.argv[4]


switch (operation) {
    case 'add':
        let resAdd = add(num1, num2)
        console.log(`result: ${resAdd}`)
    break;

    case 'mul':
        let resMul = multiply(num1, num2)
        console.log(`result: ${resMul}`)
    break;

    case 'sep':
        let resSep = separation(num1, num2)
        console.log(`result: ${resSep}`)
    break;
}