import React from 'react'
import './Card.css'
import Zoom from 'react-reveal/Zoom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Card({ images, imageHeading, subheading, listItems }) {
        
    return (<>
            <div>
            <Zoom>
            <div className="subheading">
            <h2>
                {subheading}
            </h2>
            {listItems.map(listItem => (
             <li key={listItem.name} className="list-group"><p className="list-group-p"> {listItem.name}</p></li>
            ))} 
            </div>
            </Zoom>
            </div>
            <div className='container'>
            {images.map(image => (<div key={image.imgsrc} className='card'>
                <div className='imgBx'>
                    <LazyLoadImage effect="blur" src={image.imgsrc} alt="" />
                </div>
                <div className='contentBx'>
                    <div className='content'>
                        <h3>{imageHeading}</h3>
                    </div>

                </div>
            </div>
            ))}
            
        </div> 
        </>    
    )
}

export default Card

