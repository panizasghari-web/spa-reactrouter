import { useParams } from "react-router";
import Loading from "../../components/Loading";
import useGet from "../../hooks/useGet";

function UserShow() {
  const { userId } = useParams();
  const {
    data: user,
    loading,
    error,
  } = useGet(`https://jsonplaceholder.typicode.com/users/${userId}`);

  return (
    <>
      <div className="w-[70%] sm:w-[60%] md:w-[40%] lg:w-[30%] ml-20">
        <h1 className="font-bold my-10 text-2xl text-indigo-500">Users:</h1>

        <div className="text-rose-700 text-[20px] font-[20px]">
          {error && <p>{error}</p>}
        </div>

        <div>{loading && <Loading />}</div>

        {user && (
          <ul key={user.id} className="flex flex-col border">
            <li className="title h-10 pl-5 flex items-center w-full bg-gray-300 border-b font-bold">
              {user.name}
            </li>
            <li className="username h-10 pl-5 flex items-center w-full border-b">
              <span className="font-bold mr-3">Username:</span>
              <span>{user.username}</span>
            </li>
            <li className="email h-10 pl-5 flex items-center w-full border-b">
              <span className="font-bold mr-3">E-mail:</span>
              <span>{user.email}</span>
            </li>
            <li className="phone h-10 pl-5 flex items-center w-full border-b">
              <span className="font-bold mr-3">Phone:</span>
              <span>{user.phone}</span>
            </li>
            <li className="phone h-10 pl-5 flex items-center w-full">
              <span className="font-bold mr-3">Website:</span>
              <span>{user.website}</span>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default UserShow;
