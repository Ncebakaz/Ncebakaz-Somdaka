import React from 'react'
import {Outlet, NavLink} from 'react-router-dom'

export default function HostLayout (){
    return(
        <div>
          <nav className='host-nav'>
            <NavLink 
               to='host'
            >
            Dashboard
            </NavLink>
            <NavLink 
              to='reviews'
            >
            Reviews
            </NavLink>
            <NavLink 
                to='income'>
            Income
            </NavLink>
          </nav>
          <Outlet />
        </div>
    )
}
