import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css'

import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import About from "./components/About/About";
import NewBookForm from "./components/NewBookForm";
import Header from "./components/Header";
import BookCard from "./components/Bookcard/BookCard";
import { useState,useEffect } from "react";
import Rentals from "./components/Rentals/Rentals";



const genres = ["Thriller", "Comedy", "Romance","Drama","Science","Dystopian","Psychology","Childrens"];
async function fetchBooks(subject, startIndex)
  {
                
        //https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=8
        //
        //https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=12
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject::${subject}&startIndex=${startIndex}&maxResults=12`)
         const data = await response.json();
          console.log(response.status);
          return data;

  }

        
export default function App() {

  const [bookList, setBookList] = useState(null);
  const [startIndex,setStartIndex] = useState(0);

  // For storing rental books.
  if(!localStorage.getItem("rentals")){
      localStorage.setItem("rentals",JSON.stringify([]));
  }
    useEffect(()=>
      {
        // Added for cases when the user clicks back button from the bookcard and navigates to the home page. this uses the local storage to save genre and fetch books based on its value.
      const savedGenre = localStorage.getItem('genre') || genres[0];
        fetchBooks(savedGenre,startIndex).then(data=>{ setBookList(data);});
        
      if(!localStorage.getItem("genre")){localStorage.setItem('genre', genres[0]);}
    },[]);
    console.log(bookList);
    //bookList && console.log(bookList.items.length);

  return (
    <>
      
      <div className="App">
        <Router>
            <div className="page-layout">
              <Header/>
                       <Routes>
                              {/* Setting the path to display the Home component */}
                              <Route path="/" element={<Home bookList ={bookList} setBookList={setBookList} fetchBooks={fetchBooks} genres={genres} startIndex={startIndex} setStartIndex={setStartIndex} />} />
                              <Route path="/genre/:genre" element={<Home bookList ={bookList} setBookList={setBookList} fetchBooks={fetchBooks} genres={genres}/> }/>
                              <Route path="/About" element={<About/>} />
                              <Route path="/rentals" element={<Rentals />}/>
                              <Route path="/NewBookForm" element={<NewBookForm genres={genres}/>} />
                              <Route path="/details/:id" element={<BookCard bookDetails={bookList} />} />
                              
                      </Routes>
                <Footer/>
            </div>
        </Router>
        
    
      </div>    
    </>
  )
}


