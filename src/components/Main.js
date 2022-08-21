import React from 'react'
import "./App.css"

export default function Main() {
  return (
    <div>
      <header class="main-header">
        <img src="" alt="country-flag" />
        <h3>Country Name: Nigeria</h3>
      </header>

      {/* Body blurb */}
      <article class="main-body">
        <p>Blurb: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis amet animi sed dicta veniam expedita laborum fugiat ipsam eligendi</span></p>
        <p>Capital: <span>Abuja</span></p>
        <p>Population <span>200 million</span></p>
        <p>Region: <span>West Africa</span></p>
        <p>Currency: <span>Naira</span></p>
      </article>
    </div>
  )
}
