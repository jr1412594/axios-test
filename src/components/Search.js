import React from 'react'

export default function Search({ handleChange }) {
    return (
        <div>
            <input
                onChange={ handleChange }
                type='text'
                name='search'
                placeholder='Enter title'
            />
        </div>
    )
}
