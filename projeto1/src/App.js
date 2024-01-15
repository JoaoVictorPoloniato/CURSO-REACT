import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: 'Clique aqui para saber o nome do responsavel do projeto'
    };
}


handlePClick() {
  this.setState({ name: 'João Victor Poloniato Buss'});
}

handleAClick = (event) => {
  event.preventDefault();
  window.open("https://github.com/JoaoVictorPoloniato")
  const { counter } = this.state;
  this.setState({ counter: counter + 1 });
}

  render(){
    const { name, counter } = this.state;
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}>
          {name} { counter }
        </p>
        <a
          onClick={ this.handleAClick }
          className="App-link"
          href="https://github.com/JoaoVictorPoloniato"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub do criador do site
       </a>
      </header>
    </div>
  );
}
}

export default App;
