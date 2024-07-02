import React, { useEffect, useState } from "react";

const Testing = () => {
  const [data, setData] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");

  const countryData = async () => {
    try {
      let rawData = await fetch('https://restcountries.com/v3.1/all');
      let finalData = await rawData.json();
      setData(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  const countryData2 = async () => {
    try {
    
        let rawData = await fetch(`https://restcountries.com/v3.1/name/${countrySearch}`);
        let finalData = await rawData.json();
        setData(finalData);
      } 
     catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(countrySearch){
      countryData2();
    }
    else{
      countryData();
    }
   
  }, [countrySearch]); 

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <center>
          <input
            type="text"
            placeholder="Search countries"
            value={countrySearch}
            onChange={(e) => {
              setCountrySearch(e.target.value);
            }}
            style={{ width: "650px", height: "25px", borderWidth: "2px" }}
          />
        </center>
      </div>
      <hr />
      <div
        className="countryCard"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          padding: "20px",
          gap: "10px",
        }}
      >
        {data.length > 0 ? (
          data.map((element) => (
            <div
              className="countryCard"
              key={element.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <img
                src={element.flags.svg}
                alt={element.flags.alt}
                width="100px"
                height="100px"
              />
              <p>{element.name.common}</p>
            </div>
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </div>
    </>
  );
};

export default Testing;
