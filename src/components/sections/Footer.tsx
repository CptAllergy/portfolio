const Footer = () => {
  return (
    <footer id="footer" className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Gonçalo Prates
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, styled with Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
