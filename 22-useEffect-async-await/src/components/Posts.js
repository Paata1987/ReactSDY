import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const post = await res.json();
        setPosts(post);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  /*

  //IIFE => imidiatly invoke function expression
  //______________________________________________________________
  //version1:

  useEffect(() => {
    //IIFE- arrow func
    (const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const post = await res.json();
        setPosts(post);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })()
    
  }, []);
  //______________________________________________________________
  //version2:

  useEffect(() => {
    //IIFE- standartFun
    (async function() {
      try {
        const res = await fetch(API_URL);
        const post = await res.json();
        setPosts(post);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })()

  }, []);
  
  */
  //______________________________________________________________
  /*  useEffect(async () => {
    try {
      const res = await fetch(API_URL);
      const post = await res.json();
      setPosts(post);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []); */
  //______________________________________________________________
  /* useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []); */
  //______________________________________________________________
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.

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
