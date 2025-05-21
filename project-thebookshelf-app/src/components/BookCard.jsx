import { useState } from "react"

export default function BookCard(){

    const[rentConfirm, setrentConfirm] = useState(false);

    return(
        <div className="book-card">
         { !rentConfirm && 
                <div className="book-details">
                <h3>Book Details</h3>
                <h4>Name : The Navarre Bible</h4>
                <h4>Author: Faculty University of Navarre</h4>
                <h4>Year Published: 2005</h4>
                <h4>Genre: sdfddsf </h4>
                <button type="submit" onClick={() => setrentConfirm(!rentConfirm)}>Rent</button>
           `    </div> 
        }
        {rentConfirm &&
            <div className="rent-confirm">
            <h4>Book Added to your rentals!</h4>
            </div>
        }
           
        </div>
    )
}