import React, { useState } from 'react'

export default function ShowCard({ tvShow, addToFavs }) {

    const [count, setCount] = useState(0)


    const handleClick = () => {
        console.log(tvShow,"this was clicked")
        addToFavs(tvShow)
    }

    const likeClick = (event) => {
        let currentLikeCount = parseInt(event.target.value)
        setCount(currentLikeCount + 1)
    }

    

    return (
            <div className="tvshow-card">
                <img className="tvshow-image"
                    src={ tvShow.image.medium }
                    alt=''
                    onClick={ handleClick }
                />
                <div>
                    <h1 className="tvshow-title">{ tvShow.name }</h1>
                    <button className='show-button' value={count} onClick={ likeClick }>👍: {count}</button>
                </div>
            </div>
    )
}
