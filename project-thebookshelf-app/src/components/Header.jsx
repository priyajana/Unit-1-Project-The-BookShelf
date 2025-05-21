import { Link } from "react-router-dom"

export default function Header(){
    
    
    
    
    return(
            <header className="header">
                
                    <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/NewBook">Request a new book</Link></li>                                
                    </ul>
               
            </header>
    )
}