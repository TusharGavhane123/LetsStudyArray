
export const arrayMethodGiven = [
    {map : `method is used to create a new array by applying a function to each element of the original array. This method doesn't modify the original array but instead returns a new array with the results of the function applied to each element.`},
    {filter : `method is used to create a new array with all elements that pass the test implemented by the provided function. It doesn't change the original array; instead, it returns a new array containing only the elements for which the provided function returns true.`},
    {find : ` method is used to return the first element in an array that satisfies a provided testing function. It searches the array from the beginning and stops at the first occurrence of an element that meets the condition specified by the provided function. If no such element is found, it returns undefined.`},
    {slice : ` method is used to extract a portion of an array and return it as a new array, without modifying the original array. This method takes two parameters: start and end, where start is the index at which to begin extraction (inclusive) and end is the index at which to end extraction (exclusive). The original array remains unchanged.`},
    {splice : `method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. Unlike the slice() method, which returns a new array containing the extracted elements, splice() directly modifies the original array.`},
    {some : ' It is used to test whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.'},
    {findIndex : 'findIndex() is a method in JavaScript that is used to find the index of the first element in an array that satisfies a provided testing function. If no element satisfies the testing function, it returns -1'},
    {from : 'Array.from() is a static method available in JavaScript that creates a new, shallow-copied array instance from an array-like or iterable object'},
    {reduce : 'The reduce() method in JavaScript is used to reduce the array to a single value based on the callback function provided. It iterates through each element of the array and applies the callback function against an accumulator (initially provided) and each element of the array (from left to right), reducing it to a single value.'}
]

export const arrayMethods: string[] = [
    'map','filter','find','slice','splice','some','findIndex','from','reduce'
  ]