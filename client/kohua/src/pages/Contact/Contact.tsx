export default function Contact() {
  return (
    <section className="bg-white my-24">
        <h2 className="mb-4 text-5xl tracking-wide font-bold text-center text-gray-900 dark:text-black">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-700  sm:text-xl px-4">Got a technical issue? Want to send feedback about a feature? Need details about a product? Let us know.</p>
        <div className="flex md:flex-row md:gap-0 gap-20 flex-col justify-around md:mx-[100px] mx-0">
        <div className="px-4 md:w-1/2 w-full">
        <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">Your email</label>
                <input name="email_contact" type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg outline-none rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Your email address here" required />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-900">Subject</label>
                <input name="subject_contact" type="text" id="subject" className="block p-3 w-full outline-none text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900">Your message</label>
                <textarea name="message_contact" id="message" rows={6} className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border outline-none border-gray-300" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-2 px-5 text-lg font-medium text-center text-white rounded-lg bg-cyan-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>
    <div className="mt-6">
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28544.803755421864!2d92.94287807520494!3d26.581151097703074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744e52f5c725bbb%3A0x9439136c44f1004!2sKaliabor%20Tiniali!5e0!3m2!1sen!2sin!4v1695753797472!5m2!1sen!2sin"
    width="600"
    height="450"
    className="md:p-0 px-3 md:w-[500px] w-full h-[450px]"
    style={{ border: '0' }} // Provide style as an object
    allowFullScreen={true} // Allow
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  >

</iframe>

    </div>
        </div>

  </section>
  )
}