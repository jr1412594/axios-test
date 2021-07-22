import React from 'react'

import ShowCard from './ShowCard'

export default function CardContainer({ tvShows, addToFavs }) {

    const displayTvShows = () => {
        return tvShows.map(tvShow => {
            return <ShowCard tvShow={ tvShow } key={ tvShow.id } addToFavs={ addToFavs }/>
        })
    }

    return (
        <div className="card-container">
            {displayTvShows()}
        </div>
    )
}
