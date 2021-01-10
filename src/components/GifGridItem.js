import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {
    
    
    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} />
        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
