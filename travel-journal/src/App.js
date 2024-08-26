import React from "react";
import data from "./data"
import Header from "./components/Header";
import Post from "./components/Post";


function App() {
  const postElements = data.map(post => (
    <Post
      key = {post.key}
      title = {post.title}
      location = {post.location}
      googleMapsUrl = {post.googleMapsUrl}
      startDate = {post.startDate}
      endDate = {post.endDate}
      description = {post.description}
      imageUrl = {post.imageUrl}
    />
  ))
  

  return (
    <div className="App">
      <Header />
      <div>
      {postElements}
      </div>
    </div>
  );
}

export default App;
