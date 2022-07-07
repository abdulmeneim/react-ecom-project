import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getallusers from '../redux/action/UserAction'

function User(props) {
    let { allUsers, GetallUsers } = props
    useEffect(() => {

        GetallUsers()

    }, [])
    return (
        <>
            {
                allUsers.map((User, i) => {
                    return (
                        <tr>
                            <td>{++i}</td>
                            <td>{User.id}</td>
                            <td>{User.name}</td>
                            <td>{User.email}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}
let stateToProps = (state) => {
    return {
        allUsers: state.usersList
    }
}
let dispatchToProps = (dispatch) => {
    return {
        GetallUsers: () => { dispatch(getallusers()) }
    }
}

export default connect(stateToProps, dispatchToProps)(User)