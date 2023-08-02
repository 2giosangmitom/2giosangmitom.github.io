import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="sm:fixed sm:bottom-0 sm:flex sm:flex-col items-center">
      <a
        href="https://github.com/yeuxacucodon"
        target="_blank"
        className="duration-200 sm:mb-8 text-white hover:text-emerald-500 text-xl hover:-translate-y-1"
        title="GitHub"
      >
        <FiGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/2giosangmitom/"
        target="_blank"
        className="duration-200 sm:mb-8 text-white hover:text-emerald-500 text-xl hover:-translate-y-1"
        title="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://www.facebook.com/langthangchokopai/"
        target="_blank"
        className="duration-200 sm:mb-8 text-white hover:text-emerald-500 text-xl hover:-translate-y-1"
        title="Facebook"
      >
        <FaFacebook />
      </a>

      <div className="w-0.5 h-32 bg-white"></div>
    </div>
  );
}
