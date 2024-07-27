import { copyrightSign } from "../assets/icons";
import {  footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/' className="flex items-center px-5 ">
            <img
              src={footerLogo}
              alt='logo'
              width={90}
              height={56}
              className='m-0'
            />
            <h1 className=" text-white-400 text-[20px]">Wellness Retreats</h1>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Enjoy yoga, meditation, therapeutic massages, and gourmet meals. Rejuvenate your mind, body, and spirit with our expert practitioners, and leave feeling refreshed and inspired.
          </p>
          <div className='flex justify-evenly gap-10 mt-8 ml-16'>
            {socialMedia.map((icon) => (
              <a href="/">
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full' key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-1 lg:justify-evenly lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 flex-col items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
