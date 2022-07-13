import React from 'react'
import '../Info/Info.css'
import julia from '../image/julia.png'
import taisia from '../image/taisiia.png'
export default function Info() {
  return (
    <div className='info'>
      <h1 className='info_title'>LOREM IPSUM DOLOR sit AMET</h1>
      <div className='info__block-julia'>
        <div className='info__content'>
          <h3 className='info__content_title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p className='info__content_text'>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className='info__content_text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum/ Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>
        <img className='info_julia-image' src={julia} alt='julia' />
      </div>
      <div className='info__block-taisiia'>
        <div className='info__content'>
          <h3 className='info__content_title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p className='info__content_text'>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className='info__content_text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum/ Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>
        <img className='info_taisiia-image' src={taisia} alt='taisiia' />
      </div>
    </div>
  )
}
