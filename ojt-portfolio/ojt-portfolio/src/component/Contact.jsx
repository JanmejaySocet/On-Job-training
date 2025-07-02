const Contact = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-gray-300 mb-8">Feel free to reach out!</p>

        <form
          action="https://formspree.io/f/xeokpzyb"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            required
            className="w-full p-3 h-32 rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-xl w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
