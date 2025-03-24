import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import BlogPostForm from './components/BlogPostForm';
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Personal Blog Platform</h1>
      <BlogPostForm setPosts={setPosts} />
      <Blog posts={posts} />
    </div>
  );
};

export default App;

