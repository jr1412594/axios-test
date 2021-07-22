import React from 'react'

export default function ShowCard({ show }) {


    return (
        <div className="tvshow-card" >
            <img className="tvshow-image"
                src={show.image.medium}
                alt=''
            />
            <h1 className="tvshow-title">{show.name}</h1>
        </div>
    )
}