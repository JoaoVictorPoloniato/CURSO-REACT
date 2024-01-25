import React, { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";

class Home extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts;
    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    console.log("Posts:", posts);

    return (
      <section className="container">
        {/* <Posts posts={posts} /> */}
        <h1>Home</h1>
      </section>
    );
  }
}

export default Home;
