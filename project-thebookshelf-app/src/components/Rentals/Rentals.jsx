export default function Rentals(){

   const rentalBooks= JSON.parse(localStorage.getItem("rentals")|| []);
  
    return(
    <div className="rentals">
        <div className="rentalItems">
            <h4>{rentalBooks? 
                rentalBooks.map((item,index)=>(<h4 key={index}>{index+1}.&nbsp;{item}</h4>)):"No rental books."}</h4>
        </div>
    </div>)
}