import React, {useState} from "react";

function HogForm({onHogSubmit}) {
    const [hogName, setHogName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [greased, setGreased] = useState(false);
    const [weight, setWeight] = useState("");
    const [highestMedal, setHighestMedal] = useState("");
    const [image, setImage] = useState("");
    
    function handleSubmit(event) {  
        event.preventDefault();
        const newHog = {
            name: hogName,
            specialty: specialty,
            greased: greased,
            weight: parseFloat(weight),
            "highest medal achieved": highestMedal,
            image: image
        };
        onHogSubmit(newHog);
        setHogName("");
        setSpecialty("");
        setGreased(false);
        setWeight("");
        setHighestMedal("");
        setImage("");
    }

    return (
      <>
      <h2 style={{textAlign:"center"}}>Add New Hog</h2>
      <form className="hogForm" onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" name="name" placeholder="Hog Name" value={hogName} onChange={(e)=>setHogName(e.target.value)} required/>  
        </label>
        <label>
          Specialty: 
          <input type="text" name="specialty" value={specialty} onChange={(e)=>setSpecialty(e.target.value)}  placeholder="Specialty" required/>    
        </label>
        <label>
            Greased:
            <input type="checkbox" name="greased" value={greased} onChange={(e)=>setGreased(e.target.checked)}/>
        </label>
        <label>
          Weight: 
          <input type="number" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}  placeholder="Weight in kg" required/>  
        </label>
        <label>
          Highest Medal Achieved: 
          <input type="text" name="highestMedal" value={highestMedal} onChange={(e)=>setHighestMedal(e.target.value)} placeholder="Highest Medal Achieved" required/>
        </label>
        <label>
          Image URL: 
          <input type="text" name="image" value={image} onChange={(e)=>setImage(e.target.value)}  placeholder="Image URL" required/> 
        </label>
        <button type="submit" style={{backgroundColor: "#3B0B0B", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none"}}>Add Hog</button>
      </form>
      </>
    )   
}
export default HogForm;