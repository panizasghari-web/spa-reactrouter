import { Link } from "react-router";

function Home() {
  return (
    <>
      <section className="w-full">
        <h1 className="text-2xl font-bold pl-20 py-6">
          SPA (Single Page Application)
        </h1>
        <p className="w-[70%] pl-20 py-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          quod harum officia inventore necessitatibus tenetur eveniet et dolores
          consequuntur ex minima, blanditiis ut pariatur reiciendis quaerat
          dolorum totam, voluptas quia. Blanditiis quasi ipsam voluptatem at
          tempore corrupti odit assumenda consectetur quam recusandae, ad
          temporibus itaque architecto rem velit deleniti inventore iusto
          laboriosam sit quaerat? Optio numquam quasi sapiente blanditiis quis.
        </p>
        <div id="buttons" className="pl-20 py-3 flex">
          <Link
            to="/posts"
            className="w-20 h-10 mr-20 flex justify-center items-center rounded-[5px] bg-blue-800 hover:border border-blue-800 hover:text-blue-800 hover:bg-white transition-all duration-150 ease-linear text-white cursor-pointer"
          >
            Posts
          </Link>
          <Link
            to="/users"
            className="w-20 h-10 flex justify-center items-center rounded-[5px] text-blue-800 border border-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-150 ease-linear cursor-pointer"
          >
            Users
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
