import React, { useState } from 'react'

export default function ShowCard({ tvShow, addToFavs }) {

    const [count, setCount] = useState(0)


    const handleClick = () => {
        console.log(tvShow,"this was clicked")
        addToFavs(tvShow)
    }

    const likeClick = () => {
        console.log(count)
        setCount()
    }

    

    return (
        <div className="tvshow-card" onClick={handleClick}>
            <img className="tvshow-image"
                src={tvShow.image.medium}
                alt=''
            />
            <div>
            <h1 className="tvshow-title">{tvShow.name}</h1>
            <button className='show-button' onClick={ likeClick }>👍: {count}</button>
            </div>

        </div>
    )
}
