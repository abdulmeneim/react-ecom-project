import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';



export default function MyForm(props) {
    let [validname, setvalidname] = useState(true)
    let [validemail, setvalidemail] = useState(true)
    let [validpass, setvalidpass] = useState(true)
    let formref = useRef()
    let getinfo = props.getinfo
    let submit = (e) => {
        e.preventDefault();
        if (validname && validemail && validpass) {
            getinfo({ name: formref.current[0].value, email: formref.current[1].value, pass: formref.current[2].value })
        } else {
            alert(" missing ingo ")
        }
    }
    let validateName = (e) => {
        console.log(e.target.value);

        var nameregx = new RegExp("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$");
        setvalidname(nameregx.test(e.target.value))
    }
    let validateEmail = (e) => {
        console.log(e.target.value);
        let emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        setvalidemail(emailRegex.test(e.target.value))
    }
    let validatePass = (e) => {

        var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        setvalidpass(passRegex.test(e.target.value))
    }
    return (
        <div className="container"  >
            <Form style={{ background: "#21263f", marginTop: "10px", padding: "10px 10px" }} ref={formref} onSubmit={submit}>

                <Form.Group key="name" className="m-2" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={validateName} key={"fdhfg"} type="text " placeholder="Enter your name" required />
                    {validname || <p className="bg-danger   p-1 mt-1" style={{ borderRadius: "4px", color: "white" }}>
                        please provide a valid user name     </p>
                    }
                </Form.Group>
                <Form.Group key="email" className="m-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control key={"asdsd"} onChange={validateEmail} type="email" placeholder="Enter email" required />
                    {validemail || <p className="bg-danger   p-1 mt-1" style={{ borderRadius: "4px", color: "white" }}>
                        please provide a valid Email     </p>
                    }
                </Form.Group>

                <Form.Group className="m-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={validatePass} placeholder="Password" required />
                    {validpass || <p className="bg-danger   p-1 mt-1" style={{ borderRadius: "4px", color: "white" }}>
                        password must The string must contain at least 1 lowercase alphabetical character
                        and contain at least 1 uppercase alphabetical character
                        and at least 1 numeric character
                        and at least one special character from [!@#$%^*]     </p>
                    }
                </Form.Group>


                <Button type="submit" style={{ display: "block", width: "50%", background: "#3f51b5", margin: "20px auto", padding: "10px 0", border: "none", color: "#000", fontWeight: "bolder" }} >
                    Add User
                </Button>
            </Form>
        </div >
    )
}
