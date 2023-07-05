import React, { useState } from 'react'
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigation = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        // console.log(e.target);
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", {
                name: user.name,
                email: user.email,
                password: user.password,
                reEnterPassword: user.reEnterPassword
            })
                .then(res => {
                    //  console.log(res)
                    alert(res.data.message)
                    navigation("/login")
                })
            // alert("posted")
        } else {
            alert("invited input")
        }
    }

    return (
        <>
            <div className='body'>
                <div className='register'>
                    {/* {console.log("User",user)} */}
                    <h1>Register</h1>
                    <input type="text" name="name" value={user.name} placeholder='Enter your Name' onChange={handleChange} />
                    <input type="text" name="email" value={user.email} placeholder='Enter your email' onChange={handleChange} />
                    <input type="password" name="password" value={user.password} placeholder='Enter your password' onChange={handleChange} />
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter your repassword' onChange={handleChange} />
                    <div className='buttnn' onClick={register}>Register</div>
                    <div>or</div>
                    <div className='buttnn' onClick={() => navigation("/login")}>Login</div>
                </div>
            </div>
        </>
    )
}

export default Register
