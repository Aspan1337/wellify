import React, { useState } from "react";
import "./Workout.css";

const Workout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="workout-container">
      <h1 className="workout-title">ТРЕНИРОВКИ</h1>

      <div className="workout-card">
        <div className="workout-image-container">
          <img
            src="/wellify/images/workout/workout.svg"
            alt="Сет тренировок Энергия дома"
            className="workout-image"
          />
          <div className="workout-overlay">
            <button className="workout-details-button" onClick={toggleExpand}>
              {isExpanded ? "Свернуть" : "Подробнее"}
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="workout-expanded">
          {/* Разминка секция */}
          <div className="workout-section">
            <h2 className="workout-section-title">РАЗМИНКА</h2>
            <div className="workout-section-duration">
              <span className="workout-icon"></span> 2 минуты
            </div>

            <div className="workout-exercises-grid">
              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/uLVt6u15L98"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Прыжки на месте
                  <span className="workout-exercise-duration">(30 сек)</span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/aLXWSBeG8Ak"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Вращения руками вперед-назад
                  <span className="workout-exercise-duration">(20 сек)</span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/L31tfbSm2aM"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Подъемы коленей к груди
                  <span className="workout-exercise-duration">(30 сек)</span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ZNpRO--nSN8?start=8"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Махи ногами в стороны
                  <span className="workout-exercise-duration">(20 сек)</span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/h6XyzlM8m24?start=11"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Повороты корпуса из руки
                  <span className="workout-exercise-duration">(20 сек)</span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/MDxfAuBbHHA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Планка на вытянутых руках
                  <span className="workout-exercise-duration">(20 сек)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Основной комплекс секция */}
          <div className="workout-section">
            <h2 className="workout-section-title">ОСНОВНОЙ КОМПЛЕКС</h2>
            <div className="workout-section-duration">
              <span className="workout-icon"></span> 3 круга
            </div>

            <div className="workout-exercises-grid">
              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/UYbsgiiZgao"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Приседания
                  <span className="workout-exercise-duration">
                    (15-20 повторений)
                  </span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/WDIpL0pjun0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Отжимания
                  <span className="workout-exercise-duration">
                    (10-15 повторений)
                  </span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/WahmiLjZ1zE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Выпады
                  <span className="workout-exercise-duration">
                    (по 10 повторений)
                  </span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/4hmQA3snTyk?start=27"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Скручивания на пресс
                  <span className="workout-exercise-duration">
                    (15-20 повторений)
                  </span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/mwlp75MS6Rg"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Планка
                  <span className="workout-exercise-duration">(30 секунд)</span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    src="https://www.youtube.com/embed/Ny8JWqh4lNg"
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Берпи
                  <span className="workout-exercise-duration">
                    (8-10 повторений)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Заминка секция */}
          <div className="workout-section">
            <h2 className="workout-section-title">ЗАМИНКА</h2>
            <div className="workout-section-duration">
              <span className="workout-icon"></span> 3 минуты
            </div>

            <div className="workout-exercises-grid">
              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/IrCe1H0OOMA?start=27"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Наклоны вперед
                  <span className="workout-exercise-duration">(30 сек)</span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/eTCBSFlCJ_s?start=7"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Потягивания рук
                  <span className="workout-exercise-duration">(30 сек)</span>
                </p>
              </div>

              <div className="workout-exercise">
                <div className="workout-video-placeholder">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/04vmlwoDEgE?start=14"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="workout-exercise-title">
                  Растяжка спины
                  <span className="workout-exercise-duration">(30 сек)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workout;
