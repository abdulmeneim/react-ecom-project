import React from 'react'
export default function Info(props) {
    return (

        <tr>
            <td>{props.i}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.pass}</td>
        </tr>
    )
}
