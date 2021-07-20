import React, {Component} from 'react'
import axios from 'axios'
import './App.css';

import CardContainer from './components/CardContainer'
import Search from './components/Search'
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
  this.setState({[event.target.name]: event.target.value})
  }

  filteredTvShows = () => {
    return this.state.tvShows.filter(tvShow => {
      if(!this.state.search){
        return true
      } else {
        // console.log(this.filteredTvShows())
        return tvShow.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })
  }

  

  render(){

    return (
      <div className="main">
        <Search handleChange={ this.handleChange }/>
        <CardContainer tvShows={ this.filteredTvShows() }/>
      </div>
    );
  }
}

export default App;
