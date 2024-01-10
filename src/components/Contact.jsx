import Button from "./Button";
import { MdAlternateEmail } from "react-icons/md";
import { LiaAsteriskSolid } from "react-icons/lia";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section
      className="rounded-t-[2rem] -mt-12 bg-white dark:bg-black"
      id="contact"
    >
      <Slide direction="right" triggerOnce="true">
        <div className="lg:max-w-[75%] sm:max-w-[85%] max-w-[95%] mx-auto flex sm:pt-32 pt-16 gap-6 lg:flex-row flex-col">
          <div className="lg:max-w-[70%] bg-yellowy sm:py-16 sm:px-12 py-12 px-8 rounded-[2rem] flex flex-col gap-10 justify-between contact__mailbox">
            <div className="flex">
              <MdAlternateEmail className="sm:w-20 sm:h-20 w-14 h-14 contact__mailbox-icon" />
            </div>
            <h2 className="lg:text-6xl text-5xl tracking-tight">
              Send me an email
            </h2>
            <p className="text-lg leading-5 lg:max-w-[60%] max-w-[80%]">
              Feel free to drop me a message anytime! Whether you have a project
              in mind, a question, or just want to say hello, I&apos;m just an
              email away. Reach out to me at
              <span className="font-medium">
                <a
                  href="mailto:matjaz.lovenjak@gmail.com"
                  className="hover__link"
                >
                  matjaz.lovenjak@gmail.com
                </a>
              </span>{" "}
              and let&apos;s start the conversation!
            </p>
            <a
              href="mailto:matjaz.lovenjak@gmail.com"
              className="sm:w-fit max-sm:max-w-[70%]"
            >
              <Button
                text={"Send email"}
                bgColor={"bg-black"}
                iconColor={"text-black"}
                circleColor={"bg-yellowy"}
                textColor={"text-yellowy"}
              />
            </a>
          </div>

          <div className="sm:py-16 sm:px-12 py-12 px-8 rounded-[2rem] flex flex-col gap-10 justify-between bg-bluey group">
            <div>
              <LiaAsteriskSolid className="sm:w-20 sm:h-20 w-14 h-14 sm:group-hover:animate-spin-slow max-sm:animate-spin-slow" />
            </div>
            <h2 className="lg:text-6xl text-5xl tracking-tight">
              Contact me on socials
            </h2>
            <div className="w-[60%] text-lg leading-5 flex flex-col">
              <a
                href="https://www.linkedin.com/in/matjaz-lovenjak/"
                className="text-2xl mt-2 hover__link w-max font-semibold"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my LinkedIn profile"
              >
                linkedin
              </a>
              <a
                href="https://www.facebook.com/matjaz.lovenjak"
                className="text-2xl mt-2 hover__link w-max font-semibold"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my Facebook profile"
              >
                facebook
              </a>
              <a
                href="https://www.instagram.com/rubuz88/"
                className="text-2xl mt-2 hover__link w-max font-semibold"
                target="_blank"
                rel="noreferrer"
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
