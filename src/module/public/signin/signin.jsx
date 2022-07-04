import './signin.css'
import logo from './../../../assets/img/logo.png'
import { useRef, useState } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const Signin = () =>{
    const navigate = useNavigate()
    const {setToken} = useAuth()
    const {error , setError} = useState(false)
    const EmailRef = useRef(null)
    const PasswordRef = useRef(null)
    const HandleLogin = async (event) => {
        event.preventDefault()
        const data = {
            email: EmailRef.current.value,
            password: PasswordRef.current.value
        }
        const res = await fetch('https://reqres.in/api/login' , {
            method: 'POST',
            headers: {
                'Content-type' :'application/json'
            },
            body: JSON.stringify(data)
        })

        if(res.ok) {
            setToken(data)
            navigate('/')
        }else {
            setError(true)
        }
    }
    return (
        <div className='login container text-center'>
            <div className="d-flex heading align-items-center">
            <img className='login-logo cursor' src={logo} alt="logo" />
                <h3 className='cursor'>BoburBlog</h3>
            </div>
            <h1 className='login-heading'>Login</h1>
        <form className='login-form' onSubmit={HandleLogin} >
            <div className='alert'>email: eve.holt@reqres.in</div>
            <div className='block'>
            <input ref={EmailRef} className={`login-input ${error ? 'is-invalid' : ''}`} type="email" placeholder="Login" required/>
            </div>
            <div className='block'>
            <input ref={PasswordRef} className={`login-input ${error ? 'is-invalid' : ''}`} type="password" placeholder="Password" required/>
            </div>
            <button className='login-input login-btn' type='submit'>Submit</button>
        </form>
        </div>
    )
}