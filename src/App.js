import React from "react";
import countryData from "./countryData"
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const allCountryData = countryData.map((data) => {
    return <Main 
          name= {data.name}
          blurb= {data.blurb}
          capital= {data.capital}
          region= {data.region}
          population={data.population}
          currency={data.currency}
          flag={data.flag}
    />
  })

  
  return (
    <div>
      {allCountryData}
    </div>
  );
}