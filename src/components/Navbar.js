import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Navbar() {
  return (
    <NavbarContainer>
        <h1>
            <Link to="/">P Beam</Link>
        </h1>
        <ol>
            <li>
                <Link to="/favorite">Favorite</Link>
            </li>
            <li>
                <Link to="/listing">Add House</Link>
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

const NavbarContainer = styled.header`
    display: flex;
    flex-direction: row;
    height: 60px;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    /* > li, > ol{
        color: blue;
    } */
    > ol{
        display: flex;
        flex-direction: row;
        height: 100%;
        > li{
            height: 100%;
            position: relative;
            :hover{
                color: white;
                background-color: rgb(89 92 96);
            }
            a{
                height: 100%;
                display: flex;
                align-items: center;
                padding: 0 16px;
            }
            :hover > ol{
                display: block;
                position: absolute;
                top: 60px;
                right: 0;
            }
            > ol{
                display: none;
                background-color: rgb(147 152 160);
                color: #fff;
                z-index: 10;
                li{
                    height: 50px;
                    padding: 0 20px;
                    :hover{
                        background-color: rgb(89 92 96);
                    }
                    a{
                        white-space: nowrap;
                    }
                }
            }
        }
    }
`
