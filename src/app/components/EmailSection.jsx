import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, Let us connect!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Anjalikakade610k">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/anjali-kakade/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://www.instagram.com/_anjali_kakade?igsh=MXJvaG53aXNkYXA1OA==">
            <Image
              src={InstagramIcon}
              alt="Instagram Icon"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
