import { useState } from "react";
import { Link } from "react-router-dom"

export default function Header(){
     const [menuOpen, setMenuOpen] = useState(false);
    
    
    
    return(
            <header className="header">
                
                    <ul className={`nav-links ${menuOpen? 'active':''}`}>
                    <li><Link className="headerlinks" key='home' to="/">Home</Link></li>
                    <li><Link className="headerlinks" key='about' to="/About">About</Link></li>
                    <li><Link className="headerlinks" key='newbook' to="/NewBookForm">Request a new book</Link></li>
                                                
                    </ul>
                    <Link  key="mybooks" to="/mybooks"><label className="mybooks">My Books</label></Link>
                <div className="menu-toggle" onClick={() =>setMenuOpen(!menuOpen) }>
                        &#9776;
                </div>
            </header>
    )
}