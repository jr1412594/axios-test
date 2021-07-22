import React from 'react'

export default function ShowCard({ tvShow, addToFavs }) {

    const handleClick = () => {
        console.log("this was clicked")
        addToFavs()
    }

    return (
        <div className="tvshow-card" handleClick={handleClick}>
            <img className="tvshow-image"
                src={tvShow.image.medium}
                alt=''
            />
            <h1 className="tvshow-title">{tvShow.name}</h1>
        </div>
    )
}
