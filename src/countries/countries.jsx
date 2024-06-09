import React from "react";
import { useEffect,useState } from "react";
const Testing =()=>{
    const [data,setData]= useState([]);
    
    const countryData= async()=>{
        try{
        let rawData = await fetch('https://restcountries.com/v3.1/all');
        let finalData = await rawData.json();
        setData(finalData);
        
    }
    catch( error){
        console.log(error);
    }
    }

    
    
    useEffect(()=>{
        countryData();
    },[])
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", padding: "20px", gap: "10px" }}>
          {data.map((element) => (
            <div key={element.id} style={{ border: "1px solid #ddd", borderRadius: "10px", textAlign: "center", padding: "20px" }}>
              <img src={element.flags.svg} alt={element.flags.alt} width="100px" height="100px" />
              <p>{element.name.common}</p>
            </div>
          ))}
        </div>
      );
}
export default Testing