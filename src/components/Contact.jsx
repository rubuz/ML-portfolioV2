import React from "react";
import Button from "./Button";
import { MdAlternateEmail } from "react-icons/md";
import { LiaAsteriskSolid } from "react-icons/lia";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section className="rounded-t-[2rem] -mt-12 bg-white" id="contact">
      <Slide direction="right" triggerOnce="true">
        <div className="max-w-[75%] mx-auto flex pt-32 gap-6 flex-row">
          <div className="max-w-[70%] bg-yellowy py-16 px-12 rounded-[2rem] flex flex-col gap-10 justify-between contact__mailbox">
            <div className="flex">
              <MdAlternateEmail className="w-20 h-20 contact__mailbox-icon" />
            </div>
            <h2 className="text-6xl tracking-tight">Send me an email</h2>
            <p className="text-lg leading-5 max-w-[60%]">
              Feel free to drop me a message anytime! Whether you have a project
              in mind, a question, or just want to say hello, I'm just an email
              away. Reach out to me at{" "}
              <span className="font-medium">
                <a
                  href="mailto:matjaz.lovenjak@gmail.com"
                  className="hover__link"
                >
                  matjaz.lovenjak@gmail.com
                </a>
              </span>{" "}
              and let's start the conversation!
            </p>
            <div className="max-w-[30%]">
              <a href="mailto:matjaz.lovenjak@gmail.com">
                <Button
                  text={"Send email"}
                  bgColor={"bg-black"}
                  iconColor={"text-black"}
                  circleColor={"bg-yellowy"}
                  textColor={"text-yellowy"}
                />
              </a>
            </div>
          </div>

          <div className="py-16 px-12 rounded-[2rem] flex flex-col gap-10 justify-between bg-bluey group">
            <div>
              <LiaAsteriskSolid className="w-20 h-20 group-hover:animate-spin-slow" />
            </div>
            <h2 className="text-6xl tracking-tight">Contact me on socials</h2>
            <div className="w-[60%] text-lg leading-5 flex flex-col">
              <a
                href="https://www.linkedin.com/in/matjaz-lovenjak/"
                className="text-2xl mt-2 hover__link w-max font-semibold"
                target="_blank"
                aria-label="Link to my LinkedIn profile"
              >
                linkedin
              </a>
              <a
                href="https://www.facebook.com/matjaz.lovenjak"
                className="text-2xl mt-2 hover__link w-max font-semibold"
                target="_blank"
                aria-label="Link to my Facebook profile"
              >
                facebook
              </a>
              <a
                href="https://www.instagram.com/rubuz88/"
                className="text-2xl mt-2 hover__link w-max font-semibold"
                target="_blank"
                aria-label="Link to my Instagram profile"
              >
                instagram
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Contact;
