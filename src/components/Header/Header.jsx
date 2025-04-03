import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showWorkoutDropdown, setShowWorkoutDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowWorkoutDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleWorkoutDropdown = (e) => {
    e.stopPropagation();
    setShowWorkoutDropdown(!showWorkoutDropdown);
  };

  return (
    <header>
      <nav className="navigation">
        <div className="nav-left">
          <div className="logo">
            <img
              src="/wellify/wellifylogo1.png"
              alt="Wellify Logo"
              onClick={() => scrollToSection("main")}
              className="logo-img"
            />
          </div>
        </div>
        <div className="nav-right">
          <ul className="nav-els">
            <li
              className="nav-el dropdown-parent"
              onClick={toggleWorkoutDropdown}
              ref={dropdownRef}
            >
              Тренировки
              {showWorkoutDropdown && (
                <div className="dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection("workout-set");
                      setShowWorkoutDropdown(false);
                    }}
                  >
                    Сет тренировок
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection("individual-workout");
                      setShowWorkoutDropdown(false);
                    }}
                  >
                    Индивидуальный комплекс тренировок
                  </div>
                </div>
              )}
            </li>
            <li className="nav-el" onClick={() => scrollToSection("gym")}>
              GYM
            </li>
            <li className="nav-el" onClick={() => scrollToSection("diet")}>
              Питание
            </li>
            <li
              className="nav-el"
              onClick={() => scrollToSection("calculator")}
            >
              Калькулятор
            </li>
            <li className="nav-el" onClick={() => scrollToSection("footer")}>
              Контакты
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
