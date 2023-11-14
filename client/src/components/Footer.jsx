import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#BF9270] text-white mt-8 py-12 px-4 border-t border-solid border-[#65451F]">
      <div className="flex flex-col items-center md:flex-row justify-evenly">
        <ul className="flex gap-4 mb-4 md:mb-0">
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#ffffff] hover:text-[#65451F] duration-150"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#ffffff] hover:text-[#65451F] duration-150"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#ffffff] hover:text-[#65451F] duration-150"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
        <p className="text-center text-xl text-[#000000] mb-4 md:mb-0 md:text-left align-self-center">
          <p className="font-bold text-center">Dog360</p>
          <div className="flex items-center justify-center">
            <FaLocationDot />
            Calle 1, San Miguel de Tucumán, Tucumán.
          </div>
          <div className="flex items-center justify-center">
            <FaPhone />
            123456789
          </div>
        </p>
        <ul className="text-center md:text-right">
          <li>
            <button></button>
            <a
              href=""
              onClick={() => navigate("/about")}
              rel="noopener noreferrer"
              className="text-[#ffffff] hover:text-[#65451F] text-xl duration-150"
            >
              Sobre nosotros
            </a>
          </li>
          <li>
            <a
              href="/notfound"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] hover:text-[#65451F] text-xl duration-150"
            >
              Aviso de privacidad
            </a>
          </li>
          <li>
            <a
              href="/notfound"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] hover:text-[#65451F] text-xl duration-150"
            >
              Términos y condiciones
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
