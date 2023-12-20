import React from "react";
import Button from "./Button";
import { MdAlternateEmail } from "react-icons/md";
import { LiaAsteriskSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <section className="rounded-t-[2rem] -mt-12 bg-white">
      <div className="max-w-[75%] mx-auto flex mt-32">
        <div>
          <div>
            <MdAlternateEmail />
          </div>
          <h2>Send me an email</h2>
          <p>
            Feel free to drop me a message anytime! Whether you have a project
            in mind, a question, or just want to say hello, I'm just an email
            away. Reach out to me at matjaz.lovenjak@gmail.com and let's start
            the conversation!
          </p>
          <Button />
        </div>
        <div>
          <div>
            <LiaAsteriskSolid />
          </div>
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
              href="https://github.com/rubuz"
              className="text-2xl mt-2 hover__link w-max font-semibold"
              target="_blank"
              aria-label="Link to my GitHub profile and repository"
            >
              github
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
    </section>
  );
};

export default Contact;
