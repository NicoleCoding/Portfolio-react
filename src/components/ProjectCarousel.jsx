import Slider from "react-slick";
import { Link } from "wouter";
import Button from "./Button";
import '../custom-carousel.css'; 

const projects = [{
    id: "1",
    title: "Hotel booking application - Palm Booking Agency",
    projectImage: "https://nicolecoding.github.io/Portfolio-site/prototype-hotel-app.png"
},
{   
    id: "2",
    title: "Informative application about climate change - KlimatKoll",
    projectImage: "https://nicolecoding.github.io/Portfolio-site/prototype-climate-app.png"
},
{
    id: "3",
    title: "Library App - BookVault",
    projectImage: "https://nicolecoding.github.io/Portfolio-site/library-app-img.png"

}
];

export default function ProjectCarousel() {
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
        <div className="w-4/5 mx-auto pb-10">
            <Slider {...settings}>
                {projects.map(project => (
                    <div key={project.id} className="text-center">
                        <h3 className="mb-2 p-2 text-2xl font-semibold">{project.title}</h3>
                        <img src={project.projectImage} alt={project.title} width="1000rem" className="mx-auto p-2"
                         onError={(e) => {
                            console.error('Image failed to load:', project.projectImage);
                            e.target.style.display = 'none'; // Hide broken image
                          }}
                        />
                        <Link href={`/projects/${project.id}`} className="py-1 px-2 text-black hover:text-teal-500">
                            <Button className="bg-teal-200 m-2" text="View project details"></Button>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
