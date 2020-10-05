import React from 'react'
//import PropTypes from 'prop-types'

const GifGridItem = ({title, url}) => {
    
    return (
        <div className='card animate__animated animate__fadeIn'>
           <img src={url} alt={title}/> 
           <p>{title? title: 'No title'}</p>
        </div>
    )
}

GifGridItem.propTypes = {

};

export default GifGridItem;
