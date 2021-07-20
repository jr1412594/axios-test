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
    search: '',
    genre: "all"
  }

  componentDidMount(){
    axios.get(baseURL)
    .then(response => { 
      this.setState({ tvShows: response.data})
    })
  }

  handleChange = (event) => {
    console.log(event.target.name, "this is my event console")
  this.setState({[event.target.name]: event.target.value})
  }

  filteredTvShows = () => {
    return this.state.tvShows.filter(tvShow => {
      if(!this.state.search){
        return true
      } else {
        return tvShow.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
    }).filter(tvShow => {
      if(this.state.genre === 'all'){
        return true
      } else {
        return tvShow.genres.join(' ').includes(this.state.genre)
      }
    })
  }

  

  render(){

    return (
      <div className="main">
        <Search handleChange={ this.handleChange } tvShows={ this.state.tvShows }/>
        <CardContainer tvShows={ this.filteredTvShows() }/>
      </div>
    );
  }
}

export default App;
