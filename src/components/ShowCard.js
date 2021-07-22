import React from 'react'

export default function ShowCard({ tvShow, addToFavs }) {

    const handleClick = () => {
        console.log(tvShow,"this was clicked")
        addToFavs(tvShow)
    }

    return (
        <div className="tvshow-card" onClick={handleClick}>
            <img className="tvshow-image"
                src={tvShow.image.medium}
                alt=''
            />
            <h1 className="tvshow-title">{tvShow.name}</h1>
        </div>
    )
}
