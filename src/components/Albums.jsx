import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Placeholder, Table } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'

export default function Albums() {
    let [albums, setalbums] = useState([])
    let copy = []
    let { id } = useParams()


    async function getdata() {
        let all_albums = await axios.get("https://jsonplaceholder.typicode.com/albums")
        all_albums && setalbums(all_albums.data)
        copy = Array.from(albums)
        console.log(all_albums, " asd", albums);

    }

    useEffect(() => {
        console.log("did mount");
        getdata()
    }, [])

    function filter(e) {
        let key = e.target.value
        console.log(e);
        console.log("adsnajlsnsanaks");

        if (key === "") {
            getdata()
        } else if (e.nativeEvent.inputType === "deleteContentBackward") {
            console.log("delete", key, getdata());



        }
        else {
            let match = albums.filter((item, i) => {

                return item.title.includes(key) ? item : ""
            })
            setalbums(match)
        }
    }
    return (<>
        <input onChange={filter} type="text" style={{ display: "block", margin: "10px auto ", outline: "none", border: "none", borderRadius: "5px", padding: "10px", width: "50%" }} Placeholder="search for an album"></input>
        <div className='row '>

            {console.log("rendering")}
            <Table style={{ textAlign: "center", margin: "10px 0" }} striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Id</th>
                        <th>Album Id</th>
                        <th>Album Name</th>
                        <th>Album Details</th>
                    </tr>
                </thead>
                <tbody>{albums.map((item, i) => {
                    return (<tr>
                        <td>{++i}</td>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><NavLink to={`${item.id}/${item.userId}/${item.title}`} className="btn btn-light">Go to Details</NavLink></td>
                    </tr>)
                })}

                </tbody>
            </Table>

        </div >
    </>
    )
}
