import React from "react"
import { connect } from "react-redux"

function CounterByRedux(props) {
    let { count, inc, dec } = props

    return (
        <>
            <div className='container px-5  '>
                <h1>counter by Redux </h1>

                <p >count is {count}</p>


                <button className="btn btn-primary mx-2" onClick={inc}>+</button>
                <button className="btn btn-danger" onClick={dec}>-</button>
            </div>        </>
    )
}
let mapToProps = (state) => {
    return { count: state.counter.count }
}
let mapdispatchToProps = (dispatch) => {
    return {
        inc: () => { dispatch({ type: "inc" }) },
        dec: () => { dispatch({ type: "dec" }) }
    }

}
export default connect(mapToProps, mapdispatchToProps)(CounterByRedux) 