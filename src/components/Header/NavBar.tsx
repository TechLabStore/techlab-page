function NavBar() {
  return (
    <nav className="flex justify-center h-3.5">
      <ul className="flex gap-3.5 justify-between text-white bg-amber-200">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
        <li>
          <a href="#discord">Discord</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
