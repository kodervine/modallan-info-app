import React from 'react'

export default function Header() {
  return (
    <div>
       <main className='search-country-container'>
        <label htmlFor="searchCountry">Find African countries</label>
        <input type="search" name="search-country" id="searchCountry" placeholder='Search for countries here' />
        <button className='search-btn'>Search</button>
      </main>
    </div>
  )
}
