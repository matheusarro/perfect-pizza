const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 h-16 w-full bg-white text-black shadow-lg">
      <div className="container mx-auto flex h-full items-center px-6 py-3 md:flex md:items-center md:justify-between">
        <a href="/" className="text-gray-800 no-underline hover:text-gray-600 hover:no-underline">
          Pizza Perfeita
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
