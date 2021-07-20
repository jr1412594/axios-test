import React from 'react'

import ShowCard from './ShowCard'

export default function CardContainer({ tvShows }) {
    console.log(tvShows, 'What else can i dig out')
    const displayTvShows = () => {
        return tvShows.map(tvShow => {
            return <ShowCard tvShow={ tvShow } key={ tvShow.id } />
        })
    }

    return (
        <div className="card-container">
            {displayTvShows()}
        </div>
    )
}
