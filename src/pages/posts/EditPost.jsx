import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useParams } from "react-router";
import EditPostForm from "../../components/post/EditPostForm";

function EditPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );
        if (!res.ok) throw new Error("Failed to fetch API ...");
        const data = await res.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [postId]);

  return (
    <>
      <div className="container w-2/3 md:w-[40%] pl-20">
        <h1 className="font-bold my-5 text-2xl text-indigo-500">Edit Post:</h1>

        <div className="text-rose-700 text-[20px] font-[20px]">
          {error && <p>{error}</p>}
        </div>
        {loading && <Loading />}

        {post && <EditPostForm post={post}/>}
      </div>
    </>
  );
}

export default EditPost;
