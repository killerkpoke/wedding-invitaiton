"use client";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Navbar() {
  return (
    <div className="max-lg:collapse bg-[#c3b091] shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start"></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={() => scrollToSection("item1")}>Item 1</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("item3")}>Item 3</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li>
            <button onClick={() => scrollToSection("item1")}>Item 1</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("item3")}>Item 3</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
