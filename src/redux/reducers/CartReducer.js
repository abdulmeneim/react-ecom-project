export function Cart(state = [], action) {
    if (action.type === "add-to-cart") {

        console.log("added");
        console.log(state);
        return state.concat(action.payload)
    } else if (action.type === "load-caart-item") {
        return state
    }
    else if (action.type === "remove-item-from-cart") {
        let newstat = state.filter((item) => {
            return item.id !== action.payload.id
        })
        return newstat
    }
    return state

}