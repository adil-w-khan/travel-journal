import React from "react";
import pindrop from "../pindrop.png"

export default function Post(props){
  return(
    <div className="post-div">
      
      <img src={props.imageUrl} className="post-image"/>
      
      <div className="post-details">
        <div className="top-row">
          <img src={pindrop} className="pindrop-img"/>
          <p className="location">{props.location}</p>
          <a href={props.googleMapsUrl} className="google-map-url" target="_blank">View on Google Maps</a>
        </div>
        <p className="title">{props.title}</p>
        <p className="start-end-dates">{props.startDate} - {props.endDate}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}