/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './portfolio.scss'

function Portfolio({ images }) {
    return (
        <>
        <div id="portfolio" className="portfolio">
        <h1>PORTFOLIO</h1>

        <div className="masonry">
            {images.map(image => <div key={image.imgsrc} className="grid">
                <LazyLoadImage effect="blur" src={image.imgsrc} />
              </div>
            )}
</div>  
</div>  
        </>
    )
}

export default Portfolio
