import React, { useState } from 'react'
import { filter, find, findIndex, iterateMap, reduce, slice, some, splice } from './helperFunctions'



type PracticeArrayMethodsProps = {
    method:  string
}
function PracticeArrayMethods({method}: PracticeArrayMethodsProps) {
    const [arrayElements, setArrayElements] = useState('')
    const [exampleArray, setExampleArray] = useState<string[] | undefined>([])
    const [findElement,setFindElement] = useState<string | undefined>('')
    const [condition, setCondition] = useState<string>('')
    const [index, setIndex] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [elementsToSplice, setElementsToSplice] = useState<string>('')
    const [isPresent, setIsPresent] = useState<boolean | null>()
    // const [reducedNumber, setReducedNumber] = useState<number>(0)
    const elements: string[] = arrayElements.split(',')
    return (
        <div>
           {/* 1. For Map  */}
            { method === 'map'  &&
            <>
            <h3>Please enter numbers for array elements with comma separated</h3>
            <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
            <button onClick={() =>setExampleArray(iterateMap(arrayElements))}>MAP</button>

            <div style={{ display: "flex", flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                <h2>Result : </h2>
                {
                    exampleArray?.map((items) => {
                        return <div key={items} >
                            <h3> {items} , </h3>
                        </div>
                    }
                    )
                }</div>
                </>
            }

            {/*2.  Filter */}

            {method === 'filter' &&
                <>
                    <h3>Please enter numbers for array elements with comma separated</h3>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
                    <input placeholder='Enter Condition' onChange={(e) => setCondition(e.target.value)}></input>

                    <button onClick={() =>setExampleArray(filter(arrayElements, condition))}>Filter</button>

                    <div style={{ display: "flex", flexDirection: 'row', gap: 2, alignItems: 'center' }}>

                        <h2>Result : </h2>
                        {
                            exampleArray?.map((items) => {
                                return <div key={items} >
                                    <h3> {items} , </h3>
                                </div>
                            }
                            )
                        }
                    </div>
                </>
            }

             {/* Find */}
            {method === 'find' &&
                <>
                    <h3>Please enter numbers for array elements with comma separated</h3>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
                    <input placeholder='Enter Condition' onChange={(e) => setCondition(e.target.value)}></input>

                    <button onClick={() =>setFindElement(find(arrayElements, condition))}>Find</button>

                    <div style={{ display: "flex", flexDirection: 'row', gap: 2, alignItems: 'center' }}>

                        <h2>Result : </h2>
                        {
                            findElement
                        }
                    </div>
                </>
            }

           {/* Slice */}

            {method === 'slice' &&
                <>
                    <h3>Please enter numbers for array elements with comma separated</h3>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
                    <input placeholder='Enter Comma separated Indices' onChange={(e) => setCondition(e.target.value)}></input>

                    <button onClick={() =>setExampleArray(slice(arrayElements, condition))}>Slice</button>

                    <div style={{ display: "flex", flexDirection: 'row', gap: 2, alignItems: 'center' }}>

                        <h2>Result : </h2>
                        {
                            exampleArray?.map((items) => {
                                return <div key={items} >
                                    <h3> {items} , </h3>
                                </div>
                            }
                            )
                        }
                    </div>
                </>
            }
           
           {/* Splice */}

            {method === 'splice' &&
                <>
                    <h3>Please enter comma separated numbers for array elements </h3>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
                    <h3>Enter Index number from where you want to remove elements</h3>
                    <input placeholder='Enter Index' onChange={(e) => setIndex(e.target.value)}></input>
                    <button onClick={() => setExampleArray(splice(arrayElements, index, number, elementsToSplice))} disabled={number !== ''}>Splice</button>

                    <h3>Enter a number, from Choosen index you want to remove elements</h3>
                    <input placeholder='Enter Number' onChange={(e) => setNumber(e.target.value)} ></input>
                    <button onClick={() => setExampleArray(splice(arrayElements, index, number, elementsToSplice))} disabled={elementsToSplice !== ''}>Splice</button>

                    <h3>Enter a elements, you want to add</h3>
                    <input placeholder='Enter Elements' onChange={(e) => setElementsToSplice(e.target.value)}></input>
                    <button onClick={() => setExampleArray(splice(arrayElements, index, number, elementsToSplice))}>Splice</button>

                    <div style={{ display: "flex", flexDirection: 'row', gap: 2, alignItems: 'center' }}>

                        <h2>Result : </h2>
                        {
                            exampleArray?.map((items) => {
                                return <div key={items} >
                                    <h3> {items} , </h3>
                                </div>
                            }
                            )
                        }
                    </div>
                </>
            }

            {/* some */}

            {method === 'some' &&
                <>
                    <h3>Please enter numbers for array elements with comma separated</h3>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
                    <input placeholder='Enter number you want to search' onChange={(e) => setCondition(e.target.value)}></input>

                    <button onClick={() =>setIsPresent(some(arrayElements, condition))}>Some</button>

                    <div style={{ display: "flex", flexDirection: 'row', gap: 2, alignItems: 'center' }}>

                        <h2>Result : </h2>
                        
                          <h3 style={{color: isPresent ? 'green' : 'red'}}> {isPresent?.toString().toUpperCase()} </h3>
                        
                        
                    </div>
                </>
            }

           {/* findIndex */}
            {method === 'findIndex' &&
                <>
                    <h3>Please enter numbers for array elements with comma separated</h3>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
                    <input placeholder='Enter number you want to search its index' onChange={(e) => setNumber(e.target.value)}></input>

                    <button onClick={() => setIndex(findIndex(arrayElements, number))}>findIndex</button>

                    <div style={{ display: "flex", flexDirection: 'row', gap: 2, alignItems: 'center' }}>

                        <h2>Result : </h2>

                        <h3 style={{ color: index !== '-1' ? 'green' : 'red' }}> {index.toUpperCase()} </h3>


                    </div>
                </>
            }

            {/* from */}
            {/* <div>
                <h3>const arrayLike = &quot;{" 0 : 'a', 1: 'b', 2: 'c', length: 3 "}&quot;</h3>
                 
               <h3>
                    Using Array.from to convert array-like object to array ---- comment
                    const newArray = Array.from(arrayLike);
                    console.log(newArray); // Output: [&apos;a&apos;, &apos;b&apos;, &apos;c&apos;]
                    </h3>

            </div> */}

            {/* reduce */}

            {method === 'reduce' &&
                <>
                    <h3>Please enter numbers for array elements with comma separated</h3>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
                    {/* <input placeholder='Enter number you want to search its index' onChange={(e) => setNumber(e.target.value)}></input> */}
                    <button onClick={() => setNumber(reduce(arrayElements, 'sum').toString())}>Add all elements using reduce method</button><br></br>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input>
                    <button onClick={() =>  setNumber(reduce(arrayElements, 'substract').toString())}>Substract all elements using reduce method</button><br></br>
                    <input placeholder='please enter numbers' onChange={(e) => setArrayElements((e.target.value))}></input> 
                    <button onClick={() =>  setNumber(reduce(arrayElements, 'multiply').toString())}>Multiply all elements using reduce method</button>
                    

                    <div style={{ display: "flex", flexDirection: 'row', gap: 2, alignItems: 'center' }}>

                        <h2>Result : </h2>

                        <h3 style={{ color: index !== '-1' ? 'green' : 'red' }}> {number.toUpperCase()} </h3>


                    </div>
                </>
            }

        </div>
    )
}

export default PracticeArrayMethods