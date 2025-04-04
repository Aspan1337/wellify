import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "",
  });

  const [results, setResults] = useState({
    bmi: "",
    bmr: "",
    idealWeight: "",
    maintenance: "",
    mildLoss: "",
    fastLoss: "",
    gain: "",
  });

  const activityLevels = [
    { value: 1.2, label: "Минимальная активность" },
    { value: 1.375, label: "Низкая активность (1-3 раза в неделю)" },
    { value: 1.55, label: "Средняя активность (3-5 раз в неделю)" },
    { value: 1.725, label: "Высокая активность (6-7 раз в неделю)" },
    { value: 1.9, label: "Очень высокая активность" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  const handleActivityChange = (e) => {
    setFormData({
      ...formData,
      activityLevel: e.target.value,
    });
  };

  const calculateBMI = () => {
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height) / 100;
    return (weight / (height * height)).toFixed(2);
  };

  const calculateBMR = () => {
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseFloat(formData.age);

    // Формула Миффлина-Сан Жеора
    if (formData.gender === "male") {
      return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    } else {
      return Math.round(10 * weight + 6.25 * height - 5 * age - 161);
    }
  };

  const calculateIdealWeight = () => {
    const height = parseFloat(formData.height);

    if (formData.gender === "male") {
      return Math.round(50 + 2.3 * ((height - 152.4) / 2.54));
    } else {
      return Math.round(45.5 + 2.3 * ((height - 152.4) / 2.54));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.gender ||
      !formData.age ||
      !formData.height ||
      !formData.weight ||
      !formData.activityLevel
    ) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const bmi = calculateBMI();
    const bmr = calculateBMR();
    const activityMultiplier = parseFloat(formData.activityLevel);
    const maintenance = Math.round(bmr * activityMultiplier);

    setResults({
      bmi: bmi,
      bmr: bmr,
      idealWeight: calculateIdealWeight(),
      maintenance: maintenance,
      mildLoss: Math.round(maintenance * 0.85),
      fastLoss: Math.round(maintenance * 0.7),
      gain: Math.round(maintenance * 1.2),
    });
  };

  const handleReset = () => {
    setFormData({
      gender: "",
      age: "",
      height: "",
      weight: "",
      activityLevel: "",
    });
    setResults({
      bmi: "",
      bmr: "",
      idealWeight: "",
      maintenance: "",
      mildLoss: "",
      fastLoss: "",
      gain: "",
    });
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">КАЛЬКУЛЯТОР КАЛОРИЙ</h1>

      <div className="calculator-wrapper">
        <div className="calculator-inputs">
          <h2>Ваши данные</h2>

          <div className="input-group">
            <label>Ваш пол</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleRadioChange}
                />
                <span>Мужской</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleRadioChange}
                />
                <span>Женский</span>
              </label>
            </div>
          </div>

          <div className="input-group">
            <label>Ваш возраст</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="лет"
              min="1"
              max="120"
            />
          </div>

          <div className="input-group">
            <label>Ваш рост</label>
            <div className="input-with-unit">
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="см"
                min="50"
                max="250"
              />
              <span className="unit">см</span>
            </div>
          </div>

          <div className="input-group">
            <label>Ваш вес</label>
            <div className="input-with-unit">
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="кг"
                min="30"
                max="300"
              />
              <span className="unit">кг</span>
            </div>
          </div>

          <div className="input-group">
            <label>Уровень физической активности</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleActivityChange}
            >
              <option value="">Выберите уровень</option>
              {activityLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          <div className="calculator-buttons">
            <button
              type="button"
              className="calculate-button"
              onClick={handleSubmit}
            >
              Рассчитать
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Очистить
            </button>
          </div>
        </div>

        <div className="calculator-results">
          <h2>Результат</h2>

          <div className="result-group">
            <label>ИМТ</label>
            <div className="result-value">
              <input type="text" value={results.bmi} readOnly />
            </div>
          </div>

          <div className="result-group">
            <label>Основной метаболизм</label>
            <div className="result-value-with-unit">
              <input type="text" value={results.bmr} readOnly />
              <span className="unit">ккал/день</span>
            </div>
          </div>

          <div className="result-group">
            <label>Идеальный вес</label>
            <div className="result-value-with-unit">
              <input type="text" value={results.idealWeight} readOnly />
              <span className="unit">кг</span>
            </div>
          </div>

          <div className="result-group">
            <label>Для поддержки веса</label>
            <div className="result-value-with-unit">
              <input type="text" value={results.maintenance} readOnly />
              <span className="unit">ккал/день</span>
            </div>
          </div>

          <div className="result-group">
            <label>Для постепенного похудения (Ккал - 15%)</label>
            <div className="result-value-with-unit">
              <input type="text" value={results.mildLoss} readOnly />
              <span className="unit">ккал/день</span>
            </div>
          </div>

          <div className="result-group">
            <label>Для быстрого похудения (Ккал - 30%)</label>
            <div className="result-value-with-unit">
              <input type="text" value={results.fastLoss} readOnly />
              <span className="unit">ккал/день</span>
            </div>
          </div>

          <div className="result-group">
            <label>Чтобы набрать вес (Ккал +20%)</label>
            <div className="result-value-with-unit">
              <input type="text" value={results.gain} readOnly />
              <span className="unit">ккал/день</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
