import { useState } from "react";


const ProjectsPaginatedContainer = ({ imagesList }) => {


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
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
        <section className="blog-page-area py-130 rpy-100 rel z-1">
            <div className="container container-1290">
                <div className="row">


                    {currentItems.map((src, index) => (
                        <div key={index} className="col-xl-4 col-md-6">
                            <div className="blog-item wow fadeInUp delay-0-6s">
                                <div className="image-container">
                                    <img className="img-fluid" src={src} alt="Blog" />
                                </div>
                            </div>
                        </div>
                    ))}



                    <div className="col-lg-12">
                        <ul className="pagination mt-10 flex-wrap justify-content-center wow fadeInUp delay-0-2s">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <span className="page-link" onClick={handlePrevClick}>
                                    <i className="fas fa-angle-left" />
                                </span>
                            </li>
                            {pageNumbers.map((number) => (
                                <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
                                    <span className="page-link" onClick={() => handleClick(number)}>
                                        {number < 10 ? `0${number}` : number}
                                        {currentPage === number && <span className="sr-only">(current)</span>}
                                    </span>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === pageNumbers.length ? "disabled" : ""}`}>
                                <span className="page-link" onClick={handleNextClick}>
                                    <i className="fas fa-angle-right" />
                                </span>
                            </li>
                        </ul>
                    </div>



                </div>
            </div>
        </section>
    </>)
}

export default ProjectsPaginatedContainer;