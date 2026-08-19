import Loading from "../../components/Loading";
import PostIndex from "../../components/post/PostIndex";
import { Link } from "react-router";
import useGet from "../../hooks/useGet";

function Posts() {
  const {
    data: posts,
    loading,
    error,
  } = useGet("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <section className="w-full pl-20">
        <h1 className="font-bold my-10 text-2xl text-indigo-500">Posts:</h1>

        <Link
          to="/posts/create"
          className="w-28 h-14 mr-20 my-10 flex justify-center items-center rounded-[5px] bg-blue-800 hover:border border-blue-800 hover:text-blue-800 hover:bg-white transition-all duration-150 ease-linear text-white cursor-pointer"
        >
          Create Post
        </Link>

        <div className="text-rose-700 text-[20px] font-[20px]">
          {error && <p>{error}</p>}
        </div>

        <div>{loading && <Loading />}</div>

        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {posts && <PostIndex posts={posts} />}
        </div>
      </section>
    </>
  );
}

export default Posts;
