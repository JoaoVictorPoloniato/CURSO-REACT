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
    postPerPage: 2,
    searchValue: ''
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

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    return (
      <section className="container">

        
        <h1>Procure uma palavra: {searchValue}</h1>
        <input
         onChange={this.handleChange}
         value={searchValue}
         type="search" 
         /><br /><br /><br /> 

        <Posts posts={posts} />

        <div className="button-container">
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
