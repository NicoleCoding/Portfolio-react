export default function Projects() {
    const projects = [{
        id: "",
        title: "",
        description: "",

    },
    {   
        id: "",
        title: "",
        description: "",

    },
    {   
        id: "",
        title: "",
        description: "",
    },
    {   
        id: "",
        title: "",
        description: "",
    },
    {   
        id: "",
        title: "",
        description: "",
    }
];

const renderProjects = () => {
    return projects.map(project => (
        <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    ));

};


    return (
        <section id="projects-display">
            <h2 className="font-bold">Projects</h2>
            <div id="projects">
                {renderProjects()};
            </div>
        </section>
        


    );
}