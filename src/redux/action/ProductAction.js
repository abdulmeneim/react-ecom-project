import axios from "axios"

function ProductsAction(params) {

    let pro = axios.get("https://fakestoreapi.com/products")
        .then((respnse) => {
            return respnse.data
        })
        .catch((err) => {
            console.log(err);
        })
    console.log(pro);
    return {
        type: "Get-product-list",
        payload: pro
    }
}
export function addtocart(item) {
    return {
        type: "add-to-cart",
        payload: item
    }
}
export default ProductsAction