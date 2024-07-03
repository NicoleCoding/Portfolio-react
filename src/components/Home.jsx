import { Link } from "wouter";

export default function Home() {
    return (
        <section className="container mx-auto p-4 md:p-8 max-w-screen-4xl">
            <section id="hero" className="relative flex flex-col md:flex-col justify-between items-center bg-hero-background bg-no-repeat bg-cover p-5 text-white rounded-lg h-25 bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-8 text-white p-8 flex flex-col items-center justify-center h-full">
            <h2 className="font-bold text-4xl text-teal-500">Creating clean, usable user interfaces with creativity and Information Architecture expertise</h2>
                <p className="p-3 text-xl">Welcome to my portfolio! I am an aspiring frontend developer with UX skills. With a solid foundation in HTML, CSS and JavaScript, in combination with my knowledge of various
                    UX principles, I aim to create amazing user experiences. Always learning and keen to sharpen my expertise in various technologies, since this field is always evolving.
                </p>
                <button className="bg-teal-200"><Link className="py-1 px-2 text-black hover:text-teal-500" href="/projects">See my projects</Link></button>
            </div>
            </section>
            <section id="roles" className="flex flex-col m-x p-1 lg:flex-row justify-center items-stretch gap-20">
                <section className="shadow-lg p-6 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-start">
                    <h2 className="text-2xl mb-4 mt-0">Frontend Development</h2>
                    <p className="p-2 m-0">With skills in HTML5, CSS3, JavaScript (ES6), and React.js, I develop frontends using tools like Git, Webpack, Vite, and npm. 
                        I ensure accessibility and usability in web interfaces and leverage APIs to create functional websites and applications. Additionally, I can build websites with WordPress.
                    </p>

                </section>
                <section className="shadow-lg p-6 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-start">
                    <h2 className="text-2xl mb-4 mt-0">UX-Design & Research</h2>
                    <p className="p-2 m-0">I use UX design principles to create great user experiences, backed by research on target users. 
                        My education covers user personas, storyboards, and user stories, enabling effective UX research. I also use tools like Figma and Photoshop to prototype designs.
                    </p>

                </section>
                <section className="shadow-lg p-6 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-start">
                    <h2 className="text-2xl mb-4 mt-0">Content Management</h2>
                    <p className="p-2 m-0">During my education, I gained skills in Content Management and SEO. Using HTML5 and SEO principles, I create strategies for high-ranking, visible websites. 
                        I apply Information Architecture to make content clear and accessible, and I am proficient with WordPress and adaptable to other CMS platforms.
                    </p>

                </section>
            </section>
    

        </section>
    
        

    );
}