import React from "react";
import countryData from "./countryData"
import Header from "./components/Header";
import Main from "./components/Main";
import Filter from "./components/Filter";

export default function App() {
  // Use state to filter based on search
  const [filtered, setFiltered] = React.useState(countryData)

  // Main component for display of data
  const allCountryData = countryData.map((data) => {
    return <Main 
          name= {data.name}
          blurb= {data.blurb}
          capital= {data.capital}
          region= {data.region}
          population={data.population}
          currency={data.currency}
          flag={data.flag}
          language={data.language}
    />
  })

  
  return (
    <div>
      <Header />
      {allCountryData}
    </div>
  );
}