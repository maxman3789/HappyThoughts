import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";
import Landing from "./pages/Landing";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import PostList from "./pages/PostList";
import SinglePost from "./pages/SinglePost"

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/post/aboutus" element={<About />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/posts/:postID/create" element={<CreatePost />} />
            <Route path="/posts/:postID" element={<SinglePost />} />
            <Route path="/posts/postID/posts" element={<PostList />} />
            {/* Use <RequiredAuth> for pages that should only be accessible to a
            user that has logged in.*/}
            {/* <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPageExample />
                </RequireAuth>
              }
            /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
