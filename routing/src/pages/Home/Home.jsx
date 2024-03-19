import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(res.data);
        setIsLoading(false);
      } catch (err) {}
    };

    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="posts">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
