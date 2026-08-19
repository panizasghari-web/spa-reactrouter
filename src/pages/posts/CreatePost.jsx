import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import usePost from "../../hooks/usePost";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { post, loading, error } = usePost();

  const handleSubmit = (e) => {
    e.preventDefault();

    post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: 1,
    })
      .then((data) => {
        console.log(data);
        toast.success("Post created successfully");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className="container w-2/3 md:w-[40%] pl-20">
        <h1 className="font-bold my-5 text-2xl text-indigo-500">
          Create a Post:
        </h1>

        <div className="text-rose-700 text-[20px] font-[20px]">
          {error && <p>{error}</p>}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="title">
            <label htmlFor="title" className="w-full font-bold block">
              Title:
            </label>
            <input
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
              name="comment"
              id="comment"
              rows="4"
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
            SEND
            {loading && <Loading />}
          </button>
        </form>
      </div>
    </>
  );
}

export default CreatePost;
