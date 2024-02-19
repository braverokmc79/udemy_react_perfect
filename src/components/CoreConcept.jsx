import React from 'react'

const CoreConcept = ({image, title,description}) => {
  return (
    <li style={{display:'inline-block', maxWidth:"200px"}}>
        <img src={image}  />
        <h3>{title}</h3>
        <p>{description}</p>

    </li>
  )
}

export default CoreConcept