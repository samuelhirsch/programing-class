import React from 'react'
import { NavLink, Outlet } from 'react-router'

export default function Header() {
    return (
        <>
            <header id='header'>
                <h1>Your best real estate app</h1>
                <nav>
                    <NavLink to="/">Home</NavLink> |
                    <NavLink to="/Buy">Buy a home</NavLink>|
                    <NavLink to="/sell">Sell a home</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    )
}
