import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [navbar, setNavbar] = useState([
        {name: 'Register', path:'/'},
        {name: 'Login', path:'/login'}
    ])
  return (
    <div className='container-fluid'>
        <div className="row bg-danger">
            <div className="col-md-12 mt-4">
                <ul>
                {
                    navbar.map((item, index)=>{
                        return <li key={index}>
                            <NavLink to={item.path}  className="text-white text-decoration-none">{item.name}</NavLink>
                        </li>
                    })
                }
                </ul>
            </div>
        </div>
    </div>
  )
}
