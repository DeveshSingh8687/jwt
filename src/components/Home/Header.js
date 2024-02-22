import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header(props) {
   const {isLoggedIn,setIsloggedIn} = props
   console.log(isLoggedIn);
  return (
    <div>
        <div className='heading'>
            <h1>ERP</h1>
        </div>
        <div className='inline'>
            <ul className='lists'>
                <li><Link to='/'>Home</Link></li> &nbsp;
                <li><Link to='/about'>About</Link></li> &nbsp;
                <li><Link to='/contact'>Contact</Link></li> &nbsp;
                <li><Link to='/career'>Career</Link></li> &nbsp;
                {/* <li onClick={()=>setIsloggedIn(!isLoggedIn)}>{!isLoggedIn?'Login':'Logout'}</li> */}
                <li>
                    <button onClick={()=>setIsloggedIn(!isLoggedIn)}>{!isLoggedIn?'Login':'Logout'}</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header