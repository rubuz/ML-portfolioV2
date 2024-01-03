import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[75%] mx-auto flex sm:flex-row flex-col sm:justify-between justify-center mb-16 align-middle text-center">
        <p>&copy; Lovenjak. All rights reserved</p>
        <p>
          Website by{" "}
          <a href="#" className="hover:font-medium">
            Lovenjak
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
