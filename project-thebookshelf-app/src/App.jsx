import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css'

import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import NewBookForm from "./components/NewBookForm";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
function App() {
  

  return (
    <>
      
      <div className="App">
        <Router>
              <Header/>
                       <Routes>
                              {/* Setting the path to display the Home component */}
                              <Route path="/" element={<Home/>} />
                              <Route path="/About" element={<About/>} />
                              <Route path="/NewBookForm" element={<NewBookForm/>} />
                              <Route path="/details/1" element={<BookCard/>} />
                      </Routes>
                <Footer/>
        </Router>
        
    
      </div>    
    </>
  )
}

export default App
