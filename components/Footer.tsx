import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/components/data";
import MagicButton from "./ui/Magicbutton";

const Footer = () => {
  return (
    <footer className="w-full pt-32 pb-10 mb-5 " id="contact">
      <div className="flex flex-col items-center py-7">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:armanchaudhary176001@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Copyright © 2024 Arman Chaudhary
        </p>

        <div className="flex items-center md:gap-3 gap-6 sm:pb-5 z-20 pt-3 ">
          {socialMedia.map((info) => (
            <a href={info.link} target="_blank">
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;