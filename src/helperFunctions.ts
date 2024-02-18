import { arrayMethodGiven } from "./constant"


const desc: { value: string } = { value: '' }
export const getArrayMethodDescription = (methodName: any) => {
    arrayMethodGiven.map(name => {
        if (methodName in name) {
            desc.value = Object.values(name).toString()
        }
    })
    return desc.value
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