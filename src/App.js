import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
import CardContainer from './components/CardContainer'
class App extends Component {

  state = {
    characters: []
  }

  componentDidMount(){
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      const characters = response.data.results;
      this.setState({characters})
    })
  }
  render(){



    return (
      // <ul>
      //  {this.state.characters.map(character => 
      //  <li>{character.name},{character.species}</li>)}
      // </ul>
      <CardContainer characters={this.state.characters}/>
    );
  }
}

export default App;
