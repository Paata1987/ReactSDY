import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((allposts) => {
        console.log(allposts);
        setPosts(allposts);
      })
      .catch((err) => console.log(err.message));
  }, []);

  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }); */
  return (
    <div>
      {posts && (
        <div>
          <Post />
          <Post />
        </div>
      )}
    </div>
  );
}

export default Posts;
