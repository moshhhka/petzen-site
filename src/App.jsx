import "./App.css"
import dogCat from "./images/dog-cat.png"
import appScreen from "./images/app-screen.png"
import petIllustration from "./images/pet-illustration.png"
import appStore from "./images/app-store.png"
import avatar1 from "./images/avatar1.png"
import avatar2 from "./images/avatar2.png"
import avatar3 from "./images/avatar3.png"
import dogIllustration from "./images/dog-illustration.png"

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-black">Pet</span>
          <span className="logo-yellow">Zen</span>
        </div>

        <nav className="nav">
          <a href="#" className="nav-link">
            Главная
          </a>
          <a href="#" className="nav-link">
            О нас
          </a>
          <a href="#" className="nav-link">
            Услуги
          </a>
          <a href="#" className="nav-link">
            Наше приложение
          </a>
          <a href="#" className="nav-link">
            Блог
          </a>
        </nav>

        <a href="#" className="button">
          Войти
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Лучшая поддержка в уходе за вашим <br />
            <span className="text-yellow">лучшим другом</span>
          </h1>
          <p className="hero-text">
            Здесь вы найдете ответы на все ваши вопросы, от выбора лучшего корма до важных советов по обеспечению
            благополучия вашего пушистого компаньона.
          </p>
          <a href="#" className="button">
            Войти
          </a>
        </div>

        <div className="hero-image-container">
          <img src={dogCat || "/placeholder.svg"} alt="Собака и кошка" className="hero-image" />
          <div className="yellow-circle circle-1"></div>
          <div className="yellow-circle circle-2"></div>
          <div className="yellow-circle circle-3"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">
          Узнайте важные советы, чтобы обеспечить комфорт, которого заслуживает ваш питомец!
        </h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🐕</div>
            <h3 className="feature-title">Дрессировка</h3>
            <p className="feature-text">
              Профессиональные советы по обучению вашего питомца для поддержания гармоничных отношений с вами.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🍗</div>
            <h3 className="feature-title">Питание</h3>
            <p className="feature-text">
              Узнайте, как выбрать лучшее питание, избегая токсичных продуктов и поддерживая идеальный вес.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3 className="feature-title">Усыновление</h3>
            <p className="feature-text">
              Найдите идеального питомца для вашего дома и образа жизни, узнайте, как провести тест и какое животное
              выбрать для лучшей связи.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🩺</div>
            <h3 className="feature-title">Здоровье</h3>
            <p className="feature-text">
              Научитесь распознавать тревожные сигналы о здоровье вашего питомца и предотвращать болезни с помощью наших
              советов.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧼</div>
            <h3 className="feature-title">Уход</h3>
            <p className="feature-text">
              Изучите уход за зубами, чистку ушей и многое другое для поддержания гигиены вашего питомца.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧩</div>
            <h3 className="feature-title">Интересные факты</h3>
            <p className="feature-text">
              Изучите советы по поведению в период адаптации, узнайте детали об идеальном распорядке дня.
            </p>
          </div>
        </div>
      </section>

      {/* App Promo Section */}
      <section className="app-promo">
        <div className="app-promo-content">
          <h2 className="app-promo-title">Вы и ваш питомец еще более связаны!</h2>
          <p className="app-promo-text">
            Наше приложение упрощает жизнь владельца, ведя историю здоровья питомца, управляя ежемесячными расходами и
            подключая вас к активному сообществу родителей домашних животных.
          </p>
          <a href="#" className="button">
            Получить сейчас!
          </a>
        </div>

        <div className="app-promo-image">
          <img src={petIllustration || "/placeholder.svg"} alt="Иллюстрация питомца" />
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-download">
        <div className="app-screen">
          <img src={appScreen || "/placeholder.svg"} alt="Скриншот приложения" />
        </div>

        <div className="app-info">
          <h2 className="app-download-title">СКАЧАЙТЕ НАШЕ ПРИЛОЖЕНИЕ!</h2>

          <div className="app-feature">
            <div className="check-icon"></div>
            <div>
              <h3 className="app-feature-title">Умные уведомления и напоминания</h3>
              <p className="app-feature-text">
                Получайте персонализированные уведомления о прививках, визитах к ветеринару и других потребностях,
                гарантируя, что вы ничего не забудете.
              </p>
            </div>
          </div>

          <div className="app-feature">
            <div className="check-icon"></div>
            <div>
              <h3 className="app-feature-title">Удобный интерфейс для всех</h3>
              <p className="app-feature-text">
                Простой и интуитивно понятный дизайн, чтобы все члены семьи, независимо от цифрового опыта, могли
                получить доступ к той же информации приложения.
              </p>
            </div>
          </div>

          <div className="app-feature">
            <div className="check-icon"></div>
            <div>
              <h3 className="app-feature-title">Интуитивный и привлекательный дизайн</h3>
              <p className="app-feature-text">
                Наслаждайтесь визуально приятным и простым в навигации интерфейсом, разработанным для обеспечения
                плавного и приятного опыта для каждого пользователя.
              </p>
            </div>
          </div>

          <img src={appStore || "/placeholder.svg"} alt="Скачать в App Store" className="app-store-badge" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">
          Узнайте, что пользователи Pet<span className="text-yellow">Zen</span> думают о приложении!
        </h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="yellow-dot"></div>
            <div className="testimonial-header">
              <img src={avatar1 || "/placeholder.svg"} alt="Карлос Сантана" className="testimonial-avatar" />
              <div>
                <h3 className="testimonial-name">Карлос Сантана</h3>
                <p className="testimonial-role">Владелец кошек</p>
              </div>
            </div>
            <p className="testimonial-text">
              Приложение упростило лечение и держит меня в курсе здоровья моего пушистого друга. Я больше никогда не
              забываю о прививке или визите к врачу. Рекомендую всем любителям животных!
            </p>
          </div>

          <div className="testimonial-card">
            <div className="yellow-dot"></div>
            <div className="testimonial-header">
              <img src={avatar2 || "/placeholder.svg"} alt="Джованна Лима" className="testimonial-avatar" />
              <div>
                <h3 className="testimonial-name">Джованна Лима</h3>
                <p className="testimonial-role">Владелец собак</p>
              </div>
            </div>
            <p className="testimonial-text">
              С тех пор как я начала использовать приложение, я заметила положительные изменения в поведении моего
              питомца! Советы невероятные, а сообщество очень поддерживающее!
            </p>
          </div>

          <div className="testimonial-card">
            <div className="yellow-dot"></div>
            <div className="testimonial-header">
              <img src={avatar3 || "/placeholder.svg"} alt="Регина Сантос" className="testimonial-avatar" />
              <div>
                <h3 className="testimonial-name">Регина Сантос</h3>
                <p className="testimonial-role">Владелец питомцев</p>
              </div>
            </div>
            <p className="testimonial-text">
              Приложение не только напоминает мне о прививках и визитах, но и подключило меня к невероятному сообществу
              владельцев питомцев!
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Не пропустите наши обновления!</h2>
          <p className="newsletter-text">
            Зарегистрируйтесь, чтобы получать новости, новые инструменты, акции и многое другое.
          </p>

          <div className="benefits">
            <div className="benefit">
              <div className="check-icon"></div>
              <p>Получайте обновления первыми</p>
            </div>
            <div className="benefit">
              <div className="check-icon"></div>
              <p>Получайте купоны на скидки</p>
            </div>
            <div className="benefit">
              <div className="check-icon"></div>
              <p>Читайте статьи на актуальные темы</p>
            </div>
          </div>

          <div className="newsletter-form">
            <input type="email" placeholder="Введите ваш email..." className="newsletter-input" />
            <button className="newsletter-button">→</button>
          </div>
        </div>

        <div className="newsletter-image">
          <div className="yellow-circle"></div>
          <img src={dogIllustration || "/placeholder.svg"} alt="Иллюстрация собаки" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo footer-logo">
              <span className="logo-black">Pet</span>
              <span className="logo-yellow">Zen</span>
            </div>

            <div className="footer-nav">
              <a href="#" className="footer-link">
                Главная
              </a>
              <a href="#" className="footer-link">
                О нас
              </a>
              <a href="#" className="footer-link">
                Услуги
              </a>
              <a href="#" className="footer-link">
                Наше приложение
              </a>
            </div>

            <div className="social-icons">
              <a href="#" className="social-icon">
                ●
              </a>
              <a href="#" className="social-icon">
                ●
              </a>
              <a href="#" className="social-icon">
                ●
              </a>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-badge">Свяжитесь с нами</div>
            <p>Email: email@email.com</p>
            <p>Телефон: +7 999 999-99-99</p>
            <p>Адрес:</p>

            <div className="footer-form">
              <input type="email" placeholder="Email" className="footer-input" />
              <button className="footer-button">Подписаться на рассылку</button>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2023 Даниэль Фрагао. Все права защищены.</p>
          <div className="policy-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Политика использования файлов cookie</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
