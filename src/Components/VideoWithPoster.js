import React, { useEffect, useRef } from 'react';

const VideoWithPoster = ({ src }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const captureFirstFrame = () => {
            if (video.readyState >= 2) {
                // Ensure the video has loaded enough data
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                // Draw the first frame of the video onto the canvas
                context.drawImage(
                    video,
                    0,
                    0,
                    video.videoWidth,
                    video.videoHeight
                );

                // Convert canvas to data URL and set it as background
                const dataUrl = canvas.toDataURL();
                video.style.backgroundImage = `url(${dataUrl})`;
                video.style.backgroundSize = 'cover';

                console.log('Poster set successfully:', dataUrl); // Debugging output
            } else {
                console.log('Video not ready for capture, retrying...');
                setTimeout(captureFirstFrame, 100); // Retry after a delay
            }
        };

        video.addEventListener('loadeddata', captureFirstFrame);

        // Cleanup event listener on unmount
        return () => video.removeEventListener('loadeddata', captureFirstFrame);
    }, []);

    return (
        <>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <video
                ref={videoRef}
                controls
                preload="auto"
                src={src}
                className="video"
            >
                Your browser does not support the video tag.
            </video>
        </>
    );
};

export default VideoWithPoster;
