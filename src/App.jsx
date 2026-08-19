import { HashRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Header from "./components/Header";
import Users from "./pages/user/Users";
import UserShow from "./pages/user/UserShow";
import Posts from "./pages/posts/Posts";
import PostShow from "./pages/posts/PostShow";
import CreatePost from "./pages/posts/CreatePost";
import EditPost from "./pages/posts/EditPost";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        {/* ################################################# */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ################################################# */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserShow />} />
          {/* ################################################# */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostShow />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/edit/:postId" element={<EditPost />} />
        </Routes>
        {/* ################################################# */}
        <ToastContainer />
      </HashRouter>
    </>
  );
}

export default App;
