
export const arrayMethodGiven = [
    {map : `method is used to create a new array by applying a function to each element of the original array. This method doesn't modify the original array but instead returns a new array with the results of the function applied to each element.`},
    {filter : `method is used to create a new array with all elements that pass the test implemented by the provided function. It doesn't change the original array; instead, it returns a new array containing only the elements for which the provided function returns true.`},
    {find : ` method is used to return the first element in an array that satisfies a provided testing function. It searches the array from the beginning and stops at the first occurrence of an element that meets the condition specified by the provided function. If no such element is found, it returns undefined.`},
    {slice : ` method is used to extract a portion of an array and return it as a new array, without modifying the original array. This method takes two parameters: start and end, where start is the index at which to begin extraction (inclusive) and end is the index at which to end extraction (exclusive). The original array remains unchanged.`},
    {splice : `method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. Unlike the slice() method, which returns a new array containing the extracted elements, splice() directly modifies the original array.`}
]

export const arrayMethods: string[] = [
    'map','filter','find','slice','splice','some','findIndex','pop','push','shift','unshift'
  ]