export function ProductReducer(state = [], action) {
    if (action.type === "Get-product-list") {
        return action.payload
    }
    return state
}