import React from 'react';

const Posts = ({ posts }) => {
  // Verificar se 'posts' é um array
  if (!Array.isArray(posts)) {
    return <div>No posts available</div>;
  }

  // Se 'posts' for um array, continuar com o mapeamento
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.cover} alt={post.title} />
          <p>Author: {post.author}</p> {/* Adicione o autor do post */}
          <p>Category: {post.category}</p> {/* Adicione a categoria do post */}
          {/* Outros elementos do post */}
        </div>
      ))}
    </div>
  );
};

export default Posts;
