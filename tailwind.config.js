module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Файлы страниц
    './components/**/*.{js,ts,jsx,tsx}', // Компоненты
    './js/**/*.{js,ts}', // Вспомогательные файлы
  ],
  plugins: [
    // Добавьте плагины TailwindCSS, если нужно
  ],
  theme: {
    extend: {
      fontFamily: {
        ppNeueMontreal: ['PP Neue Montreal', 'sans-serif'], // Ваш основной шрифт
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
};
