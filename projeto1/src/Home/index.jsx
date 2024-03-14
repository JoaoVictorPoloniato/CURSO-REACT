import React, { Component } from 'react';
import './styles.css';
import Posts from '../components/Posts';
import { loadPosts } from '../utils/load-posts';
import { Button } from '../components/button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
     });
  };

  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});

    console.log(page, postPerPage, nextPage, nextPage + postPerPage);
  }

  render() {
    const { posts, page, postPerPage, allPosts } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts} />

        <div class="button-container">
          <Button 
          text="Carregar mais Posts"
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}

export default Home;
