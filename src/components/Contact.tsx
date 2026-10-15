import Button from "./Button";
import { MdAlternateEmail } from "react-icons/md";
import { LiaAsteriskSolid } from "react-icons/lia";
import { socials } from "./socials";
import { RevealLines, RevealUp } from "../motion/Reveal";

// Section heading, one entry per revealed line
const HEADING = ["Say hello —", "let’s talk."];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-1 px-4 pt-24 pb-10 sm:px-6 sm:pt-[140px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 sm:gap-14">
        <RevealLines
          as="h2"
          lines={HEADING}
          className="text-[clamp(56px,9vw,128px)] leading-[0.95] font-medium tracking-[-0.04em] dark:text-white"
        />
        <div className="flex flex-col gap-6 lg:flex-row">
          <RevealUp className="min-w-0 lg:flex-[1.6_1_0]">
            <div className="contact__mailbox flex h-full flex-col justify-between gap-10 rounded-4xl bg-yellowy px-8 py-12 sm:px-12 sm:py-14">
              <div className="flex">
                <MdAlternateEmail className="contact__mailbox-icon h-14 w-14 sm:h-[72px] sm:w-[72px]" />
              </div>
              <h3 className="text-5xl leading-none tracking-[-0.02em] lg:text-6xl">
                Send me an email
              </h3>
              <p className="max-w-[520px] text-lg leading-[1.4]">
                Feel free to drop me a message anytime! Whether you have a
                project in mind, a question, or just want to say hello, I&apos;m
                just an email away. Reach out to me at{" "}
                <a
                  href="mailto:matjaz.lovenjak@gmail.com"
                  className="hover__link font-semibold"
                >
                  matjaz.lovenjak@gmail.com
                </a>{" "}
                and let&apos;s start the conversation!
              </p>
              <div>
                <Button
                  href="mailto:matjaz.lovenjak@gmail.com"
                  text="Send email"
                  bgColor="bg-black"
                  iconColor="text-black"
                  circleColor="bg-yellowy"
                  textColor="text-yellowy"
                  cursorLabel="write"
                />
              </div>
            </div>
          </RevealUp>

          <RevealUp delay={0.12} className="min-w-0 lg:flex-[1_1_0]">
            <div className="group flex h-full flex-col justify-between gap-10 rounded-4xl bg-bluey px-8 py-12 sm:px-12 sm:py-14">
              <div>
                <LiaAsteriskSolid className="h-14 w-14 max-sm:animate-spin-slow sm:h-[72px] sm:w-[72px] sm:group-hover:animate-spin-slow" />
              </div>
              <h3 className="text-5xl leading-none tracking-[-0.02em] lg:text-6xl">
                Contact me on socials
              </h3>
              <div className="flex flex-col gap-1 text-2xl">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="hover__link inline-flex min-h-11 w-max items-center font-semibold"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Link to my ${social.label} profile`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </RevealUp>
        </div>
      </div>
    </section>
  );
};

export default Contact;
