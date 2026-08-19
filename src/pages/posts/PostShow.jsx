import { Link, useParams } from "react-router";
import Loading from "../../components/Loading";
import DeletePost from "../../components/post/DeletePost";
import useGet from "../../hooks/useGet";

function UserShow() {
  const { postId } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useGet(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return (
    <>
      <div className="w-[70%] sm:w-[60%] md:w-[40%] lg:w-[30%] ml-20">
        <h1 className="font-bold my-10 text-2xl text-indigo-500">Posts:</h1>

        <div className="text-rose-700 text-[20px] font-[20px]">
          {error && <p>{error}</p>}
        </div>

        <div>{loading && <Loading />}</div>

        {post && (
          <ul key={post.id} className="flex flex-col border">
            <li className="title p-5 flex items-center w-full bg-gray-300 border-b font-bold">
              {post.title}
            </li>
            <li className="body p-5 flex items-center w-full border-b">
              <span>{post.body}</span>
            </li>
            <li className="buttons pl-5 p-3 flex items-center w-full bg-gray-300">
              <DeletePost postId={post.id} />
              <Link to={`/posts/edit/${postId}`} className="w-16 h-10 flex justify-center items-center rounded-[5px] bg-green-600 cursor-pointer text-white ml-5">Edit</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default UserShow;
