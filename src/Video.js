import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({ 
    url,
    channel,
    messages,
    description,
    song,
    likes,
    shares
 }) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false);
        } else {
            videoRef.current.play()
            setPlaying(true);
            console.log(url)
        }
    }

    return (
        <div className="video">
            <iframe
                className='video__player'
                ref={videoRef}
                onClick={handleVideoPress}
                src={url}
                frameBorder="0"
                title='video'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            />

            <VideoSidebar 
                likes={likes}
                shares={shares}
                messages={messages}
            />
        </div>
	);
}

export default Video
