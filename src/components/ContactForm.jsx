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
        <form className="bg-gray-200 max-w-md mx-auto" onSubmit={handleSubmit}>
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
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                row={4}
            />
            <button type="submit">Submit</button>

        </form>

    );
}