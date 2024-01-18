const Footer = () => {
  return (
    <footer>
      <div className="mx-auto mb-16 flex max-w-[75%] flex-col justify-center text-center align-middle dark:text-white sm:flex-row sm:justify-between">
        <p>&copy; Lovenjak. All rights reserved</p>
        <p>
          Website by{" "}
          <a href="#" className="transition-all duration-200 hover:font-medium">
            Lovenjak
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
