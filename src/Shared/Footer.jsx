import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-rose-100  py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p className="text-sm mt-3">Contact us: rhythmranch@gmail.com</p>
          <div className="flex mt-2">
            <Link>
              <svg className="w-10 mt-5 h-10" viewBox="0 0 24 24">
                <FaFacebookF className="text-blue-700 hover:text-black"></FaFacebookF>
              </svg>
            </Link>
            <Link>
              <svg className="w-10 mt-5 h-10" viewBox="0 0 24 24">
                <FaTwitter className="text-blue-700 hover:text-black"></FaTwitter>
              </svg>
            </Link>
            <Link >

              <svg className="w-10 mt-5 h-10" viewBox="0 0 24 24">
                <FaInstagram className="text-blue-700 hover:text-black"></FaInstagram>
              </svg>
            </Link>
          </div>
        </div>
        <div className="text-sm space-y-2">
          <p >Mirpur 10</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
