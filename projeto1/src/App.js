// App.js
import React, { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  
    const postsJson = await posts.json();
    const photosJson = await photos.json();
  
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });
    
    this.setState({ posts: postsAndPhotos });
  }
  
  render() {
    const { posts } = this.state;

    console.log('Posts:', posts);

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard
                title={post.title}
                body={post.title}
                cover={post.cover}
                id={post.id}
                />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
