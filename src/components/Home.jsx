import { Link } from "wouter";

export default function Home() {
    return (
        <section className="container mx-auto p-4 md:p-8 max-w-screen-6xl">
            <section id="hero" className="relative flex flex-col md:flex-col justify-between items-center bg-hero-background bg-no-repeat bg-cover p-5 text-white rounded-lg h-25 bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-white p-8 flex flex-col items-center justify-center h-full">
            <h2 className="font-bold text-4xl text-teal-500">Frontend developer with UX skills</h2>
                <p className="p-3 text-xl">Welcome to my portfolio! I am an aspiring frontend developer with UX skills. With a solid foundation in HTML, CSS and JavaScript, in combination with my knowledge of various
                    UX principles, I aim to create amazing user experiences. Always learning and keen to sharpen my expertise in various technologies, since this field is always evolving.
                </p>
                <button className="bg-teal-200"><Link className="py-1 px-2 text-black hover:text-teal-500" href="/projects">See my projects</Link></button>
            </div>
            </section>
            <section id="roles" className="flex flex-col m-5 p-5 lg:flex-row justify-center items-stretch gap-40">
                <section className="bg-gradient-to-r from-teal-200 to-teal-500 p-2 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-center">
                    <h2 className="text-2xl p-2">Frontend Developer</h2>
                    <p className="p-2 m-4">With skills in HTML5, CSS3 and React.js, I am able to develop frontends. In addition to the foundational skills, I have knowledge of Git, Webpack, Vite and APIs.
                        Knowledge of accessibility and web standards ensures that I develop web user interfaces, that are accessible and usable. 
                    </p>

                </section>
                <section className="bg-gradient-to-r from-teal-200 to-teal-500 p-2 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-center">
                    <h2 className="text-2xl p-2">UX-Designer</h2>
                    <p className="p-2 m-4">As mentioned, I have knowledge of various UX-design principles, which enable me to design usable and great user experiences. Knowledge of tools such as Figma, Adobe XD, Photoshop and Illustrator
                        help me to create those great user experiences. 
                    </p>

                </section>
                <section className="bg-gradient-to-r from-teal-200 to-teal-500 p-2 mx-auto lg:mx-0 rounded-lg w-80 text-center flex flex-col justify-center">
                    <h2 className="text-2xl p-2">Content Manager and SEO Strategist</h2>
                    <p className="p-2 m-4">Other areas in which I gained knowledge in during my education are Content Management and SEO. Combined with knowlegde in HTML5, I use SEO-principles to create SEO-strategies
                        that will make websites easier to find. In addition to SEO, I am able to handle Content Management, where I use principles of Information Architecture to make content understandable
                        and findable. 
                    </p>

                </section>
            </section>
    

        </section>
    
        

    );
}