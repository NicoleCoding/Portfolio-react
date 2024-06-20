import Slider from "react-slick";

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
        <div className="w-4/5 mx-auto p-5">
            <Slider {...settings}>
                {projects.map(project => (
                    <div key={project.id} className="text-center">
                        <h3 className="mb-2 text-2xl">{project.title}</h3>
                        <p className="text-base text-gray-600">{project.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProjectCarousel;