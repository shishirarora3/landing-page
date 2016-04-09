import React, { PropTypes, Component }  from 'react';
const ThumbnailGroup = ({thumbnails})=><div className="thumbnail-group">
    {thumbnails.map(thumbnail=><div className="thumbnail">

        <div>
            <img src={thumbnail.imgSrc}></img>
        </div>
        <caption>{thumbnail.caption}</caption>
        <div className="description">{thumbnail.description}</div>
    </div>)}
</div>
export default ThumbnailGroup