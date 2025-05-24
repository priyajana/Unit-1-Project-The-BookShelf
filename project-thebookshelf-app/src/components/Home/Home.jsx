/**
 * REFERENCES
 * https://stackoverflow.com/questions/69176120/div-appear-and-disappear-onclick-in-react-js
 * https://stackoverflow.com/questions/41233176/how-to-limit-text-of-span
 */


import { Link } from "react-router-dom";
import dummy from '../../assets/book.png';

import './Home.css';
import { useState } from "react";


export default function Home({bookList,setBookList,fetchBooks,genres}){
   
    
    // using state to keep track of genre selection
    const [selectedGenre,setGenre] =  useState(localStorage.getItem('genre',''));
    
    // get the selected genre from back button
    

    // To set the selected genre to the element 
    function handleChange(e)
    {
    
        let new_genre = e.target.value;
        setGenre(new_genre);
        localStorage.setItem('genre',new_genre);
        console.log("Genre Changed"+localStorage.getItem('genre'));
        fetchBooks(new_genre).then(data=>{ return setBookList(data);});      
        
    }

    
    return(
    <div className ="home-container">
        <div className="genre-div">
            <label>Select a genre to list books:
                    <span>
                            <select onChange={handleChange} value={selectedGenre}>
                                    
                                        {genres.map((genre)=>(<option key={genre} value={genre}>{genre}</option>))}
                                
                            </select>
                    </span>
            </label>
          </div>
          <div className="books-parent">

           { 
            bookList && bookList.items.map((book,index)=>{
                //console.log(book.id);
                return <div className="book-child" key={index}>
                        <Link className="link-wrapper" to={`/details/${book.id}`}>
                                { 
                                    
                                    book.volumeInfo.imageLinks?
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} title={book.volumeInfo.title}/>:
                                    <img src={dummy} alt={book.volumeInfo.title} title={book.volumeInfo.title}/>
                                    
                                }
                                
                                <span className="book-link">{book.volumeInfo.title} </span>   
                            </Link>
                    </div>
                    })
           }
                
           <div class="pagination">
                        
             <Link to= {`/page/${Link.value}`} value="1">1</Link>           
           </div>     
          </div>
    </div>
    )
}