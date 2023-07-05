import React, { useState } from 'react'
import "./Login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setLoginUser }) {
    const navigation = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        // console.log(e.target);
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    // const login=()=>{
    //     axios.post("http://localhost:9002/login",user)
    //     .then(res=>console.log(res))
    // }
    const login = () => {
        axios.post("http://localhost:9002/login", {
            email: user.email,
            password: user.password
        })
            .then(res => {
                // console.log(res.data.message);
                alert(res.data.message);
                // console.log(res.data.user);
                setLoginUser(res.data.user);
                navigation('/')
            })
            .catch(err => {
                console.log(err);
            });
    };





    return (
        <>
            <div className="body">
                <div className='login'>
                    {/* {console.log("User",user)} */}
                    <h1>Login</h1>
                    <input type="text" placeholder='Enter your email' name="email" value={user.email} onChange={handleChange} />
                    <input type="password" placeholder='Enter your password' name="password" value={user.password} onChange={handleChange} />
                    <div className='buttnn' onClick={login}>Login</div>
                    <div>or</div>
                    <div className='buttnn' onClick={() => navigation("/register")} >Register</div>
                </div>
            </div>
        </>
    )
}

export default Login
