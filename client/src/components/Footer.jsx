import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#BF9270] text-white mt-8 py-12 px-4 border-t border-solid border-[#65451F]">
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <ul className="flex gap-4 mb-4 md:mb-0">
          <li>
            <a
              href="https://www.facebook.com/dog360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#ffffff] hover:text-[#65451F]"
            >
              <FaFacebook/>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dog360/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#ffffff] hover:text-[#65451F]"
            >
              <FaInstagram/>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/dog360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#ffffff] hover:text-[#65451F]"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
        <p className="text-center text-xl text-[#000000] mb-4 md:mb-0 md:text-left align-self-center">
          &copy; 2023 Dog360. Todos los derechos reservados.
        </p>
        <ul className="text-center md:text-right">
          <li>
            <a
              href="/notfound"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] hover:text-[#65451F] text-xl"
            >
              Aviso de privacidad
            </a>
          </li>
          <li>
            <a
              href="/notfound"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] hover:text-[#65451F] text-xl"
            >
              Términos y condiciones
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
