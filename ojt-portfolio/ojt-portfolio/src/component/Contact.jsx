



const Contact = () => {
    return (
        <>
          
            <div className="  flex items-center justify-center pb-20 pt-20 ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
                    <p className="text-lg text-gray-700 mb-8">Feel free to reach out!</p>
                    <form className="max-w-md mx-auto" action="https://formspree.io/f/xeokpzyb" method="POST">
                        <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
                        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" name="email" />
                        <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded h-32 " name="message"></textarea>
                        <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded-xl">Send Message</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Contact;