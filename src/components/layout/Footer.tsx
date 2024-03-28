const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-gray-700 py-3 text-white">
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
};

export default Footer;
