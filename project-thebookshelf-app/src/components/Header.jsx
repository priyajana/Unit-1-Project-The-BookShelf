import { useState } from "react";
import { Link } from "react-router-dom"

export default function Header(){
     const [menuOpen, setMenuOpen] = useState(false);
    
    
    
    return(
            <header className="header">
                
                    <ul className={`nav-links ${menuOpen? 'active':''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/NewBookForm">Request a new book</Link></li>                                
                    </ul>
                <div className="menu-toggle" onClick={() =>setMenuOpen(!menuOpen) }>
                        &#9776;
                </div>
            </header>
    )
}