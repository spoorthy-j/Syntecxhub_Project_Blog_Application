 import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div>
      <h1>My Blog</h1>
      <PostForm posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
