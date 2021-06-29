/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react'
import "./Row.css";
import Zoom from 'react-reveal/Zoom';
import Carousel from 'react-grid-carousel'

function Row({ Movies, bgColor, listItems, subheading }) {

    return (
        <div style={{ background: `${bgColor}` }} className="row" id="rowId">
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
            
            
            <p className="slide" >Slide to see more...</p>
            <div>
            
                <Carousel cols={4} showDots loop rows={1} gap={10}>
                {Movies.map(Movie => (
                    <Carousel.Item key={Movie.url}>
                    <iframe src={Movie.url} className="videoframe" allow="autoplay" allowFullScreen />
                    </Carousel.Item>
                ))}
                </Carousel>
                    <div className="arrow">
                    </div>
            </div >
            
            
            
        </div>
    )
}

export default Row
