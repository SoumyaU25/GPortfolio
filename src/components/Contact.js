import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ylubf2t", "template_239y1ck", form.current, {
        publicKey: "LMusF1mzIQNJKKd8b",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className=" lg:section section mt-[350px] lg:mt-[300px] mb-20 lg:mb-0"
    >
      <div className="container mx-auto">
        <motion.div 
         variants={fadeIn('up', 0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
        className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:flex text-center lg:text-left items-center justify-start">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-10 lg:mb-4 tracking-wide text-center lg:text-left text-[45px] lg:text-[25px]">
                Get in touch
              </h4>
              <h2 className="text-[35px] lg:text-[70px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="from_name"
              required
            />

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="from_email"
              required
            />

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              required
            ></textarea>

           

            {!isSubmitted ? (
               <input className="btn btn-lg" value="Send message" type="submit" />
            ):( <span>
              <p className="text-[25px] lg:text-sm tracking-wider">
              YAY! Recieved your message.
              </p>
            </span>)}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
