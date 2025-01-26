import React from "react";
import Images from "../js/images"; // Компонент для изображений
import styles from "../styles/styles.module.css"; // Стили компонента
import { useSlider } from "../js/sliderLogic"; // Импортируем логику слайдера
import { cardData } from "../data/cards";

const Slider = () => {
  // Используем хук управления слайдером
  const [currentCard, setCurrentCard, goToNextCard, goToPreviousCard] =
    useSlider(
      cardData.length,
      5000, // Интервал времени
      false // Передайте true, если нужно отключить автопереключение для мобильных устройств
    );

  return (
    <div className={styles.sliderSection}>
      {/* Пагинация */}
      <div className={styles.pagination}>
        {cardData.map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationButton} ${
              index === currentCard ? "" : styles.inactivePagination
            }`}
            onClick={() => setCurrentCard(index)}
            aria-label={`Перейти к карточке ${index + 1}`}
          >
            <div className={styles.paginationGroup}>
              <div className={styles.paginationBackground}></div>
              {index === currentCard && (
                <div className={styles.paginationForeground}></div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Слайдер */}
      <div className={styles.sliderContainer}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${styles.sliderCard} ${
              index === currentCard ? styles.activeCard : styles.hiddenCard
            }`}
          >
            {/* Блок с изображением */}
            <div className={styles.sliderCard__img}>
              <Images type={card.imageType} />
            </div>

            {/* Блок с информацией */}
            <div className={styles.sliderCard__info}>
              <h2 className={styles.sliderCard__title}>{card.title}</h2>
              <p className={styles.sliderCard__text}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
