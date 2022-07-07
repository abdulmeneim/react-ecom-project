import React from 'react'
import { useEffect } from 'react'
import { connect } from "react-redux"
import Mycartite from './Mycartite'
import ProductIem from './ProductIem'
function Mycart(props) {
    let load = props.load
    let items = props.cartItems
    console.log(props.cartItems);
    useEffect(() => {
        load()
    }, [])
    return (
        <>
            <div className='container my-2  '>
                <div className='row justify-content-center gap-2'>

                    {items.map((i) => {

                        return (
                            <Mycartite key={i.id} item={i} ></Mycartite>)
                    }
                    )
                    }
                </div>
            </div>
        </>)
}
let mapStateToProps = (state) => {
    return {
        cartItems: state.cartitems
    }
}
let mapDispatchToProps = (Dispatch) => {
    return {
        load: () => Dispatch({ type: "load-caart-item" }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Mycart)


