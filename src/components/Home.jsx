import { Link } from 'wouter';

export default function Home() {
    return (
        <section>
            <h2 className="font-bold text-4xl">Frontend developer with UX skills</h2>
            <p className="p-3">Welcome to my portfolio! My name is Nicole and I am an aspiring frontend developer with UX skills. With a solid foundation in HTML, CSS and JavaScript, in combination with my UX
                skills, I aim to create amazing user experiences. Always learning and keen to sharpen my expertise in various technologies, since this field is always evolving.
            </p>
            <ul>
                <h2 className="font-bold text-2xl pt-5">Some of my skills</h2>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li><Link href='/about'>...and more</Link></li>
            </ul>

        </section>
    
        

    );
}