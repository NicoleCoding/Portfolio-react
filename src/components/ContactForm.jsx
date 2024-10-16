import { useState } from "react";
import Input from "./Input";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className="bg-contact-form-background bg-no-repeat bg-cover max-w-md mx-auto p-10 rounded-lg" onSubmit={handleSubmit}>
            <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
            />
            <Input
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={10}
            />
            <button className="bg-teal-200 w-80" type="submit">Submit</button>

        </form>

    );
}