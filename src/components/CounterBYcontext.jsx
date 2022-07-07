import React, { useContext } from 'react'
import { CounterContext } from '../context/Countercontext'

export default function CounterBYcontext() {
    let { count, inc, dec } = useContext(CounterContext)
    return (
        <>
            <div className='container px-5  '>
                <h1>counter by contex api </h1>

                <p >count is {count}</p>


                <button className="btn btn-primary mx-2" onClick={inc}>+</button>
                <button className="btn btn-danger" onClick={dec}>-</button>
            </div>        </>
    )
}
