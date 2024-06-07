export default function About() {
    return (
       <section>
        <h2 className="font-bold text-4xl">About</h2>
        <p className="p-3">Here comes stuff about me</p>
        <section className="bg-gradient-to-r from-teal-200 to-teal-500 p-4 rounded-lg mt-16 p-8">
        <ul flex flex-col items-center>
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