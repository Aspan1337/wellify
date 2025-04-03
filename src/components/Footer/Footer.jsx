import React, { useState } from "react";
import "./Footer.css";
import FeedbackModal from "../FeedbackModal/FeedbackModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/wellify/wellifylogo1.png" alt="Wellify Logo" />
          </div>
          <p>© 2025 Wellify</p>
          <p>Все права защищены</p>
        </div>

        <div className="footer-center">
          <h3>Информация</h3>
          <ul className="footer-links">
            <li>
              <button
                onClick={() => scrollToSection("main")}
                className="footer-link"
              >
                О нас
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("workout-set")}
                className="footer-link"
              >
                Тренировки
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Контакты</h3>
          <p>+7 (777) 777 77 77</p>
          <a href="mailto:wellify@gmail.com" className="footer-email">
            support@wellify.com
          </a>
          <button className="feedback-link" onClick={openModal}>
            Обратная связь
          </button>
        </div>
      </div>
      {isModalOpen && <FeedbackModal onClose={closeModal} />}
    </footer>
  );
};

export default Footer;
