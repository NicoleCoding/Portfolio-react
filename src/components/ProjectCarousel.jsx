import Slider from "react-slick";
import './ProjectCarousel.css';

function ProjectCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                
            </Slider>
        </div>
    )
}

export default ProjectCarousel;