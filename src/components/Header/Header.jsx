import React from 'react'
import '../Header/Header.css'
import logo from '../image/logo (2).png'
import phone from '../image/Vector.png'
export default function Header() {
  return (
    <div className='header'>
<img className='header_logo' src={logo} alt="logo"/>
<a className='header_phone-number' href="/">+7 (495) 495-49-54</a>
<a className='header_phone-svg' href="/"><img src={phone} alt="pgone" /></a>
    </div>
  )
}
