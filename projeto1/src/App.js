import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    try {
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsJson = await postsResponse.json();
      this.setState({ posts: postsJson });
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    }
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div key={post.id} className="post">
              <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
