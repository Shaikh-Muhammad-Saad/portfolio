import { useState, useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

import { Element, scroller } from 'react-scroll';

const ProjectsPaginatedContainer = ({ imagesList }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageStatus, setImageStatus] = useState({}); // Track loading status for each image

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    const handleImageLoad = (index) => {
        setImageStatus(prev => ({
            ...prev,
            [index]: { loaded: true, failed: false }
        }));
    };

    const handleImageError = (index) => {
        setImageStatus(prev => ({
            ...prev,
            [index]: { loaded: false, failed: true }
        }));
    };

    // Initialize image status when imagesList changes
    useEffect(() => {
        const newStatus = {};
        imagesList.forEach((_, index) => {
            if (!imageStatus[index]) {
                newStatus[index] = { loaded: false, failed: false };
            }
        });

        if (Object.keys(newStatus).length > 0) {
            setImageStatus(prev => ({ ...prev, ...newStatus }));
        }
    }, [imagesList]);

    return (
        <>
            <style>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    grid-gap: 30px;
                    margin: 40px 0;
                    width: 100%;
                }
                
                .project-item {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    cursor: pointer;
                    aspect-ratio: 4/3;
                }
                
                .project-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
                    z-index: 2;
                }
                
                .image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    border-radius: 12px;
                }
                
                .image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                    display: block;
                }
                
                .project-item:hover .image-wrapper img {
                    transform: scale(1.05);
                }
                
                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 200%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    display: flex;
                    align-items: flex-end;
                    padding: 20px;
                    z-index: 1;
                }
                
                .project-item:hover .image-overlay {
                    opacity: 1;
                }
                
                .image-info {
                    color: white;
                    transform: translateY(20px);
                    transition: transform 0.3s ease;
                }
                
                .project-item:hover .image-info {
                    transform: translateY(0);
                }
                
                .image-info h4 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 5px;
                }
                
                .image-info p {
                    font-size: 14px;
                    opacity: 0.8;
                    margin: 0;
                }
                
                .zoom-icon {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transform: scale(0.8);
                    transition: all 0.3s ease;
                    z-index: 1;
                }
                
                .project-item:hover .zoom-icon {
                    opacity: 1;
                    transform: scale(1);
                }
                
                .zoom-icon i {
                    color: white;
                    font-size: 18px;
                }
                
                .loading-placeholder {
                    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                    background-size: 200% 100%;
                    animation: loading 1.5s infinite;
                    border-radius: 12px;
                    width: 100%;
                    height: 100%;
                }
                
                @keyframes loading {
                    0% {
                        background-position: 200% 0;
                    }
                    100% {
                        background-position: -200% 0;
                    }
                }
                
                .error-placeholder {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f8f9fa;
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    width: 100%;
                    height: 100%;
                }
                
                .error-placeholder i {
                    font-size: 40px;
                    color: #ccc;
                    margin-bottom: 15px;
                }
                
                .error-placeholder p {
                    margin: 0;
                    color: #666;
                }
                
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                        grid-gap: 20px;
                    }
                }
                
                @media (max-width: 480px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <Element name="section">
                <section className="py-80 rpy-50">
                    <div className="container container-1290">
                        {/* Projects Grid */}
                        <div className="projects-grid">
                            {imagesList && imagesList.length > 0 ? (
                                imagesList.map((src, index) => {
                                    const status = imageStatus[index] || { loaded: false, failed: false };
                                    const isLoaded = status.loaded;
                                    const isFailed = status.failed;

                                    return (
                                        <div
                                            key={index}
                                            className="project-item wow fadeInUp"
                                            onClick={() => setSelectedImage({ imgIndex: index })}
                                            data-wow-delay={`${(index % 6) * 0.1}s`}
                                        >
                                            <div className="image-wrapper">
                                                {!isLoaded && !isFailed && (
                                                    <div className="loading-placeholder"></div>
                                                )}

                                                {isFailed && (
                                                    <div className="error-placeholder">
                                                        <i className="fas fa-image"></i>
                                                        <p>Failed to load image</p>
                                                    </div>
                                                )}

                                                <img
                                                    src={src}
                                                    alt={`Project ${index + 1}`}
                                                    loading="lazy"
                                                    decoding="async"
                                                    onLoad={() => handleImageLoad(index)}
                                                    onError={() => handleImageError(index)}
                                                    style={{
                                                        display: 'block',
                                                        opacity: isLoaded && !isFailed ? 1 : 0,
                                                        transition: 'opacity 0.3s ease'
                                                    }}
                                                />

                                                <div className="image-overlay">
                                                    <div className="image-info">
                                                        <h4>Project View</h4>
                                                        <p>Click to enlarge</p>
                                                    </div>
                                                </div>

                                                <div className="zoom-icon">
                                                    <i className="fas fa-search-plus"></i>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
                                    <p>No images available for this project.</p>
                                </div>
                            )}
                        </div>

                        {/* Lightbox */}
                        {selectedImage && (
                            <Lightbox
                                onClose={() => setSelectedImage(null)}
                                images={imagesList.map((img, idx) => ({
                                    url: img,
                                    title: `Project Image ${idx + 1}`
                                }))}
                                startIndex={selectedImage.imgIndex}
                                doubleClickZoom={2}
                                allowZoom={true}
                                showThumbnails={true}
                                showCaption={true}
                            />
                        )}
                    </div>
                </section>
            </Element>
        </>
    );
};

export default ProjectsPaginatedContainer;