import React from 'react';
//import likeButton from './buttonsPhotos/LikeButton.jpg';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';
//import unLikeButton from './buttonsPhotos/unLikeButton.jpg';

import "./SwipeButtons.css"


const SwipeButtons = ()=>{

    return(
        <div className="swipeButtons">
            <IconButton className="swipeButtons__like">
                <ThumbUpAltIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__dislike">
                <ThumbDownIcon fontSize="large" />
            </IconButton>
        </div>
    );
};
export default SwipeButtons;
