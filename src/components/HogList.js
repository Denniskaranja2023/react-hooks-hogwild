import React, {useState} from "react";

import HogItem from "./HogItem";
import Filter from "./Filter";
import HogForm from "./HogForm";

function HogList({hogs}) {
    const [hogsData, setHogsData] = useState(hogs);
    const[isGreased, setIsGreased]= useState(false);
    const[searchName,setSearchName]= useState("");
    const [sortByWeight, setSortByWeight] = useState(false);
    
    function handleHogSubmit(newHog) {
        setHogsData([...hogsData, newHog])
    }

    function filterHogsByName(event){
        setSearchName(event.target.value);}
    
    function filterGreasedHogs(event){
       setIsGreased(event.target.checked)
    }  
   
  function sortHogsByWeight(event) {
        setSortByWeight(event.target.checked);
    }

    let displayedHogs = hogsData.filter((hog) => {
        const isGreasedHog = isGreased ? hog.greased === true : true;
        const isNameMatch = hog.name.toLowerCase().includes(searchName.toLowerCase());
        return isGreasedHog && isNameMatch;
    });

    if (sortByWeight) {
        displayedHogs = [...displayedHogs].sort((a, b) => b.weight - a.weight);
    }



    return(
        <>
        <Filter filterGreasedHogs={filterGreasedHogs} filterByName={filterHogsByName} searchName={searchName} sortHogsByWeight={sortHogsByWeight}/> <hr/>
        <HogForm onHogSubmit={handleHogSubmit}/> <hr/>
        <div className="pigTile" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", gap:"50px", alignItems: "center"}}>
				{displayedHogs.map((hog) => (
					<HogItem key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} highestMedal={hog["highest medal achieved"]}/>
				))}
	    </div>
        
        </>
    )
}

export default HogList;