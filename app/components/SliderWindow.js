import React, { PropTypes, Component }  from 'react';
const SliderWindow = ({images})=>
    <div id="sliderWindow">
        <div id="slider">
            {images.map(image =>
                <img src={image}/>
            )}
        </div>
    </div>

export default SliderWindow
