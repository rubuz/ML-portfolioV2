import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[75%] mx-auto flex justify-between mb-16">
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
