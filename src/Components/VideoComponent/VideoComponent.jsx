import React, { useState } from 'react';
import "./VideoComponent.css";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const VideoComponent = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [ripple, setRipple] = useState(false);
    const [burst, setBurst] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const handleClick = () => {
        setRipple(true);
        setBurst(true);

        setTimeout(() => {
            setRipple(false);
            setBurst(false);
            setShowVideo(true);
            setVideoSrc("https://www.youtube.com/embed/qdRvj0csQAg?autoplay=1");
        }, 600);
    };

    const handleClose = () => {
        setShowVideo(false);
        setVideoSrc('');
    };

    const renderBurst = () => {
        const particles = [];
        for (let i = 0; i < 12; i++) {
            const angle = (i * 30) * (Math.PI / 180);
            const x = Math.cos(angle) * 50 + "px";
            const y = Math.sin(angle) * 50 + "px";

            particles.push(
                <span
                    key={i}
                    style={{ "--x": x, "--y": y }}
                ></span>
            );
        }
        return <div className="burst-container">{particles}</div>;
    };

    return (
        <div className='video'>
            <div className="img-box">
                {showVideo ? (
                    <div className="video-wrapper">
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoSrc}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                        <button className="close-btn" onClick={handleClose}>Close</button>
                    </div>
                ) : (
                    <>
                        <img src="https://vastrahaat.com/images/video-image.jpg" alt="" />
                        <div className={`show ${ripple ? "active" : ""}`} onClick={handleClick}>
                            {ripple && <span className="ripple" />}
                            {burst && renderBurst()}
                            <h1><SiGoogledisplayandvideo360 size={30} /></h1>
                            <div className="hover-shard"></div>
                            <div className="hover-shard"></div>
                            <div className="hover-shard"></div>
                            <div className="hover-shard"></div>
                            <div className="hover-shard"></div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default VideoComponent;
