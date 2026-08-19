import { Link } from "react-router";

function UserIndex({ users }) {
  return users.map((user) => (
    <ul key={user.id} className="flex flex-col border overflow-hidden whitespace-nowrap">
      <li className="title h-10 pl-5 flex items-center w-full bg-gray-300 border-b font-bold">
        <Link to={`/users/${user.id}`} className="w-full h-full flex items-center underline text-indigo-800">
          {user.name}
        </Link>
      </li>
      <li className="username h-10 pl-5 flex items-center w-full border-b">
        <span className="font-bold mr-3">Username:</span>
        <span>{user.username}</span>
      </li>
      <li className="email h-10 pl-5 flex items-center w-full border-b">
        <span className="font-bold mr-3">E-mail:</span>
        <span>{user.email}</span>
      </li>
      <li className="phone h-10 pl-5 flex items-center w-full">
        <span className="font-bold mr-3">Phone:</span>
        <span>{user.phone}</span>
      </li>
    </ul>
  ));
}

export default UserIndex;
