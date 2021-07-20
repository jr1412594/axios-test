import React from 'react'

import GenreSearch from './GenreSearch'

export default function Search({ handleChange, tvShows }) {

    return (
        <div className="search-bar">
            <input
                onChange={ handleChange }
                type='text'
                name='search'
                placeholder='Enter title'
            />
            <GenreSearch tvShows={ tvShows } handleChange={ handleChange } key={ tvShows.id }/>
        </div>
    )
}
