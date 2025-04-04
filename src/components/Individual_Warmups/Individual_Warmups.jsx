import React, { useState } from "react";
import { workouts } from "./workoutsData.json";
import "./Individual_Warmups.css";

const Individual_Warmups = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    bodyType: "",
    experience: "",
    activityLevel: "",
    desiredComplexity: "",
    workoutType: "",
    bloodPressure: "",
    workoutCount: "",
    generalFitness: "",
    workoutGoal: "",
  });

  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const [showWorkoutButtons, setShowWorkoutButtons] = useState(false);
  const [expandedWorkout, setExpandedWorkout] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormData({
      gender: "",
      age: "",
      height: "",
      weight: "",
      bodyType: "",
      experience: "",
      activityLevel: "",
      desiredComplexity: "",
      workoutType: "",
      bloodPressure: "",
      workoutCount: "",
      generalFitness: "",
      workoutGoal: "",
    });
    setShowWorkoutButtons(false);
    setSelectedWorkouts([]);
    setExpandedWorkout(null);
  };

  const selectWorkouts = () => {
    if (
      !formData.gender ||
      !formData.age ||
      !formData.height ||
      !formData.weight ||
      !formData.workoutCount
    ) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    let filteredWorkouts = [...workouts];

    if (formData.gender) {
      filteredWorkouts = filteredWorkouts.filter((workout) =>
        workout.suitableFor.includes(formData.gender)
      );
    }

    if (formData.experience) {
      filteredWorkouts = filteredWorkouts.filter((workout) =>
        workout.experienceLevel.includes(formData.experience)
      );
    }

    if (formData.workoutGoal) {
      filteredWorkouts = filteredWorkouts.filter((workout) =>
        workout.goals.includes(formData.workoutGoal)
      );
    }

    if (formData.workoutType) {
      filteredWorkouts = filteredWorkouts.filter(
        (workout) => workout.type === formData.workoutType
      );
    }

    if (formData.height && formData.weight) {
      const heightInMeters = parseInt(formData.height) / 100;
      const bmi = parseInt(formData.weight) / (heightInMeters * heightInMeters);

      if (bmi > 30) {
        filteredWorkouts = filteredWorkouts.filter(
          (workout) => !workout.contraindications.includes("obesity")
        );
      }

      if (bmi < 18.5) {
        filteredWorkouts = filteredWorkouts.filter(
          (workout) => !workout.contraindications.includes("underweight")
        );
      }
    }

    if (formData.bloodPressure === "high") {
      filteredWorkouts = filteredWorkouts.filter(
        (workout) => !workout.contraindications.includes("high blood pressure")
      );
    }

    const workoutCount = parseInt(formData.workoutCount) || 0;

    let finalWorkouts = [];
    if (filteredWorkouts.length > 0) {
      for (let i = 0; i < workoutCount; i++) {
        finalWorkouts.push(filteredWorkouts[i % filteredWorkouts.length]);
      }
    }

    setSelectedWorkouts(finalWorkouts);
    setShowWorkoutButtons(finalWorkouts.length > 0);
    setExpandedWorkout(null);
  };

  const toggleWorkout = (index) => {
    setExpandedWorkout(expandedWorkout === index ? null : index);
  };

  return (
    <div className="warmup-container">
      <h1 className="warmup-title">
        Инивидуальный подбор комплекса упражнений
      </h1>

      <div className="warmup-form-container">
        <div className="warmup-form-row">
          <div className="warmup-form-group">
            <label>Ваш пол</label>
            <div className="warmup-radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                />
                Мужской
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                />
                Женский
              </label>
            </div>
          </div>
        </div>

        <div className="warmup-form-row">
          <div className="warmup-form-group">
            <label>Ваш возраст</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Введите возраст"
            />
          </div>
          <div className="warmup-form-group">
            <label>Телосложение</label>
            <select
              name="bodyType"
              value={formData.bodyType}
              onChange={handleInputChange}
            >
              <option value="">Выберите телосложение</option>
              <option value="ectomorph">Худое</option>
              <option value="mesomorph">Спортивное</option>
              <option value="endomorph">Плотное</option>
            </select>
          </div>
        </div>

        <div className="warmup-form-row">
          <div className="warmup-form-group">
            <label>Ваш рост</label>
            <div className="warmup-input-with-unit">
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="Рост"
              />
              <span className="warmup-unit">см</span>
            </div>
          </div>
          <div className="warmup-form-group">
            <label>Стаж тренировок</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
            >
              <option value="">Выберите стаж</option>
              <option value="beginner">Начинающий</option>
              <option value="intermediate">Средний</option>
              <option value="advanced">Продвинутый</option>
            </select>
          </div>
        </div>

        <div className="warmup-form-row">
          <div className="warmup-form-group">
            <label>Ваш вес</label>
            <div className="warmup-input-with-unit">
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="Вес"
              />
              <span className="warmup-unit">кг</span>
            </div>
          </div>
          <div className="warmup-form-group">
            <label>Уровень физической активности</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleInputChange}
            >
              <option value="">Выберите уровень</option>
              <option value="low">Низкий</option>
              <option value="medium">Средний</option>
              <option value="high">Высокий</option>
            </select>
          </div>
        </div>

        <div className="warmup-form-row">
          <div className="warmup-form-group">
            <label>Желаемое количество тренировок</label>
            <select
              name="workoutCount"
              value={formData.workoutCount}
              onChange={handleInputChange}
            >
              <option value="">Выберите количество</option>
              <option value="1">1 тренировка</option>
              <option value="2">2 тренировки</option>
              <option value="3">3 тренировки</option>
              <option value="4">4 тренировки</option>
              <option value="5">5 тренировок</option>
            </select>
          </div>
          <div className="warmup-form-group">
            <label>Желаемая сложность</label>
            <select
              name="desiredComplexity"
              value={formData.desiredComplexity}
              onChange={handleInputChange}
            >
              <option value="">Выберите сложность</option>
              <option value="low">Легкая</option>
              <option value="medium">Средняя</option>
              <option value="high">Высокая</option>
            </select>
          </div>
        </div>

        <div className="warmup-form-row">
          <div className="warmup-form-group">
            <label>Общая физическая подготовка</label>
            <select
              name="generalFitness"
              value={formData.generalFitness}
              onChange={handleInputChange}
            >
              <option value="">Выберите уровень</option>
              <option value="low">Никогда не занимался(-лась) спортом</option>
              <option value="medium">Занимался(-лась) раньше спортом</option>
              <option value="high">Занимаюсь спортом сейчас</option>
            </select>
          </div>
          <div className="warmup-form-group">
            <label>Тип тренировок</label>
            <select
              name="workoutType"
              value={formData.workoutType}
              onChange={handleInputChange}
            >
              <option value="">Выберите тип</option>
              <option value="strength">Силовая</option>
              <option value="cardio">Кардио</option>
              <option value="flexibility">Гибкость</option>
              <option value="mixed">Смешанная</option>
            </select>
          </div>
        </div>

        <div className="warmup-form-row">
          <div className="warmup-form-group">
            <label>Цель тренировок</label>
            <select
              name="workoutGoal"
              value={formData.workoutGoal}
              onChange={handleInputChange}
            >
              <option value="">Выберите цель</option>
              <option value="weightLoss">Снижение веса</option>
              <option value="muscleGain">Набор мышечной массы</option>
              <option value="endurance">Выносливость</option>
              <option value="health">Общее здоровье</option>
            </select>
          </div>
          <div className="warmup-form-group">
            <label>Давление</label>
            <select
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleInputChange}
            >
              <option value="">Выберите давление</option>
              <option value="normal">Нормальное</option>
              <option value="low">Пониженное</option>
              <option value="high">Повышенное</option>
            </select>
          </div>
        </div>

        <div className="warmup-button-container">
          <button className="warmup-submit-button" onClick={selectWorkouts}>
            Подбор тренировок
          </button>
          <button className="warmup-clear-button" onClick={handleClear}>
            Очистить
          </button>
        </div>
      </div>

      {showWorkoutButtons && (
        <div className="warmup-workouts-container">
          {selectedWorkouts.map((workout, index) => (
            <div key={index} className="warmup-workout-item">
              <button
                className="warmup-workout-button"
                onClick={() => toggleWorkout(index)}
              >
                {index + 1} ТРЕНИРОВКА
              </button>

              {expandedWorkout === index && (
                <div className="warmup-workout-details">
                  <h3>{workout.name}</h3>
                  <p className="warmup-workout-description">
                    {workout.description}
                  </p>

                  <div className="warmup-exercises-container">
                    {workout.exercises.map((exercise, exIndex) => (
                      <div key={exIndex} className="warmup-exercise-item">
                        <h4>{exercise.name}</h4>
                        <div className="warmup-exercise-details">
                          <img
                            src={exercise.imageUrl}
                            alt={exercise.name}
                            className="warmup-exercise-image"
                          />
                          <div className="warmup-exercise-info">
                            <p>{exercise.description}</p>
                            <div className="warmup-exercise-parameters">
                              <span>Повторений: {exercise.reps}</span>
                              <span>Подходов: {exercise.sets}</span>
                              {exercise.weight && (
                                <span>Вес: {exercise.weight}</span>
                              )}
                              {exercise.duration && (
                                <span>Длительность: {exercise.duration}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Individual_Warmups;
