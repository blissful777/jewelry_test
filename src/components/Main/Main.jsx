import React from 'react'
import '../Main/Main.css'
import { Link } from 'react-router-dom';
export default function Main() {
  return (
    <div className='main'>
      <ul className='main__list'>
        <li>
          <Link className='main__list_link' to="/">LOREM</Link>
        </li>
        <li>
          <Link className='main__list_link' to="/slider">IPSUM</Link>
        </li>
      </ul>
      
    </div>
  )
}