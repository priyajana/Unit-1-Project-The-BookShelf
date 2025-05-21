/**
 * REFERENCES
 * https://stackoverflow.com/questions/69176120/div-appear-and-disappear-onclick-in-react-js
 */


import { Link } from "react-router-dom";
//import book from "../assets/book.png";
import {  useEffect, useState } from "react";


export default function Home(){

    const [bookList, setBookList] = useState(null);

     function fetchBooks(){
        let subject = "biography";
         fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=8`).then(function(response){
                return response.json();
        }).then(function(data){
                // let results = json.items;
                // let row_div = document.getElementById("books_parent");
                // results.forEach(book=>{
                //         console.log(book.volumeInfo.title);
                //         console.log(book.volumeInfo.authors);

                //        let column_div = document.createElement("div");
                //        let image = document.createElement("img");
                //        image.src = book.volumeInfo.imageLinks.thumbnail;
                //        console.log(book.volumeInfo.imageLinks.thumbnail)
                //        column_div.appendChild(image);
                //        row_div.appendChild(column_div);
                console.log("hi");
                setBookList(data);
            });
        }
    useEffect(()=>{
        fetchBooks();
    },[]);
    bookList && console.log(bookList.items.length);
    
    const genres = ["Thriller", "Comedy", "Romance","Drama","Sci-fi","Dystopian"];

    return(
    <div className ="home-container">
        <div className="genre-div">
            <label>Select a genre to list books:
                    <span>
                            <select>
                                    
                                        {genres.map((genre,index)=>(<option key={index} name={genre} value={genre}>{genre}</option>))}
                                
                            </select>
                    </span>
            </label>
          </div>
          <div className="book-images">
           { bookList && bookList.items.map((book,index)=>{return <Link key={index}to={`/details/${book.volumeInfo}`}><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/></Link>})
           }
                
                
          </div>
    </div>
    )
}