import { Link } from "wouter";

export default function Home() {
    return (
        <section className="container mx-auto p-4 md:p-8">
            <section id="intro" className="flex flex-col md:flex-row justify-between items-center">
                <h2 className="font-bold text-4xl">Frontend developer with UX skills</h2>
                <p className="p-3">Welcome to my portfolio! My name is Nicole and I am an aspiring frontend developer with UX skills. With a solid foundation in HTML, CSS and JavaScript, in combination with my UX
                    skills, I aim to create amazing user experiences. Always learning and keen to sharpen my expertise in various technologies, since this field is always evolving.
                </p>

            </section>
            <ul className="bg-gradient-to-r from-teal-200 to-teal-500 p-2 rounded-lg mt-5 w-60 flex flex-col items-center">
            <h2 className="font-bold text-2xl pt-5">Relevant skillset</h2>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li><Link href="/about">...and more</Link></li>
            </ul>

        </section>
    
        

    );
}