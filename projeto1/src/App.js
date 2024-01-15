
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
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
    const { posts, counter } = this.state;
    posts[0].title = 'O titulo mudou';

    setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
  }


  render(){
    const { posts, counter } = this.state;

    return (
    <div className="App">
      <h1>{counter}</h1>
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
