import { PiEnvelope } from "react-icons/pi";

export default function Contact() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <h2 className="font-bold text-4xl text-teal-500">Contact</h2>
                <PiEnvelope className="text-teal-500 m-2" size={40}/>
            </div>
            <p>Here a contact form will be built..</p>
        </section>

    );
    
}