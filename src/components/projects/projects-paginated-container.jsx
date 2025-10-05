import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

import { Element, scroller } from 'react-scroll';



const ProjectsPaginatedContainer = ({ imagesList }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [failedImages, setFailedImages] = useState(new Set());

    // const itemsPerPage = 10;
    const itemsPerPage = 100;
    // const itemsPerPage = 20;


    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    const handleImageLoad = (index) => {
        setLoadedImages(prev => new Set([...prev, index]));
    };

    const handleImageError = (index) => {
        setFailedImages(prev => new Set([...prev, index]));
    };


    const handleClick = (pageNumber) => {
        scrollToSection('section')
        setCurrentPage(pageNumber);
    };

    const handlePrevClick = () => {
        scrollToSection('section')
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        scrollToSection('section')
        if (currentPage < Math.ceil(imagesList.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = imagesList.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(imagesList.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }



    return (<>

        <Element name="section">
            <section className="blog-page-area py-130 rpy-100 rel z-1" >

                <div className="container container-1290">

                    <div className="row">

                        {currentItems.map((src, index) => {
                            const globalIndex = indexOfFirstItem + index;
                            const isLoaded = loadedImages.has(globalIndex);
                            const isFailed = failedImages.has(globalIndex);

                            return (
                                <div key={index} className="col-lg-6 col-md-12 " onClick={() => setSelectedImage({ imgIndex: index })}>
                                    <div className=" wow fadeInUp delay-0-3s">
                                        <div className="image-container" style={{ position: 'relative' }}>
                                            {!isLoaded && !isFailed && (
                                                <div className="image-placeholder" style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: '#f0f0f0',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '2px',
                                                    zIndex: 1
                                                }}>
                                                    <div className="spinner" style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        border: '4px solid #e0e0e0',
                                                        borderTop: '4px solid #2fb97a',
                                                        borderRadius: '50%',
                                                        animation: 'spin 1s linear infinite'
                                                    }}></div>
                                                </div>
                                            )}

                                            {isFailed && (
                                                <div className="image-error" style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: '#f8f8f8',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '2px',
                                                    border: '1px solid #ddd',
                                                    color: '#999'
                                                }}>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <i className="fas fa-image" style={{ fontSize: '24px', marginBottom: '8px' }}></i>
                                                        <div style={{ fontSize: '12px' }}>Failed to load</div>
                                                    </div>
                                                </div>
                                            )}

                                            <img
                                                className="img-fluid"
                                                src={src}
                                                alt="Project Image"
                                                loading="lazy"
                                                decoding="async"
                                                onLoad={() => handleImageLoad(globalIndex)}
                                                onError={() => handleImageError(globalIndex)}
                                                style={{
                                                    opacity: isLoaded ? 1 : 0,
                                                    transition: 'opacity 0.3s ease-in-out'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                        {selectedImage ?
                            <Lightbox
                                onClose={() => setSelectedImage(null)}
                                images={currentItems.map((img) => ({ url: img }))}
                                startIndex={selectedImage.imgIndex}
                                doubleClickZoom={0.5}
                                allowZoom={true}

                            /> : null
                        }


                        {/* PAGINATION  */}
                        <div className="col-lg-12">
                            <ul className="pagination mt-10 flex-wrap justify-content-center wow fadeInUp delay-0-2s">
                                <li
                                    className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="page-link" onClick={handlePrevClick}>
                                        <i className="fas fa-angle-left" />
                                    </span>
                                </li>
                                {pageNumbers.map((number) => (
                                    <li
                                        key={number}
                                        className={`page-item ${currentPage === number ? "active" : ""}`}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span className="page-link" onClick={() => handleClick(number)}>
                                            {number < 10 ? `0${number}` : number}
                                            {currentPage === number && <span className="sr-only">(current)</span>}
                                        </span>
                                    </li>
                                ))}
                                <li
                                    className={`page-item ${currentPage === pageNumbers.length ? "disabled" : ""}`}
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="page-link" onClick={handleNextClick}>
                                        <i className="fas fa-angle-right" />
                                    </span>
                                </li>
                            </ul>
                        </div>



                    </div>
                </div>
            </section>
        </Element>
    </>)
}

export default ProjectsPaginatedContainer;