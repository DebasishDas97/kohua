import { ChangeEvent, FormEvent, useState } from "react";
import { makeRequest } from "../../makeRequest";

export default function Contact() {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await makeRequest.post("/contacts", {
      formData,
      });
      console.log(res);
    } catch (err) {
      console.log(err);

      alert("Something went wrong! Try again later or Contact us.");
    }
  };

  return (
    <section className="bg-white my-24">
      <h2 className="mb-4 text-3xl md:text-5xl tracking-wide font-bold text-center text-gray-900 dark:text-black">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-700 sm:text-xl px-4">
        Got a technical issue? Want to send feedback about a feature? Need
        details about a product? Let us know.
      </p>
      <div className="flex md:flex-row md:gap-0 gap-20 flex-col justify-around md:mx-[100px] mx-0">
        <div className="px-4 md:w-1/2 w-full">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                name="email_contact"
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg outline-none rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2 py-1.5"
                placeholder="Full name here"
                required
                onChange={handleFormData}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Your Email
              </label>
              <input
                name="subject_contact"
                type="email"
                id="subject"
                className="block px-2 py-1.5 w-full outline-none text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Email address here    "
                required
                onChange={handleFormData}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                name="message_contact"
                id="message"
                rows={6}
                className="block px-2 py-1.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border outline-none border-gray-300"
                placeholder="Leave a message..."
                onChange={handleFormData}
                required
              ></textarea>
            </div>
            <button className="py-2 px-5 text-lg font-medium text-center text-white rounded-lg bg-cyan-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 outline-none border-none">
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28544.803755421864!2d92.94287807520494!3d26.581151097703074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744e52f5c725bbb%3A0x9439136c44f1004!2sKaliabor%20Tiniali!5e0!3m2!1sen!2sin!4v1695753797472!5m2!1sen!2sin"
            width="600"
            height="450"
            className="md:p-0 px-3 md:w-[550px] w-full h-[450px]"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
