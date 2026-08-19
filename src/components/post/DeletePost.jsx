import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Loading";

function DeletePost({ postId }) {
  const [loading, setLoading] = useState(false);

  function handleDelete() {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok)
          throw new Error(
            `Failed to delete request!, HTTP status ${res.status}`,
          );
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast.warn(`Post ${postId} deleted successfully`);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="w-16 h-10 flex justify-center items-center rounded-[5px] bg-rose-600 cursor-pointer text-white"
      >
        {loading ? <Loading /> : "Delete"}
      </button>
    </>
  );
}

export default DeletePost;
