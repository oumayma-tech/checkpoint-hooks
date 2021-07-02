import React from 'react';
import Rating from './Rating'

function Filter(props) {
    
    return(
        <div>
       <p>search by rating</p>
       <Rating totalStars={props.totalStars}/>
        </div>
    )
    
}
export default Filter
