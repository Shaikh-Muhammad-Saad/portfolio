import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

import { Element, scroller } from 'react-scroll';



const ProjectsPaginatedContainer = ({ imagesList }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);

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

                        {currentItems.map((src, index) => (
                            <div key={index} className="col-lg-6 col-md-12 " onClick={() => setSelectedImage({ imgIndex: index })}>
                                <div className=" wow fadeInUp delay-0-3s">
                                    <div className="image-container">
                                        <img className="img-fluid" src={src} alt="Blog" />
                                    </div>
                                </div>
                            </div>
                        ))}


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