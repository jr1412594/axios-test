import React, {Component} from 'react'
import axios from 'axios'
import './App.css';

import CardContainer from './components/CardContainer'
import Search from './components/Search'
import FavCardContainer from './components/FavCardContainer';

const baseURL = "https://api.tvmaze.com/shows"

class App extends Component {

  state = {
    tvShows: [],
    favTvShows: [],
    search: '',
    genre: "all",
    count: 0
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

  addToFavs = (program) => {
      if(!this.state.favTvShows.find(show => show.id === program.id))
      this.setState({favTvShows: [...this.state.favTvShows, program]})
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
        <FavCardContainer favTvShows={ this.state.favTvShows }/>
        <Search handleChange={ this.handleChange } tvShows={ this.state.tvShows }/>
        <CardContainer tvShows={ this.filteredTvShows() } addToFavs={ this.addToFavs }/>
      </div>
    );
  }
}

export default App;
