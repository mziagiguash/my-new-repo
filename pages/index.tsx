import styles from '../styles/styles.module.css'; // Импорт стилей
import Images from '../js/images'; // Импорт компонента для изображений

import Slider from '../components/Slider';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        {/* Верхняя панель для десктопной версии */}
        <div className={styles.topBar}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>
            <a href="#" className={styles.brandLink}>
              <Images type="logo" /></a>
            </div>
            {/* Для десктопа только */}
            <div className={styles.brandName}>STEMPS</div>
          </div>

          <div className={styles.navigation}>
            <div className={styles.navItem}>О школе</div>
            <div className={styles.navItem}>Курсы</div>
            <div className={styles.navItem}>Библиотека</div>
          </div>

          <div className={styles.login}>
            <div className={styles.loginText}>Вход</div>
            <a href="#" className={styles.brandLink}>
            <Images type="login" /></a>
          </div>
        </div>

        {/* Бургер-меню для мобильной версии */}
          <div className={styles.topBar}>
          <div className={styles.menu}>
          <div className={styles.menuText}>Меню</div>
        </div>
        </div>
      </div>

      {/* Frame Section */}
      <div className={styles.frameContainer}>
        <div className={styles.frameHeader}>
          <div className={styles.frameTitle}>1.0</div>
        </div>
        <div className={styles.frameContent}>
          <div className={styles.frameImage}></div>
          <div className={styles.frameServices}>Наши услуги</div>
        </div>
      </div>

      {/* Слайдер с пагинацией */}
      <Slider />
    </div>
  );
}
