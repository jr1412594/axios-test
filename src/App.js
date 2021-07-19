import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
import CardContainer from './components/CardContainer'

const baseURL = "https://api.tvmaze.com/shows"

class App extends Component {

  state = {
    tvShows: [],
    favTvShows: [],
    search: ''
  }

  componentDidMount(){
    axios.get(baseURL)
    .then(response => { 
      this.setState({ tvShows: response.data})
    })
  }

  handleChange = (event) => {
  console.log(event.target)
  }

  render(){

    return (
      <CardContainer tvShows={this.state.tvShows}/>
    );
  }
}

export default App;
