import React from 'react'
import "../styles/Header.css"
import logo from "../assets/image/logo.png"

const Header = () => {
  return (
    <div className='header'>
       <img className="logo" src={logo} />
        <div className="heading">
            Ai Image Text Extractor
        </div>
    </div>
  )
}
export default Header;


