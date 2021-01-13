import React from 'react'
import logo from '../../images/logo.png'

const Navbar = ()=>(
    <div className="w-100 bg-blue-400 flex justify-center items-center" style={{height: "90px"}}>
        <div className="flex items-center w-4/5">
            <img src={logo} alt="logo" className="h-28"/>
        </div>
    </div>
)
export default Navbar