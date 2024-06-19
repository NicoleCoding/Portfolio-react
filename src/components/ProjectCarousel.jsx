import Slider from "react-slick";
import './ProjectCarousel.css';

const projects = [{
    id: "1",
    title: "E-commerce application",
    description: "",

},
{   
    id: "2",
    title: "Task management application",
    description: "",

},
{   
    id: "3",
    title: "Hotelbooking application",
    description: "",
},
{   
    id: "4",
    title: "Recipe application",
    description: "",
},
{   
    id: "5",
    title: "",
    description: "",
}
];

function ProjectCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {projects.map(project => (
                    <div key={project.id} className="project-slide">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProjectCarousel;