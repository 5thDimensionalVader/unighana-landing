import { GrInstagram, GrFacebook, GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-[5rem] py-4 bg-custom-red text-slate-800 gap-4">
      <div className="flex flex-col text-center">
        <h2 className="border-slate-200 border-b">Navigation</h2>
        <a
          href="#about"
          className="block lg:inline-block mt-2 hover:text-white"
        >
          About Us
        </a>
        <a
          href="#schools"
          className="block lg:inline-block mt-2 hover:text-white"
        >
          Schools
        </a>
        <a
          href="#contact"
          className="block lg:inline-block mt-2 hover:text-white"
        >
          Contact
        </a>
      </div>

      <div className="flex flex-col text-center">
        <h2 className="">UniGhana</h2>
        <h3>
          &#169; Copyright, UniGhana {new Date().getFullYear().toString()}.
        </h3>
      </div>
      <div className="flex flex-col text-center">
        <h2 className="border-slate-200 border-b">Social Media</h2>
        <div className="flex flex-row items-center justify-center space-x-2 mt-2">
          <a href="https://www.instagram.com/unighana/">
            <GrInstagram className="text-2xl" />
          </a>
          <a href="https://www.facebook.com/unighana">
            <GrFacebook className="text-2xl" />
          </a>
          <a href="https://twitter.com/unighana">
            <GrTwitter className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/company/unighana">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
