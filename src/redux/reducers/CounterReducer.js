export function CounterReducer(state = { count: 0 }, action) {
    if (action.type === "inc") {

        return { count: state.count + 1 }
    } else if (action.type === "dec") {
        return { count: state.count - 1 }

    }
    return state
}