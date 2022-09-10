import './App.css';
import { useState, useEffect } from "react"; // useeffect hook is a function that is going to run immediately after the website is loaded
import Axios from "axios"

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/getPosts").then((response) => {
      setListOfPosts(response.data);
    });
  },[]);

  const createPost = () => {
    Axios.post("http://localhost:3001/createPost", {title, category, description}).then((response)=>{
      alert("Successfully Posted");
      setListOfPosts([...listOfPosts, {title, category, description}])
    });

  }

  return (
    <div className="App">
      <div  className="postsDisplay">
        {listOfPosts.map((post) =>{
          return (
          <div> 
            <h1>Title: {post.title}</h1>
            <h1>Category: {post.category}</h1>
            <h1>Description: {post.description}</h1>
          </div>
          );

        })}
      </div>
      <div>
        <input type="text" placeholder="Enter Title" onChange={(event) => {setTitle(event.target.value)}}/>
        <input type="text" placeholder="Enter Category" onChange={(event) => {setCategory(event.target.value)}}/>
        <input type="text" placeholder="Enter Description" onChange={(event) => {setDescription(event.target.value)}}/>
        <button onClick={createPost}> Post</button> 

      </div>

    </div>
  );
}

export default App;
