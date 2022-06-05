import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Navbar() {
  return (
    <NavbarContainer>
        <h1>
            <Link to="#">P Beam</Link>
        </h1>
        <ol>
            <li>
                <Link to="#">Favorite</Link>
            </li>
            <li>
                <Link to="#">Add House</Link>
            </li>
            <li>
                <Link to="#">Account</Link>
                <ol>
                    <li>
                        <Link to="#">Account Settings</Link>
                    </li>
                    <li>
                        <Link to="#">Upgrade To Seller</Link>
                    </li>
                </ol>
            </li>
        </ol>
        {/* Home page */}
        {/* Favorite */}
        {/* Add housing info for seller */}
        {/* Account Switch /  Show account status too */}
    </NavbarContainer>
  )
}

export default Navbar;
