import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const getPost = async () => {
        setIsLoading(true);
        try {
          const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
          );
          setPost(res.data);
          setIsLoading(false);
        } catch (err) {}
      };
      getPost();
    }
  }, [params.id]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        post && (
          <div>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
          </div>
        )
      )}
    </div>
  );
};

export default PostDetail;
