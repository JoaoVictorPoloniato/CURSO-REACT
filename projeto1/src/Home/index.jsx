import React, { Component } from 'react';
import './styles.css';
import Posts from '../components/Posts';
import { loadPosts } from '../utils/load-posts';

export class Home extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} /> {/* Renderize o componente Posts passando posts como propriedade */}
      </section>
    );
  }
}

export default Home; // Exporte o componente Home como padrão
