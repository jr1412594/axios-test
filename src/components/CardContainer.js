import React from 'react'

export default function CardContainer({characters}) {
    
    return (
        <div>
            <ul>
                <li>{characters.name}</li>
            </ul>
        </div>
    )
}
