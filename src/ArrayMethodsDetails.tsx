import React from 'react'
import { getArrayMethodDescription } from './helperFunctions'
import PracticeArrayMethods from './PracticeArrayMethods'

type ArrayMethodsDetailsProps = {
    methodName : string
}

const ArrayMethodsDetails = ({methodName}:ArrayMethodsDetailsProps) => {
    const methodDescription: string = getArrayMethodDescription(methodName)

    return (
        <div style={{ height: '70vh', width: '100%', border: '1px solid black', padding: 20, marginTop: 20 }}>
            <div style={{ display: 'flex' }}>
                <h2>Description:</h2>
                <h4>{methodDescription}</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '40%', height: '60vh', border: '1px solid black' }}>
                   {/* For Demo Example */}
                </div>
                <div style={{ width: '60%', height: '60vh', border: '1px solid black' }}>
                    <PracticeArrayMethods method={methodName}/>
                </div>
            </div>
        </div>
    )
}

export default ArrayMethodsDetails