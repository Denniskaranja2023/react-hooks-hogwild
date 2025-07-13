import React from "react";

function Filter({filterGreasedHogs, filterByName,searchName, sortHogsByWeight}) {
    return(
        <>
        <h2 style={{textAlign: "center"}}>Filter hogs</h2>
        <form className="filterForm">
          <label>Greased <input type="checkbox" onChange={filterGreasedHogs} id="greased" name="greased"/></label>  
          <label>Search by Name <input onChange={filterByName} style={{textAlign:"center"}} type="text" placeholder="peppa" value={searchName} id="name" name="sort"/></label>
          <label>Sort by Weight (descending order) <input onChange={sortHogsByWeight} style={{textAlign:"center"}} type="checkbox" id="weight" name="sort"/></label>
        </form>
        </>
    )
}

export default Filter;