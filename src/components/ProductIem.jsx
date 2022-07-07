import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux"
import { addtocart } from '../redux/action/ProductAction';


function ProductIem(props) {
    let { id, price, title, image, description, category, rating } = props.item
    let add = props.add
    let addToCart = () => {
        add(props.item)
    }
    return (
        <>
            <Card className='col-3 bg-dark p-0 ' style={{}}>

                <Card.Img variant="top" style={{ height: "250px" }} src={image} />
                <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "start" }} >
                    <Card.Title style={{ minHeight: "50px", textAlign: "center", padding: "0.5rem 0.25rem" }}>{title} </Card.Title>
                    <Card.Text style={{ flexGrow: "1" }}>
                        {description}
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }} >

                        <Button style={{}} variant="primary" onClick={addToCart} >Add to cart {price} $   </Button>


                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
let mapDispatchToProps = (Dispatch) => {
    return {
        add: (item) => { console.log(item); return Dispatch({ type: "add-to-cart", payload: item }) },

    }
}
export default connect(null, mapDispatchToProps)(ProductIem)
