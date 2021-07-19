import React from 'react'

export default function ShowCard({ tvShow }) {
    console.log(tvShow)
    return (
        <div className="tvshow-card">
            <img className="tvshow-image"
                src={tvShow.image.medium}
                alt=''
            />
            <h1 className="tvshow-title">{tvShow.name}</h1>
        </div>
    )
}
