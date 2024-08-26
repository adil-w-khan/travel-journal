import React from "react";

export default function Post(props){
  return(
    <div className="post-div">
      <img src={props.imageUrl} />
      <div className="post-details">
        <p>{props.title}</p>
      </div>
    </div>
  )
}