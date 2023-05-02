import React, { useState } from 'react'
import http from '../../axios'
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login =(e)=>{
        e.preventDefault()
        http.post('/login/',{
            username: username,
            password: password
        }).then(res=>{
            console.log(res);
            if (res.status === 200) {
                alert('Xatolik mavjud emas!')
            }
        }).catch((err)=>{
           if (err.response.status === 403) {
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
                        <h1 className='text-center'>Login</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <input type="text" onChange={(e)=>setUsername(e.target.value)} className='form-control my-2' placeholder='Username...'/>
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control my-2' placeholder='Password...'/>
                            <button onClick={login} className='btn btn-success form-control'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
