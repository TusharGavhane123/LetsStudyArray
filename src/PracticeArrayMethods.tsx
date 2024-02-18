import React, { useState } from 'react'
import { filter, find, iterateMap, slice, splice } from './helperFunctions'



type PracticeArrayMethodsProps = {
    method:  string
}
function PracticeArrayMethods({method}: PracticeArrayMethodsProps) {
    const [arrayElements, setArrayElements] = useState('')
    const [exampleArray, setExampleArray] = useState<string[] | undefined>([])
    const [findElement,setFindElement] = useState<string | undefined>('')
    const [condition, setCondition] = useState<string>('')
    const [index, setIndex] = useState('')
    const [number, setNumber] = useState('')
    const [elementsToSplice, setElementsToSplice] = useState('')

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
        </div>
    )
}

export default PracticeArrayMethods