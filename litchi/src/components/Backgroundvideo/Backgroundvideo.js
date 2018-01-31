import React from 'react';
import './Backgroundvideo.css';

export default function Backgroundvideo() {
    return (
        <video autoPlay loop  muted id="Backgroundvideo" >
            <source src='https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/Background_Video/Back_video2.mp4' type="video/mp4" />
        </video>
    )
};

