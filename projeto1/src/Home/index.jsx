import React, { useEffect, useState, useCallback } from 'react';
import './styles.css';
import Posts from '../components/Posts';
import { loadPosts } from '../utils/load-posts';
import { Button } from '../components/button';
import { TextInput } from '../components/Textinput';


export const Home = () => {

  const [posts, setposts] = useState([]);
  const [allPosts, setallPosts] = useState([]);
  const [page, setpage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setsearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length; 

  const filterePosts = !!searchValue ?
  allPosts.filter(post => {
    return post.title.toLowerCase().includes(
      searchValue.toLowerCase()
    );
  })
  : posts;


  const handleLoadPosts = useCallback(async (page, postsPerPage) => { 
    const postsAndPhotos = await loadPosts();

     setposts(postsAndPhotos.slice(page, postsPerPage)) ; 
     setallPosts(postsAndPhotos);
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
}, [handleLoadPosts, postsPerPage]);

const loadMorePosts = () => {
  const nextPage = page + postsPerPage;
  const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

  const updatedPosts = [...posts, ...nextPosts];

  setposts(updatedPosts);
  setpage(nextPage);

  console.log(nextPage, postsPerPage, nextPage + postsPerPage);
};
  const handleChange = (e) => {
    const { value } = e.target;

    setsearchValue(value);
  }



  return (
    <section className="container">
      <div className="search-container">
      {!!searchValue && (
        
           <h1>Procure uma palavra: {searchValue}</h1>
        
      )}
       
       <TextInput searchValue={searchValue} handleChange={handleChange} />

       </div>
        {filterePosts.length > 0 && (
          <Posts posts={filterePosts} />
      )}

        {filterePosts.length == 0 && (
          <p>Não existem Posts com esse nome</p>
      )}

      <div className="button-container">
        {!searchValue && (
        <Button 
        text="Carregar mais Posts"
        onClick={loadMorePosts}
        disabled={noMorePosts}
        />

    )}   
      </div>
    </section>
  );

}

export default Home;
