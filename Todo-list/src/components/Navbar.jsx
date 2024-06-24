import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#162ec9] text-white">
        <div className="logo">
            <img className="w-[50px] rounded-full h-[50px] m-2"
              src="https://logos.flamingtext.com/City-Logos/Todo-Water-Logo.png" alt="" />
        </div>
        <ul className="flex gap-10 items-center my-2 mx-6">
            <li className="cursor-pointer hover:font-bold tarnsition-all duration-200">Home</li>
            <li className="cursor-pointer hover:font-bold tarnsition-all duration-200">Contact</li>
            <li className="cursor-pointer hover:font-bold tarnsition-all duration-200">Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
