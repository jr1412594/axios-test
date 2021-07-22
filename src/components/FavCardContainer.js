import React from 'react'

import FavShowCard from './FavShowCard'

export default function FavCardContainer({ favTvShows }) {

    console.log(favTvShows, "these are the faves")

    const displayFavTvShows = () => {
        return favTvShows.map(show => {
            return <FavShowCard show={show} key={show.id} />
        })
    }

    return (
        <div className="fav-card-container">
            {displayFavTvShows()}
        </div>
    )
}
