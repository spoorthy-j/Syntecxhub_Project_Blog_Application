 import React, { useState } from "react";

function PostList({ posts, setPosts }) {
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setEditedTitle(post.title);
    setEditedContent(post.content);
  };

  const handleUpdate = () => {
    const updatedPosts = posts.map((post) =>
      post.id === editingId
        ? { ...post, title: editedTitle, content: editedContent }
        : post
    );
    setPosts(updatedPosts);
    setEditingId(null);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          {editingId === post.id ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <button onClick={handleUpdate}>Update</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              {post.image && <img src={post.image} alt="Post" />}
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default PostList;
