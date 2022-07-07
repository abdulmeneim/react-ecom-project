import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import MyForm from './Form'
import Info from './Info'

export default function Home() {
    let [allInfo, setinfo] = useState([])
    function getinfo(data) {

        if (!allInfo.some((el, i) => { return el.email === data.email || el.name === data.name })) {
            setinfo([...allInfo, data])
        } else {
            alert("user data is already used")
        }

    }
    useEffect(() => {
    })
    return (
        <>
            <MyForm getinfo={getinfo}></MyForm><div className='container alert alert-info my-3'>
                <Table style={{ textAlign: "center" }} striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>PassWord</th>
                        </tr>
                    </thead>
                    <tbody>{allInfo.map((item, i) => {
                        return <Info key={i} i={i} name={item.name} email={item.email} pass={item.pass}></Info>
                    })}

                    </tbody>
                </Table>
            </div>
        </>
    )
}
