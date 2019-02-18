import React from 'react'

function GalleryImage(props) {
    return (
        <div className="wrapper-image">
            <img src={props.src} alt="" />
        </div>
    )
}

export default GalleryImage