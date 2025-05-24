import { useState } from "react";


export default function NewBookForm({genres}){
    const[success,setsuccess] =useState(false);
  
    function handleForm(e){
    e.preventDefault();
    setsuccess(true);
    }
    return(
       
        <div className="new-book-container">
             {!success && 
            <form action="/submit" method="post">
               <fieldset className="contact">
                        <h3>Book not found? Send us a request!</h3>        
                       
                        <label >Your Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name"  required/>
                    
                    
                        <label >Your Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required/>

                        <label >Name of the book:</label>
                        <input type="text" id="bookname" name="bookname" placeholder="Enter the book name" required/>

                        

                        <label >Author Name:</label>
                        <input type="text" id="author" name="author" placeholder="Enter author name" required/>

                        <label>What genre is it?</label>

                        <select name="genre" id="genre">
                                {genres.map((genre,index)=>(<option key={index} name={genre} value={genre}>{genre}</option>))}
                        </select>
                        <label >Genre different?</label>
                        <input type="text" id="diffgenre" name="diffgenre" placeholder="Enter the genre" />

                        <button type="button" id="submitBtn" onClick={handleForm} >Submit</button>
                </fieldset>
            </form>
            }
            <div className="success" style={{minHeight:'100%'}}>
                {success&& <span>Thank you for the request !</span>}
            </div>
         </div>
    )
}