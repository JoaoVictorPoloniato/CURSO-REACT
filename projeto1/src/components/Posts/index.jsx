import React from 'react';
import './styles.css'

const Posts = ({ posts }) => {

  if (!Array.isArray(posts)) {
    return <div>Não existem mais posts</div>;
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.cover} alt={post.title} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
