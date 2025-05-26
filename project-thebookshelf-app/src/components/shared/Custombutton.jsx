export default function Custombutton({onClick, buttonname}){


    return(<>
        <button type="button" className="custombutton" id="submitBtn" onClick={onClick}>{buttonname}</button>
    </>)
}