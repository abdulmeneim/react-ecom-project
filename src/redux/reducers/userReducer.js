export function userReducer(state = [], action) {
    if (action.type === "Get-users-list") {
        return action.payload
    }
    return state
}