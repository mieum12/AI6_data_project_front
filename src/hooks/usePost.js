import { useState, useEffect } from "react";
import { fetchPost } from "../api";

export function usePost() {
  const [post, setPost] = useState([]);

  async function _fetchPost() {
    try {
      const post = await fetchPost();
      setPost(post);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    _fetchPost();
  }, []);

  return { post };
}
