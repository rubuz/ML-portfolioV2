const Footer = () => {
  return (
    <footer>
      <div className="mx-auto mb-16 flex max-w-[75%] flex-col justify-center text-center align-middle sm:flex-row sm:justify-between dark:text-white">
        <p>
          &copy; {new Date().getFullYear()} Matjaž Lovenjak. All rights reserved
        </p>
        <p>Designed &amp; built by Lovenjak</p>
      </div>
    </footer>
  );
};

export default Footer;
