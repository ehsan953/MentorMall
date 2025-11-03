import React, { useState } from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import Button from "../common/Button";

interface RegisterProps {
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC<RegisterProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your API call or form processing logic here
  };

  return (
    <div className="max-h-[90vh] overflow-y-auto sm:w-[500px] lg:w-[875px] flex flex-wrap custom-scroll">
      <div className="flex items-center basis-full lg:basis-1/2 bg-white py-8 pl-16 pr-12">
        <div>
          <h3 className="text-3xl font-medium text-gray-800 mb-4 font-lora">
            Contact Us
          </h3>
          <div className="">
            <div className="text-sm font-semibold text-gray-800 mb-2">
              <span>Customer Service</span>
            </div>
            <div className="flex gap-2 items-center text-[15px] leading-[24px] text-gray-600">
              <MdPhone className="h-[15px] w-[15px]" />
              <span>03034408443</span>
            </div>
            <div className="flex gap-2 items-center text-[15px] leading-[24px] text-gray-600">
              <MdPhone className="h-[15px] w-[15px]" />
              <span> +1 941-921-7443 (Global)</span>
            </div>
            <div className="flex gap-2 items-center text-[15px] leading-[24px] text-gray-600 mb-1">
              <MdEmail className="h-[15px] w-[15px]" />
              <span>office@mentormall.com</span>
            </div>
            <hr className="my-4" />
            <div>
              <div className="text-sm font-semibold text-gray-800 mb-2">
                <span>Corporate Office</span>
              </div>
              <div className="flex gap-2 items-center text-[15px] leading-[24px] text-gray-600">
                <span>
                  1079 N. Tamiami Trail #112 <br />
                  Nokomis, Florida <br />
                  34275, USA <br />
                  941-921-7443
                </span>
              </div>
            </div>
            <hr className="my-4" />
            <div>
              <div className="text-sm font-semibold text-gray-800 mb-2">
                <span>Newsletter</span>
              </div>
              <div>
                <div className="text-[15px] leading-[24px] text-gray-600">
                  Receive news and updates regarding our courses and philosophy
                  by subscribing to the IBA Newsletter.
                </div>
                <Button customClass="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col basis-full lg:basis-1/2 pt-6 pb-8 pl-10 pr-12 bg-gray-200">
        <div className="pl-6 pr-6">
          <div className="py-6">
            <h4 className="text-[24px] leading-[120%] lg:leading-[130%] font-bold">
              Have a Question?
            </h4>
            <p className="font-normal text-gray-600 pt-2 text-[15px] leading-[24px]">
              Send us a message by filling out the form below. One of our
              representatives will respond to you shortly.
            </p>
          </div>
          <div className="border border-gray-200 py-4">
            <form className="flex flex-col gap-4 font-normal text-sm" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-2"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-2"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-2"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md p-2"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Leave your message here..."
                className="p-2 h-[100px] border border-gray-300 rounded-md"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button 
                type="submit"
                customClass="mt-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-500 border border-green-500"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;