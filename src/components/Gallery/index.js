import React from 'react'
import GalleryImage from '../GalleryImage'

class Gallery extends React.Component {
    render() {
        return (
            <div className="wrapper-gallery">
                {this.body}
            </div>  
        )
    }

    get body() {
        const {images} = this.props;
        return images.map(image => <GalleryImage src={image.thumbnail} />)
    }
}

export default Gallery