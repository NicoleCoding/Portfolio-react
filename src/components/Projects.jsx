import ProjectCarousel from "./ProjectCarousel";
import { LuRocket } from "react-icons/lu";

export default function Projects() {



    return (
        <section id="projects-display">
            <div className="flex items-center justify-center">
                <h2 className="font-bold text-4xl text-teal-500">Projects</h2>
                <LuRocket className="text-teal-500 m-2"/>
            </div>
            <ProjectCarousel />
            
        </section>
        


    );
}