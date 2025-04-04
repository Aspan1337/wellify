import React, { useState, useEffect } from "react";
import "./FeedbackModal.css";
import { TELEGRAM_API_URL, TELEGRAM_CHAT_ID } from "./telegramConfig";

const FeedbackModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendToTelegram = async (data) => {
    const text = `
🚀 Новое сообщение с сайта! 🚀

👤 Имя: ${data.name}
✉️ Email: ${data.email}
💬 Сообщение: ${data.message}

💡Свяжитесь с пользователем как можно скорее.
    `;

    try {
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "HTML",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Telegram API error: ${errorData.description}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Отправляемые данные:", formData);
      await sendToTelegram(formData);

      setSubmitStatus({
        success: true,
        message: "Сообщение успешно отправлено!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={handleModalClick}>
        <div className="modal-header">
          <h2>Обратная связь</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        {submitStatus && (
          <div
            className={`submit-status ${
              submitStatus.success ? "success" : "error"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-button">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
