import { useState, useEffect, useRef } from "react";
import "./Diet.css";
import dietData from "./dietData.json";

const Diet = () => {
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [diets, setDiets] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const categoriesRef = useRef(null);

  useEffect(() => {
    setDiets(dietData.diets);
  }, []);

  useEffect(() => {
    if (selectedDiet) {
      setIsExpanded(true);
    }
  }, [selectedDiet]);

  const handleDietSelect = (dietId) => {
    if (dietId === selectedDiet) {
      handleCollapse();
    } else {
      setSelectedDiet(dietId);
      setTimeout(() => {
        const detailsElement = document.querySelector(".diet-details");
        if (detailsElement) {
          detailsElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const handleCollapse = () => {
    setIsExpanded(false);

    setTimeout(() => {
      if (categoriesRef.current) {
        window.scrollTo({
          top: categoriesRef.current.offsetTop - 100,
          behavior: "smooth",
        });
      }
      setSelectedDiet(null);
    }, 500);
  };

  const getSelectedDiet = () => {
    return diets.find((diet) => diet.id === selectedDiet);
  };

  return (
    <div className="diet-container">
      <h1 className="diet-title">ПИТАНИЕ</h1>
      <h2 className="diet-subtitle">Выбор категории здорового рациона</h2>

      <div className="diet-categories" ref={categoriesRef}>
        {diets.map((diet) => (
          <div
            key={diet.id}
            className={`diet-category ${
              selectedDiet === diet.id ? "selected" : ""
            }`}
            onClick={() => handleDietSelect(diet.id)}
          >
            <div className="diet-image-container">
              <img src={diet.image} alt={diet.title} className="diet-image" />
              <button className="diet-button">{diet.title}</button>
            </div>
          </div>
        ))}
      </div>

      {(selectedDiet || isExpanded) && (
        <div
          className={`diet-details ${isExpanded ? "expanded" : "collapsed"}`}
        >
          {getSelectedDiet() && (
            <>
              <h3 className="diet-plan-title">
                Рацион для {getSelectedDiet().title.toLowerCase()} (
                {getSelectedDiet().calories})
              </h3>
              <p className="diet-plan-description">
                {getSelectedDiet().description}
              </p>

              {getSelectedDiet().meals.map((meal, index) => (
                <div key={index} className="meal-section">
                  <h4 className="meal-title">
                    {meal.title}{" "}
                    <span className="meal-calories">({meal.calories})</span>
                  </h4>
                  <div className="meal-items">
                    {meal.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="meal-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="meal-image"
                        />
                        <p className="meal-name">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button className="collapse-button" onClick={handleCollapse}>
                Свернуть
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Diet;
