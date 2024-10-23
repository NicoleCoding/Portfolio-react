import { Link, useRoute } from "wouter";
import Button from "../components/Button";

const projectData = {
    "1": {
        title: "Hotel booking application - Palm Booking Agency",
        description: "The project aimed to create a specific application for a specific use case scenario/persona. The application was developed using React.js for structure and functionality, Bootstrap for consistent styling.",
        projectImage: "/prototype-hotel-app.PNG",
        liveVersion: "",
        codelink: "https://github.com/PalmBookingAgency/HotelApp",
    },
    "2": {
        title: "Informative application about climate change - KlimatKoll",
        description: "The project was about creating an informative application for a specific target audience. The application contains charts which were created with the help of the Recharts library. React.js and Bootstrap were used in the development of the application.",
        projectImage: "/prototype-climate-app.PNG",
        liveVersion: "",
        codelink: "https://github.com/KlimatKoll/KlimatKoll-App",

    },
    "3": { 
        title: "Library App - BookVault",
        description: "This is a React-based web application, which allows users to search for books, and also add books to their own collection. In the collection, users can toggle the read status and also remove books. The application gives users the opportunity to find books that they want to read and add them to a collection in case they want to read a specific book or specific books.",
        projectImage: "/library-app-img.PNG",
        liveVersion: "",
        codeLink: "https://github.com/NicoleCoding/BookVault",
    }

};

export default function Project() {
    const [match, params] = useRoute("/projects/:id");
    const projectID = params.id;
    const project = projectData[projectID];

    if(!project) {
        return <div>Project not found.</div>
    }

    return (
        <div className="p-5 font-custom">
                <Link href="/projects">
                <Button text="Go back to projects"></Button>
                </Link>
                <h2 className="font-bold text-4xl text-teal-500 m-2">{project.title}</h2>
                <p className="text-base text-gray-600 p-2">{project.description}</p>
                <img src={project.projectImage} alt={project.title} width="1000rem" className="mx-auto"
                    onError={(e) => {
                    console.error('Image failed to load:', project.projectImage);
                    e.target.style.display = 'none'; // Hide broken image
                    }}
                />
                <div id="links" className="flex flex-row justify-center pt-4">
                    <a className="p-2 hover:text-teal-400" href={project.liveVersion}>View the live version</a>
                    <a className="p-2 hover:text-teal-400" href={project.codelink}>View the code</a>
                </div>
            </div>
    )
}