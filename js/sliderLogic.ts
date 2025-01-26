//js/sliderLogic.ts
import { useState, useEffect, useCallback } from "react";

/**
 * Хук для управления слайдером.
 *
 * @param totalCards - Общее количество карточек.
 * @param intervalTime - Интервал времени для автоматической смены карточек (в миллисекундах).
 * @param isMobile - Флаг, указывающий, мобильное устройство или нет.
 * @returns [currentCard, setCurrentCard, goToNextCard, goToPreviousCard]
 */
export const useSlider = (
  totalCards: number,
  intervalTime: number = 3000,
  isMobile: boolean = false
): [
  number, // Текущая карточка
  React.Dispatch<React.SetStateAction<number>>, // Функция изменения текущей карточки
  () => void, // Переход к следующей карточке
  () => void // Переход к предыдущей карточке
] => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  // Функция для перехода к следующей карточке
  const goToNextCard = useCallback(() => {
    setCurrentCard((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  // Функция для перехода к предыдущей карточке
  const goToPreviousCard = useCallback(() => {
    setCurrentCard((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Автоматическое переключение карточек
  useEffect(() => {
    if (typeof window === "undefined" || isMobile) return; // Отключаем на сервере и для мобильных устройств

    const interval = setInterval(goToNextCard, intervalTime);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [intervalTime, isMobile, goToNextCard]); // Добавляем goToNextCard как зависимость

  return [currentCard, setCurrentCard, goToNextCard, goToPreviousCard];
};
