"use client"
import { useState } from 'react';

export default function Hero() {
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
    <section className="bg-blue-50 py-20 mx-16 my-7 md:py-10 lg:py-20 xl:py-30">
      <div className="container px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="max-w-2xl my-12 ">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6 md:text-3xl lg:text-4xl xl:text-5xl">
            User-Centric Excellence: <span className="text-black">Our App Development services Tackles Your Pain Points</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 md:text-lg lg:text-xl xl:text-2xl">
            Experience a Seamless Digital Journey with <span className="font-extrabold text-green-800">Desun</span> - Where Every Line of Code Resolves Your Challenges and
            <span className="font-bold text-yellow-400"> Elevates Your App Experience</span> to Unparalleled Heights.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-2xl max-w-xl rounded-xl md:max-w-md lg:max-w-lg xl:max-w-xl">
          <h2 className="text-xl font-bold mb-6">
            Leave your contacts and we will call you back within 30 minutes
          </h2>
          <div className="flex flex-col md:flex-row items-end justify-end space-x-2">
            <div>
              <span className="text-sm">Full Name</span>
              <input
                type="text"
                name='fullname'
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full p-2 mb-4 border-b text-green-500"
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
              <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition duration-300">
                Get consultation
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}