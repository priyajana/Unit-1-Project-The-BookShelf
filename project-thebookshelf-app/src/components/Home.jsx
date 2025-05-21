import book from "../assets/book.png";

export default function Home(){
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
                <img src={book}></img>
                <img src={book}></img>
                <img src={book}></img>
                <img src={book}></img>
                <img src={book}></img>
                <img src={book}></img>
                <img src={book}></img>
                <img src={book}></img>
          </div>
    </div>
    )
}