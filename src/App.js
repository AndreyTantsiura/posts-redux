import "./App.css";
import Post from "./components/Post";
import FormAddPost from "./components/FormAddPost";
import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <div>
        <FormAddPost />
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </>
  );
}

export default App;