import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <span className="font-bold text-xl">LogoName</span>
        </div>
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="#privacy"
                className="hover:text-yellow-300 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-yellow-300 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-300 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p>&copy; 2025 LogoName. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
