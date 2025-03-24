import React from 'react';

const Blog = ({ posts }) => {
  return (
    <div className="blog">
      {posts.map(post => (
        <div key={post._id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Blog;
