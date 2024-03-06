import { arrayMethodGiven } from "./constant"


const desc: { value: string } = { value: '' }
export const getArrayMethodDescription = (methodName: any) => {
    // use for of loop, if you want to exit from loop directly when condition gets satisfied
    for (const name of arrayMethodGiven) {
        if (methodName in name ) {
            desc.value = Object.values(name).toString()
        return desc.value
        }
    }
    return ""
}

export const iterateMap = (arrayElements: string) => {
    const elements: string[] = arrayElements.split(',')
    elements.map((items) => {
        console.log(`%c${items}`, 'color:green ; font-size: 16px;')
    })
    return elements
}

export const filter = (arrayElements : string, condition: string) => {
    const elements: string[] = arrayElements.split(',')
    const operator = condition[0]
    const initialCondition = condition.split(operator)
    const number = +initialCondition[1]
    let filteredNumber :string[] =[]
    if (operator === '>') {
         filteredNumber = elements.filter((item) => +item > number)
        return filteredNumber
    } else if (operator === '<') {
        filteredNumber = elements.filter((item) => +item < number)
        return filteredNumber
    } else if (operator === '%') {
        filteredNumber = elements.filter((item) => (+item % number == 0))
        return filteredNumber
    } else if (operator === '=') {
        filteredNumber = elements.filter((item) => +item == number)
        return filteredNumber
    }
    console.log(`%c${filteredNumber}`, 'color:green ; font-size: 16px;')
}

export  const find = (arrayElements : string, condition: string) => {
    const elements: string[] = arrayElements.split(',')
    const operator = condition[0]
    const initialCondition = condition.split(operator)
    const number = +initialCondition[1]
    let filteredNumber : string | undefined = ''
    if (operator === '>') {
         filteredNumber = elements.find((item) => +item > number)
         return filteredNumber
    } else if (operator === '<') {
        filteredNumber = elements.find((item) => +item < number)
        return filteredNumber
    } else if (operator === '%') {
        filteredNumber = elements.find((item) => (+item % number == 0))
        return filteredNumber
    } else if (operator === '=') {
        filteredNumber = elements.find((item) => +item == number)
        return filteredNumber
    }
    console.log(`%c${filteredNumber}`, 'color:green ; font-size: 16px;')
}

export const slice = (arrayElements : string, condition: string) => {
    const elements: string[] = arrayElements.split(',')
    const indixes = condition.split(',')
    const firstIndex = Number(indixes[0])
    const secondIndex = Number(indixes[1])
    const sampleArray = elements.slice(firstIndex, secondIndex)
    console.log(`%c${sampleArray}`, 'color:green ; font-size: 16px;')
    return sampleArray
}

export const splice = (arrayElements:string, index:string, number:string, elementsToSplice:string) => {
    let elements: string[] = arrayElements.split(',')
    if (index) {
        if (index && !number) {
            elements.splice(+index)
            console.log(`%c${elements}`, 'color:green ; font-size: 16px;')
            return elements
        } else if (index && number && !elementsToSplice) {
            elements.splice(+index, +number)
            console.log(`%c${elements}`, 'color:green ; font-size: 16px;')
            return elements
        } else if (index && number && elementsToSplice) {
            elements.splice(+index, +number, elementsToSplice)
            console.log(`%c${elements}`, 'color:green ; font-size: 16px;')
            return elements
        }
    }    
} 

export const some = (arrayElements: string, condition: string) => {
    let elements: string[] = arrayElements.split(',')
    const isNumberPresent: boolean = elements.some((number) => {
        return number === condition
    })
    if (isNumberPresent === true || isNumberPresent === false) {
        console.log(`%c${isNumberPresent}`, 'color: green ; font-size: 16px;')
        return isNumberPresent
    }
    else
        return null
}

export const findIndex = (arrayElements:string, number:string) => {
    let elements: string[] = arrayElements.split(',')
    const arrayIndex : number = elements.findIndex((itemNumber)=>{
        return itemNumber === number 
    })
    console.log(`%c${arrayIndex.toString()}`, 'color: green ; font-size: 16px;')
    return arrayIndex.toString()    
}

export const reduce = (arrayElements: string, operation: string) => {
    let elements: string[] = arrayElements.split(',')
    let numberArray: number[] = elements.map((num) => +num)
    let finalResult: number = 0
    if (operation === 'sum') {
        const sum = numberArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)
        finalResult = sum
        // return sum
    }
    if (operation === 'substract') {
        const substract = numberArray.reduce((accumulator, currentValue) => {

            return accumulator - currentValue
        })
        finalResult = substract
        // return substract
    }

    if (operation === 'multiply') {
        const multiply = numberArray.reduce((accumulator, currentValue) => {
            return accumulator * currentValue
        })
        finalResult = multiply
        // return multiply
    }
    console.log(`%c${finalResult}`, 'color: green ; font-size: 16px;')
    return finalResult
}