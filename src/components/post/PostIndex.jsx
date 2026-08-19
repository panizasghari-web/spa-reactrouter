import { Link } from "react-router";

function postIndex({ posts }) {
  return posts.map((post) => (
    <ul key={post.id} className="flex flex-col border overflow-hidden">
      <li className="title p-5 flex items-center w-full bg-gray-300 border-b font-bold">
        <Link
          to={`/posts/${post.id}`}
          className="w-full h-full flex items-center underline text-indigo-800"
        >
          {post.title}
        </Link>
      </li>
      <li className="body p-5 flex items-center w-full">
        <span>{post.body}</span>
      </li>
    </ul>
  ));
}

export default postIndex;
