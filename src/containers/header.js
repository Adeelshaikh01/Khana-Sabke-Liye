import logo from "../images/logo.png"
import "../App.css"

function Header() {
  return (
    <>
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">

        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src={logo} className="logo" />
        </a>
      </div>
    </header>
    </>
  );
}

export default Header;
