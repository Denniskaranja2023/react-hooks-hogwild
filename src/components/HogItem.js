import React,{useState} from "react";

function HogItem({name,image,specialty,weight,greased,highestMedal}) {
    const [detailVisible, setDetailVisible]= useState(false);

    function toggleDetails(){
        setDetailVisible(!detailVisible);
    }
    function handleDelete(event) {
        event.target.parentElement.remove();
        alert("Hog deleted successfully!");
    }

    return(
        <div className="ui eight wide column" onClick={toggleDetails} title={detailVisible? "Click to not view details": "Click to view details"} style={{cursor: "pointer", border: "1px solid #3B0B0B", height:"650px", borderRadius: "5px", margin: "10px", padding: "10px", backgroundColor: "#F5F5D0"}}>
           <div>
            <h3>{name}</h3>
            <img src={image}/>
           </div>
           <ul className={detailVisible?"hogShow":"hogDetails"} style={{fontSize: "medium", border: "1px solid #3B0B0B", padding: "10px", borderRadius: "5px"}}>
            <li><strong>Speciality:</strong> {specialty}</li>
            <li><strong>Weight: </strong>{weight}</li>
            <li><strong>Greased: </strong>{greased ? "Yes" : "No"}</li>
            <li><strong>Highest Medal Achieved:</strong> {highestMedal}</li>
           </ul>
           <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default HogItem;
