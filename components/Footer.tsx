const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow-md mt-auto">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-center items-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} vCard Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
