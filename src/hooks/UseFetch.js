import { useEffect, useState } from "react";

export function UseFetch(url) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(false)
  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true)
      const response = await fetch(url);

      const jsonResponse = await response.json();

      if (response.ok) {
        setPosts(jsonResponse);
        setError("");
        setLoading(false)
      } else {
        setError(jsonResponse.error);
        setLoading(false)
      }
    };

    fetchInfo();
  }, [url]);

  return {posts,error,loading}
}
