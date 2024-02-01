import Button from "./Button";
import { MdAlternateEmail } from "react-icons/md";
import { LiaAsteriskSolid } from "react-icons/lia";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section
      className="-mt-12 rounded-t-[2rem] bg-white dark:bg-black"
      id="contact"
    >
      <Slide direction="right" triggerOnce>
        <div className="mx-auto flex max-w-[95%] flex-col gap-3 pt-16 sm:max-w-[85%] sm:gap-6 sm:pt-32 lg:max-w-[75%] lg:flex-row">
          <div className="contact__mailbox flex flex-col justify-between gap-10 rounded-[2rem] bg-yellowy px-8 py-12 sm:px-12 sm:py-16 lg:max-w-[70%]">
            <div className="flex">
              <MdAlternateEmail className="contact__mailbox-icon h-14 w-14 sm:h-20 sm:w-20" />
            </div>
            <h2 className="text-5xl tracking-tight lg:text-6xl">
              Send me an email
            </h2>
            <p className="max-w-[80%] text-lg leading-5 lg:max-w-[65%]">
              Feel free to drop me a message anytime! Whether you have a project
              in mind, a question, or just want to say hello, I&apos;m just an
              email away. Reach out to me at{" "}
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
            <a href="mailto:matjaz.lovenjak@gmail.com" className="w-fit">
              <Button
                text={"Send email"}
                bgColor={"bg-black"}
                iconColor={"text-black"}
                circleColor={"bg-yellowy"}
                textColor={"text-yellowy"}
              />
            </a>
          </div>

          <div className="group flex flex-col justify-between gap-10 rounded-[2rem] bg-bluey px-8 py-12 sm:px-12 sm:py-16">
            <div>
              <LiaAsteriskSolid className="h-14 w-14 max-sm:animate-spin-slow sm:h-20 sm:w-20 sm:group-hover:animate-spin-slow" />
            </div>
            <h2 className="text-5xl tracking-tight lg:text-6xl">
              Contact me on socials
            </h2>
            <div className="flex w-[60%] flex-col text-lg leading-5">
              <a
                href="https://www.linkedin.com/in/matjaz-lovenjak/"
                className="hover__link mt-2 w-max text-2xl font-semibold"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my LinkedIn profile"
              >
                linkedin
              </a>
              <a
                href="https://www.facebook.com/matjaz.lovenjak"
                className="hover__link mt-2 w-max text-2xl font-semibold"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my Facebook profile"
              >
                facebook
              </a>
              <a
                href="https://www.instagram.com/rubuz88/"
                className="hover__link mt-2 w-max text-2xl font-semibold"
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
