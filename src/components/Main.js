import React from 'react'
import "./App.css"

export default function Main(props) {
  return (
    <div class="main-container">
      <header class="main-header">
        <img src={props.flag}alt="country-flag" />
        <h3>{props.name}</h3>
        <div><span class="material-symbols-outlined">expand_more</span></div>
      </header>

      {/* Body blurb */}
      <article class="main-body">
        <p>Blurb: <span>{props.blurb}</span></p>
        <p>Capital: <span>{props.capital}</span></p>
        <p>Population: <span>{props.population}</span></p>
        <p>Region: <span>{props.region}</span></p>
        <p>Currency: <span>{props.currency}</span></p>
        <p>Languages: <span>{props.language}</span></p>
      </article>
    </div>
  )
}
