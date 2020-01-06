import React from 'react'
import './css/CharacterCard.css'

function CharacterCard(props){
    const { character } = props
    
    
    return (
        <div 
        className="CharacterCard" 
        style={{backgroundImage:`url(${character.image})`}}>

            <div className="CharacterCard__name-container">
                <span className="character__name">{character.name}</span>   
            </div>   
        </div>
        
    )
}

export default CharacterCard