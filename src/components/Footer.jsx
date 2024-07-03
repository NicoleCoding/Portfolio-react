import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="m-5 text-black">
            <p>&copy; 2024 NicoleCoding. All rights reserved.</p>
            <div>

                   <a href="" className="flex items-center justify-center"><FaLinkedin />LinkedIn</a>
                <a href="" className="flex items-center justify-center"><FaGithub />GitHub</a>
            </div>
        
        </footer>

    );
    
}