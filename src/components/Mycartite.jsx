import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from "react-redux"


function Mycartite(props) {
    let [count, setCount] = useState(1)
    let [total, setTotal] = useState(props.item.price)
    let { id, price, title, image, description, category, rating } = props.item
    let removeF = props.remove
    let remove = () => {
        removeF(props.item)
    }
    let update = (e) => {
        console.log(e.target.value);
        setCount(e.target.value)

    }
    useEffect(() => {
        setTotal(price * count)
    }, [count])
    return (
        <>
            <div className="card mb-3 bg-dark" style={{ maxWidth: "540px" }}>
                <div className="row g-0" style={{ height: "100%" }}>
                    <div className="col-md-4 py-1" style={{ height: "100%" }} >
                        <img style={{ height: "100%" }} src={image} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "start" }} >
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"> {category} category </p>
                            <p className="card-text" style={{ flexGrow: "1" }}>{description} </p>
                            <p className="card-text" style={{ flexGrow: "1" }}><small className="text-muted">total price is  {total}</small></p>
                            <p className="card-text" style={{ flexGrow: "1" }}><input type="number" placeholder='quantity' min="1" value={count} onChange={update}></input>

                            </p>
                            <Button style={{}} variant="danger" onClick={remove}  >remove   </Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

let mapDispatchToProps = (Dispatch) => {
    return {
        remove: (item) => { console.log(item); return Dispatch({ type: "remove-item-from-cart", payload: item }) },

    }
}
export default connect(null, mapDispatchToProps)(Mycartite)
