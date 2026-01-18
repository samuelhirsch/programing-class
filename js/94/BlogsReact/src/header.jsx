import React from 'react'
import './header.css'
import { Outlet,Link} from 'react-router'
export default function Header(props) {
    const { headerId,h2text,button } = props
    return (
        <>
            <header id={headerId}>
                <h1>My Blogs</h1>
                <h2 >{h2text}</h2>
                {button&& <Link to="/"><button>Home Page</button></Link>}
            </header>
           <Outlet/>
        </>
    )
}
