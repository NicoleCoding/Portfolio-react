export default function About() {
    return (
       <section>
        <h2 className="font-bold text-4xl text-teal-500">About</h2>
        <section className="flex flex-col items-center">
        <p className="p-3 m-2 w-4/5">I am recent graduate in Information architecture with a passion for development of various types of software, especially within the web. Through my degree
            I acquired a solid foundation in structuring and designing digital environments. My education has equipped me with a deep understanding of user experience principles, 
            information organization, and the latest web technologies.
        </p>
        <p className="p-3 m-2 w-4/5">Bringing skills and enthusiasm to a dynamic team, where I can contribute to creating exceptional user experiences and innovative web solutions, is something I look forward to.
            My goal is to work in a role, that allows me to combine my design capabilities with my technical knowledge to solve real-world problems and enhance user satisfaction.</p>
        </section>
        <section className="bg-gradient-to-r from-teal-200 to-teal-500 p-4 rounded-lg mt-16 p-8">
            <p>Throughout my academic journey and through additional self-studies, I have developed a diverse skill set, which includes:</p>
            <ul className="flex flex-col items-center">
                <h2 className="font-bold text-2xl pt-5">Skills</h2>
                    <li >HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Git</li>
                    <li>UX-design</li>
                    <li>Adobe PhotoShop</li>
                    <li>Adobe XD</li>
                    <li>Figma</li>
                    <li>Prototyping</li>
            </ul>
        </section>
        </section>

    );
}