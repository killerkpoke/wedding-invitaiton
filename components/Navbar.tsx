"use client";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 max-lg:collapse bg-[#c3b091] shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar w-0">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            <li>
              <button
                className="btn bg-[#c3b091]"
                onClick={() => scrollToSection("item1")}
              >
                Kezdőlap
              </button>
            </li>
            <li>
              <button
                className="btn bg-[#c3b091]"
                onClick={() => scrollToSection("item2")}
              >
                Helyszín
              </button>
            </li>
            <li>
              <button
                className="btn bg-[#c3b091]"
                onClick={() => scrollToSection("item3")}
              >
                Menetrend
              </button>
            </li>
            <li>
              <button
                className="btn bg-[#c3b091]"
                onClick={() => scrollToSection("item4")}
              >
                Étkezés
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse-content lg:hidden">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <button
              className="btn bg-[#c3b091]"
              onClick={() => scrollToSection("item1")}
            >
              Kezdőlap
            </button>
          </li>
          <li>
            <button
              className="btn bg-[#c3b091]"
              onClick={() => scrollToSection("item2")}
            >
              Helyszín
            </button>
          </li>
          <li>
            <button
              className="btn bg-[#c3b091]"
              onClick={() => scrollToSection("item3")}
            >
              Menetrend
            </button>
          </li>
          <li>
            <button
              className="btn bg-[#c3b091]"
              onClick={() => scrollToSection("item4")}
            >
              Étkezés
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
