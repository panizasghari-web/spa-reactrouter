import Loading from "../../components/Loading";
import UserIndex from "../../components/user/UserIndex";
import useGet from "../../hooks/useGet";

function Users() {
  const {
    data: users,
    loading,
    error,
  } = useGet("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <section className="w-full pl-20">
        <h1 className="font-bold my-10 text-2xl text-indigo-500">Users:</h1>

        <div className="text-rose-700 text-[20px] font-[20px]">
          {error && <p>{error}</p>}
        </div>

        <div>{loading && <Loading />}</div>

        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {users && <UserIndex users={users} />}
        </div>
      </section>
    </>
  );
}

export default Users;
