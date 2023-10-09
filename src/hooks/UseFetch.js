import { useEffect, useState } from "react";

export function UseFetch(url, method = "GET") {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(null);

  const optionsData = (data) => {
    if (method === "POST") {
      setOptions({
        method: "POST",
        body: JSON.stringify(data),
        header: { "Content-type": "application/json; charset=UTF-8" },
      });
    }
    else if (method === "PATCH") {
      setOptions({
        method: "PATCH",
        body: JSON.stringify(data),
        header: { "Content-type": "application/json; charset=UTF-8" },
      });
    }
    else if (method === "DELETE"){
      setOptions({
        method : "DELETE"
      })
    }
  };

  useEffect(() => {
    const fetchInfo = async (options) => {
      setLoading(true);
      const response = await fetch(url, { ...options });

      const jsonResponse = await response.json();

      if (response.ok) {
        setPosts(jsonResponse);
        setError("");
        setLoading(false);
      } else {
        setError(jsonResponse.error);
        setLoading(false);
      }
    };

    if (method === "GET") fetchInfo();
    else if ((method === "POST" || method === "PATCH" || method === "DELETE") && options) fetchInfo(options);
  }, [url, method, options]);

  return { posts, error, loading, optionsData };
}
