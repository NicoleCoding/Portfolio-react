import { PiEnvelope } from "react-icons/pi";

export default function Contact() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <h2 className="font-bold text-4xl text-teal-500">Contact</h2>
                <PiEnvelope className="text-teal-500 m-2" size={40}/>
            </div>
            <form className="bg-gray-200 w-25 m-20 rounded-lg">
                <label htmlFor="Name" className="mb-3 block text-base font-medium text-black">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" className="rounded-md border border-[#e0e0e0] bg-white py-6 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                <label htmlFor="Email" className="mb-2 block text-base font-medium text-[#07074D]">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" className="rounded-md border border-[#e0e0e0] bg-white py-6 px-6 mb-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></input>
                <label htmlFor="Message" className="mb-3 block text-base font-medium text-[#07074D]">Message</label>
                <textarea placeholder="Enter your message here..." className="rounded-md border border-[#e0e0e0] bg-white py-10 px-10 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
            </form>
        </section>

    );
    
}