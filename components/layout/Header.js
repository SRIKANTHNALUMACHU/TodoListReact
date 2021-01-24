import React from 'react';
import {Link} from 'react-router-dom'
function Header(){
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={listStyle} to="/">Home</Link>|<Link style={listStyle} to="/about">About</Link>
        </header>
    )
}
const headerStyle={
   background:'#333',
   color:'#fff',
   textAlign:'center',
   padding:'10px'

}
const listStyle={
    color:"#fff",
    textDecoration:"none"
}
export default Header;