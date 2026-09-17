import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { githubUserName, linkedInUserName, userEmail } from "@/app/page";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      className="py-12 px-6 md:px-20 "
      id="contact"
      data-testid="contact"
    >
      <h2 className="font-bold text-3xl mb-4">Contact Me</h2>
      <a
        href={`mailto:${userEmail}`}
        className="flex flex-row items-center py-1 hover:underline"
      >
        <HiOutlineMail />
        <p className="ml-2">Email</p>
      </a>
      <a
        href={`https://github.com/${githubUserName}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center py-1 hover:underline"
      >
        <IoLogoGithub />
        <p className="ml-2"> GitHub</p>
      </a>
      <a
        href={`https://www.linkedin.com/in/${linkedInUserName}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center py-1 hover:underline"
      >
        <IoLogoLinkedin />
        <p className="ml-2">LinkedIn</p>
      </a>
    </section>
  );
}
