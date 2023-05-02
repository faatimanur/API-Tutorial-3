import React, { useState } from 'react'
import http from '../../axios'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const register =(e)=>{
        e.preventDefault()
        http.post('/register/',{
            username: username,
            password: password,
            password2: password2
        }).then(res=>{
            console.log(res);
            if (res.status === 201) {
                alert('Xatolik mavjud emas!')
            }
        }).catch((err)=>{
            console.log(err.response.status);
            if (err.response.status === 400) {
                alert('Xatolik mavjud!')
            }
        })
    }

  return (
    <div className='container'>
        <div className="row mt-3">
            <div className="col-md-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h1>Register</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <input type="text" onChange={(e)=>setUsername(e.target.value)} className='form-control my-2' placeholder='Username...' />
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control my-2' placeholder='Password...' />
                            <input type="password" onChange={(e)=>setPassword2(e.target.value)} className='form-control my-2' placeholder='Confirm password...'/>
                            <button onClick={register} className='btn btn-success form-control'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
