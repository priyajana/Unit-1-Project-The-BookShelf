import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css'

import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import About from "./components/About/About";
import NewBookForm from "./components/NewBookForm";
import Header from "./components/Header";
import BookCard from "./components/Bookcard/BookCard";
import { useState,useEffect } from "react";



const genres = ["Thriller", "Comedy", "Romance","Drama","Science","Dystopian","Psychology","Childrens"];
async function fetchBooks(subject)
  {
                
        //https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=8
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=12`)
         const data = await response.json();
          return data;
  }

        
export default function App() {


  const [bookList, setBookList] = useState(null);
  
    useEffect(()=>{
        fetchBooks(genres[0]).then(data=>{ setBookList(data);});
       
      
    },[]);
   
    bookList && console.log(bookList.items.length);

  return (
    <>
      
      <div className="App">
        <Router>
              <Header/>
                       <Routes>
                              {/* Setting the path to display the Home component */}
                              <Route path="/" element={<Home bookList ={bookList} setBookList={setBookList} fetchBooks={fetchBooks} genres={genres}/>} />
                              <Route path="/genre/:genre" element={<Home bookList ={bookList} setBookList={setBookList} fetchBooks={fetchBooks} genres={genres}/>} />
                              <Route path="/About" element={<About/>} />
                              <Route path="/NewBookForm" element={<NewBookForm/>} />
                              <Route path="/details/:id" element={<BookCard bookDetails={bookList}/>} />
                      </Routes>
                <Footer/>
        </Router>
        
    
      </div>    
    </>
  )
}


