import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    // State to switch videos
    const [currentVideo, setCurrentVideo] = useState("https://videos.pexels.com/video-files/4510622/4510622-uhd_2560_1440_24fps.mp4");

    // Video URLs
    const videoURLs = [
        "https://videos.pexels.com/video-files/4510622/4510622-uhd_2560_1440_24fps.mp4",
        "https://videos.pexels.com/video-files/5553467/5553467-uhd_2560_1440_24fps.mp4"
    ];

    useEffect(() => {
        // Change video every 60 seconds
        const interval = setInterval(() => {
            setCurrentVideo((prevVideo) =>
                prevVideo === videoURLs[0] ? videoURLs[1] : videoURLs[0]
            );
        }, 60000); // 60,000ms = 60 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[42rem] overflow-hidden">
            {/* Background Video with Dynamic Switching */}
            <video
                key={currentVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white text-center p-10 flex flex-col items-center justify-center h-full">
                <h1 className=" unleash text-4xl font-bold">Unleash Your Style with Nike</h1>
                <button className="border border-white text-white hover:bg-white hover:text-black transition-all ease-in-out px-12 py-3 rounded-lg mt-4">
                    Explore Collection
                </button>


            </div>
        </div>
    );
};

export default Hero;
