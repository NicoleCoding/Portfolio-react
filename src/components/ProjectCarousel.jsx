import Slider from "react-slick";

const projects = [{
    id: "1",
    title: "Hotel booking application",
    description: "The project aimed to create a specific application for a specific use case scenario/persona. The application was developed using React.js for structure and functionality, Bootstrap for consistent styling.",
    prototypeimage: "/prototype-hotel-app.PNG",
    prototypelink: "https://xd.adobe.com/view/81d58dae-96aa-461d-a13b-aad454e05284-d486/?fullscreen",
    codelink: ""
},
{   
    id: "2",
    title: "Informative application about climate change",
    description: "The project was about creating an informative application for a specific target audience. The application contains charts which were created with the help of the Recharts library. React.js and Bootstrap were used in the development of the application.",
    prototypeimage: "/prototype-climate-app.PNG",
    prototypelink: "https://www.figma.com/proto/i4azN0R2dxPi7F37P1gdhf/Personas%2C-user-stories%2C-user-journeys%2C-UML-diagram%2C-task-analysis%2C-lo-fi-prototype%2C-hi-fi-prototype?node-id=431-648&t=kNw0GHv3cTSrTmVk-1&scaling=scale-down&content-scaling=fixed&page-id=432%3A221",
    codelink: "https://github.com/KlimatKoll/KlimatKoll-App"
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
        <div className="w-4/5 mx-auto p-7">
            <Slider {...settings}>
                {projects.map(project => (
                    <div key={project.id} className="text-center">
                        <h3 className="mb-2 p-2 text-2xl font-semibold">{project.title}</h3>
                        <p className="text-base text-gray-600 p-2">{project.description}</p>
                        <img src={project.prototypeimage} alt={project.title} width="1000rem" className="mx-auto"
                         onError={(e) => {
                            console.error('Image failed to load:', project.prototypeimage);
                            e.target.style.display = 'none'; // Hide broken image
                          }}
                        />
                        <div id="links" className="flex flex-col">
                            <a className="p-2 hover:text-teal-400" href={project.prototypelink}>Link to the prototype</a>
                            <a className="p-2 hover:text-teal-400" href={project.codelink}>Link to the code</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProjectCarousel;