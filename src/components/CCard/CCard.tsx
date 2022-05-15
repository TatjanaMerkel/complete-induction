import React from 'react'
import './CCard.css'

export default function CCard({title, imageURL, body}: {title:any, imageURL:any, body:any}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imageURL} alt=''/>
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>{title}</h3>
        </div>
        <div className='card-body'>
            <p>{body}</p>
        </div>
        </div>
    </div>
  )
}