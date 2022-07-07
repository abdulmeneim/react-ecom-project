import axios from "axios"

async function getallusers(params) {

    let allsuers = await axios.get("https://jsonplaceholder.typicode.com/users")
    return {
        type: "Get-users-list",
        payload: allsuers.data
    }
}
export default getallusers