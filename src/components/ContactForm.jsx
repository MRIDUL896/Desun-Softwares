"use client"
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        businessName: '',
        businessMail: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div className="space-x-16 bg-gradient-to-r from-yellow-500 to-green-800 w-full p-10">
            <div className="flex justify-center items-center mx-16 space-x-16">
            <div className='text-white'>
                <h2>Let's discuss Your project</h2>
                <span>Let's figure out how to create an effective application,its cost and terms of its development</span>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-2xl max-w-xl rounded-xl md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="flex items-end justify-end space-x-2">
                    <div>
                        <span className="text-sm">Full Name</span>
                        <input
                            type="text"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 mb-4 border-b"
                        />
                        <span className="text-sm">Business Name</span>
                        <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 mb-4 border-b"
                        />
                    </div>
                    <div>
                        <span className="text-sm">Phone Number</span>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 mb-4 border-b"
                        />
                        <span className="text-sm">Business Mail</span>
                        <input
                            type="email"
                            name="businessMail"
                            value={formData.businessMail}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 mb-4 border-b"
                        />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="w-full bg-yellow-600 text-white py-2 px-4 rounded-xl hover:bg-yellow-800 transition duration-300">
                            Discuss
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ContactForm;