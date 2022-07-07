import React, { useState } from 'react'
import { CounterContext } from './Countercontext'

export default function CounterContextprovider(props) {
    let [count, setcount] = useState(0)
    let inc = () => {
        setcount(count + 1)
    }
    let dec = () => {
        setcount(count - 1)
    }
    return (
        <CounterContext.Provider value={{ count, inc, dec }}>
            {props.children}
        </CounterContext.Provider>)
}
