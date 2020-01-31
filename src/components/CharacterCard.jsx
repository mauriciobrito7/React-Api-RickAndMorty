import React from 'react'
import './css/CharacterCard.css'

function CharacterCard(props){
    const { character } = props
    
    const compartir = e => {
        e.preventDefault()
        if( !navigator.share ) {
            alert("Tu browser no soporta la Web Share API");
            return;
        }

        navigator.share({
            title:`${character.name}`,
            text: "Personaje Rick and Morty",
            url: document.location.href
        })
        .then(()=> alert('Contenido compartido'))
        .catch((error) => alert('Hubo un error'))
    }
    
    return (
        <div 
        className="CharacterCard" 
        style={{backgroundImage:`url(${character.image})`}}>

            <div className="CharacterCard__name-container">
                <span className="character__name">{character.name}</span>  
                <span><a style={{color:"white"}} onClick={compartir}>Compartir</a></span> 
            </div>   
        </div>
        
    )
}

export default CharacterCard