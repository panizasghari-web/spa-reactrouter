import { useState } from "react";

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, body) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!res.ok)
        throw new Error(`Failed to post request!, HTTP status: ${res.status}`);

      const data = await res.json();
      return data;
    } catch (error) {
      setError(error.message);
      throw new Error(error.message, { cause: error });
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error };
};

export default usePost;
