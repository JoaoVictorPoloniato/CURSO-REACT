
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O primeiro',
        body: 'O primeiro corpo'
      },
       {
        id: 2,
        title: 'O segundo',
        body: 'O segundo corpo'
       },
       {
        id: 3,
        title: 'O terceiro',
        body: 'O terceiro corpo'
       },
    ]
  };
  
  componentDidMount () {
    console.log('OI');
  }


  render(){
    const { posts } = this.state;

    return (
    <div className="App">
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
    );
  }
};


export default App;
