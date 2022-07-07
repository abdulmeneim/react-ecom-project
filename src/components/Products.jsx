import React from 'react'
import { useEffect } from 'react'
import { connect } from "react-redux"
import ProductsAction, { addtocart } from '../redux/action/ProductAction'
import ProductIem from './ProductIem';
export function Products(props) {
    let { produsts, get } = props
    useEffect(() => {
        get()
    }, [])
    return (
        <>
            {
                console.log("sadasdad")
            }
            <div className='container-sm my-2  '>
                <div className='row justify-content-center gap-2'>

                    {produsts.map((i) => {

                        return (
                            <ProductIem key={i.id} item={i} ></ProductIem>)
                    }
                    )
                    }
                </div>
            </div>
        </>
    )
}
let mapStateToProps = (state) => {
    return {
        produsts: state.productList
    }
}
let mapDispatchToProps = (Dispatch) => {
    return {
        get: () => Dispatch(ProductsAction()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)