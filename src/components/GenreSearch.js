import React from 'react'

export default function GenreSearch({ handleChange, tvShows }) {



    const genreOptions = () => {
        const movieGenres = tvShows.map(tvShow => {
            return tvShow.genres
        })
        const allGenres = [].concat.apply([], movieGenres)
        const uniqGenres = [...new Set(allGenres)]
        return uniqGenres.map(genre => {
            return <option key={genre}>{genre}</option>
        })
    }


    return (
        <div className="genre-div">
            <select name="genre" onChange={ handleChange }>
                <option value='all'>All</option>
                {genreOptions()}
            </select>
        </div>
    )
}
