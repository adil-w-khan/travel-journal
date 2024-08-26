import React from "react"
import globe from "../globe.png"

export default function Header() {
  return(
    <div className="header-div">
      <img src={globe} className="globe-img"/>
      <h1>Adil's Travel Journal</h1>
    </div>
  )
}