import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((ps) => (
          <Post
            {...ps}
            key={ps.id}
          />
        ))
      )}
      {}
    </>
  );
}

export default Posts;
