import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import emailLottie from "../../assets/emailLottie.json";
import { useRef } from "react";
import "./index.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tj1qul",
        "template_zqz52c2",
        form.current,
        "X1KDNx9ThEYzeiqZx"
      )
      .then(
        // eslint-disable-next-line no-unused-vars
        (result) => {
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="text-gray-600 body-font relative bg-[#7af6ee]"
      >
        <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap-reverse">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-1/2 md:w-1/2 px-8 py-16 flex flex-col md:mr-auto w-full h-full md:py-16 mt-8 md:mt-0 bg-white rounded-xl"
          >
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-700">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full rounded-xl border-2 border-gray-400 focus:border-[#60f5eb] focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-transparent"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-700"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded-xl border-2 border-gray-400 focus:border-[#60f5eb] focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-transparent"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-700"
              >
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                className="w-full bg-white rounded-xl border-2 border-gray-400 focus:border-[#60f5eb] focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out bg-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white font-bold bg-[#111827] border-0 py-3 px-7 focus:outline-none hover:bg-[#2c3548] rounded-xl text-lg"
            >
              Send message
            </button>
          </form>
          <div className="lg:w-1/2 md:w-1/2 rounded-lg overflow-hidden sm:ml-10 flex flex-col justify-center items-center relative">
            <h2 className="text-gray-900 text-4xl mb-4 font-medium tracking-tight title-font">
              Let's talk
            </h2>
            <p className="sm:text-lg text-center text-md font-medium title-font text-gray-600 tracking-tight">
              Interested? Don't hesitate to get in touch!
            </p>
            <Lottie
              className="lottie hidden md:block"
              animationData={emailLottie}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
