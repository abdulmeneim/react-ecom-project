import React from 'react'
import { Table } from 'react-bootstrap'
import CounterContextprovider from '../context/CounterContextprovider'
import CounterBYcontext from './CounterBYcontext'
import CounterByRedux from './CounterByRedux'
import User from './User'
export default function Aboutus() {

    return (
        <>

            <div className='container alert alert-info my-4'>
                <CounterContextprovider>
                    <CounterBYcontext></CounterBYcontext>
                </CounterContextprovider>
            </div>
            <div className='container alert alert-dark my-4'>

                <CounterByRedux ></CounterByRedux>
            </div>
            <div className='container alert alert-light my-4'>
                <Table style={{ textAlign: "center", margin: "10px 0" }} striped bordered hover variant="dark">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User id</th>
                            <th>user name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <User ></User>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
