import React, { } from 'react'
import { useParams } from 'react-router-dom'

export default function AlbumDetails() {
    let { id, uid, title } = useParams()
    // let [user, setUser] = useState({})
    // async function getdetails() {
    //     let theuser = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     setUser(theuser.data)
    // }
    // useEffect(() => {
    //     getdetails()
    //     console.log(user);

    // }, [])

    return (
        <div className='alert alert-info mt-2 '>{`the User  ${uid} Created Album ${title}  by ID ${id} `}</div>
    )
}
