import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { videos } from '../data';
import { useState, useEffect } from 'react';
import Resizer from 'react-image-file-resizer';
import VideoWithPoster from './VideoWithPoster';

const DIV = styled.div`
    display: grid;
    gap: 50px;
    margin-top: 100px;

    h2 {
        text-align: center;
        width: 90%;
        margin: auto;
    }
`;

const MasonryGrid = styled.div`
    .image-grid {
        column-count: 5; /* Number of columns; adjust for responsive design */
        column-gap: 10px; /* Gap between columns */
        width: 90%;
        margin: auto;
    }

    img {
        width: 100%; /* Ensures images scale to column width */
        margin-bottom: 10px; /* Space between images */
        display: inline-block;
    }
    .container {
        display: grid;
        place-items: center; /* Centers the grid horizontally and vertically */
        padding: 20px; /* Optional: adds padding */
    }
    .video-grid {
        display: grid;
        grid-template-columns: repeat(
            auto-fill,
            minmax(250px, 1fr)
        ); /* Creates responsive columns */
        gap: 16px; /* Space between videos */
        width: 90%;
        margin: auto;
    }

    @media (max-width: 800px) {
        .image-grid {
            column-count: 3;
        }
        .video-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }
    .video-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px; /* Optional: for rounded corners */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow */
    }

    .video {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures the video fits within its container */
        border-radius: 8px; /* Optional: for rounded corners */
        background-color: black;
    }

    /* Title Styling */
    .video-title {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 20px;
        font-weight: bold;
    }
`;

const MediaGrid = ({ title, folderKey }) => {
    const [media, setImages] = useState([]);

    useEffect(() => {
        const imageFolders = {
            day1: require.context(
                '../assets/days/1',
                false,
                /\.(png|jpe?g|svg)$/
            ),
            day2: require.context(
                '../assets/days/2',
                false,
                /\.(png|jpe?g|svg)$/
            ),
            summer: require.context(
                '../assets/summer',
                false,
                /\.(png|jpe?g|svg)$/
            ),
            // Add more folders as needed
        };

        const resizeImage = (file) => {
            return new Promise((resolve, reject) => {
                Resizer.imageFileResizer(
                    file,
                    800, // Max width
                    600, // Max height
                    'JPEG', // Format (you can change to PNG or WEBP if needed)
                    20, // Quality (0-100)
                    0, // Rotation (0 means no rotation)
                    (uri) => {
                        resolve(uri); // Return the base64 encoded image
                    },
                    'base64' // Return as base64 encoded image
                );
            });
        };
        // Function to fetch and convert image to a Blob
        const fetchImageBlob = async (imageUrl) => {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            return blob;
        };

        const pros_images = (r) => {
            const ii = r.keys().map((fileName, index) => {
                const fileUrl = r(fileName);

                return fetchImageBlob(fileUrl)
                    .then(resizeImage)
                    .then((resizedImage) => ({
                        id: index + 1,
                        file: resizedImage, // Base64-encoded resized image
                        type: 'image',
                    }))
                    .catch((error) =>
                        console.error('Error resizing image:', error)
                    );
            });

            return ii;
        };

        const importAll = (imagez, videos) => {
            // Step 1: Process images

            // Return a Promise that resolves to an array with images first and videos last
            if (imagez && videos) {
                const images = pros_images(imagez);
                return Promise.all(images).then((processedImages) => [
                    ...processedImages,
                    ...videos,
                ]);
            } else if (imagez) {
                const images = pros_images(imagez);
                return Promise.all(images).then((processedImages) => [
                    ...processedImages,
                ]);
            }
        };

        if (imageFolders[folderKey] && videos[folderKey]) {
            importAll(imageFolders[folderKey], videos[folderKey])
                .then((processedImages) => {
                    setImages(processedImages);
                })
                .catch((error) =>
                    console.error('Error importing images:', error)
                );
        } else if (imageFolders[folderKey]) {
            importAll(imageFolders[folderKey])
                .then((processedImages) => {
                    setImages(processedImages);
                })
                .catch((error) =>
                    console.error('Error importing images:', error)
                );
        } else if (videos[folderKey]) {
            setImages(videos[folderKey]);
        }
    }, [folderKey]);

    return (
        <DIV>
            <h2 className="title">{title}</h2>
            <MasonryGrid>
                <div className="image-grid">
                    {media.length > 0 &&
                        media.map(
                            (item) =>
                                item.type === 'image' && (
                                    <div className="kkk" key={item.id}>
                                        <LazyLoadImage
                                            effect="black-and-white"
                                            src={item.file}
                                            alt={`Image ${item.id}`}
                                        />
                                    </div>
                                )
                        )}
                </div>
                <div className="container">
                    <div className="video-grid">
                        {media.length > 0 &&
                            media.map(
                                (item) =>
                                    item.type === 'video' && (
                                        <div
                                            className="video-item"
                                            key={item.id}
                                        >
                                            <VideoWithPoster src={item.file} />
                                        </div>
                                    )
                            )}
                    </div>
                </div>
            </MasonryGrid>
        </DIV>
    );
};

export default MediaGrid;
