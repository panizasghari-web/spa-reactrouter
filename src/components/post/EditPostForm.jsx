import { useState } from "react";
import Loading from "../Loading";
import { toast } from "react-toastify";

function EditPostForm({post}) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, body);

    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: body,
        id: post.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (!res.ok)
          throw new Error(`Failed to PUT request!, HTTP status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast.success("Post updated successfully!");
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Failed to update the post!");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div className="text-rose-700 text-[20px] font-[20px]">
        {error && <p>{error}</p>}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="title" className="w-full font-bold block">
            Title:
          </label>
          <input
          value={title}
            type="text"
            name="title"
            id="title"
            className="w-full h-10 p-2 border rounded-[5px]"
            onChange={(e) => setTitle(e.target.value)}
          />
          {!title && (
            <p className="text-rose-700 text-[13px]">Title is required!</p>
          )}
        </div>

        <div className="body mt-5">
          <label htmlFor="comment" className="w-full font-bold block">
            Body:
          </label>
          <textarea
          value={body}
            name="comment"
            id="comment"
            rows="6"
            className="w-full p-2 border rounded-[5px]"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {!body && (
            <p className="text-rose-700 text-[13px]">Body is required!</p>
          )}
        </div>

        <button
          disabled={loading || title == "" || body == ""}
          type="submit"
          className="disabled:opacity-75 disabled:cursor-not-allowed w-full h-12 my-5 flex justify-center items-center gap-2 rounded-[5px] bg-blue-800 enabled:hover:border border-blue-800 enabled:hover:text-blue-800 enabled:hover:bg-white transition-all duration-150 ease-linear text-white cursor-pointer"
        >
          Edit
          {loading && <Loading />}
        </button>
      </form>
    </>
  );
}

export default EditPostForm;
