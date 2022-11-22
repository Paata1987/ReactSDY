import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      {posts.map((ps) => (
        <Post
          {...ps}
          key={ps.id}
        />
      ))}
    </div>
  );
}

export default Posts;
