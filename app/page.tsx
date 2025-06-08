import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"

export default function Home() {
  return (
    <div className="font-sans pt-20">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Лучшая поддержка в уходе за вашим <span className="text-yellow-500">лучшим другом</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Здесь вы найдете ответы на все ваши вопросы, от выбора лучшего корма до важных советов по обеспечению благополучия вашего пушистого компаньона.
          </p>
          <Link href="#" className="bg-yellow-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors inline-block">
            Войти
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image src="/ilustration.svg?height=400&width=400" alt="Собака и кошка" width={500} height={500} className="mx-auto" />
        </div>
      </section>


      {/* Features Section */}
      <section id="services" className="container mx-auto px-4 py-12">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-10">
          Узнайте важные советы, чтобы обеспечить комфорт, которого заслуживает ваш питомец!
        </h3>

        {/* Карточки с преимуществами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🐕", title: "Дрессировка", text: "Профессиональные советы по обучению вашего питомца для поддержания гармоничных отношений с вами." },
            { icon: "🍗", title: "Питание", text: "Узнайте, как выбрать лучшее питание, избегая токсичных продуктов и поддерживая идеальный вес." },
            { icon: "🏠", title: "Усыновление", text: "Найдите идеального питомца для вашего дома и образа жизни, узнайте, как провести тест и какое животное выбрать для лучшей связи." },
            { icon: "🩺", title: "Здоровье", text: "Научитесь распознавать тревожные сигналы о здоровье вашего питомца и предотвращать болезни с помощью наших советов." },
            { icon: "🧼", title: "Уход", text: "Изучите уход за зубами, чистку ушей и многое другое для поддержания гигиены вашего питомца." },
            { icon: "🧩", title: "Интересные факты", text: "Изучите советы по поведению в период адаптации, узнайте детали об идеальном распорядке дня." },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Promo Section */}
      <section id="about" className="container mx-auto px-4 py-12 bg-gray-100 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pl-8">
            <h3 className="text-xl font-semibold mb-4">Вы и ваш питомец еще более связаны!</h3>
            <p className="text-gray-600 mb-6">
              Наше приложение упрощает жизнь владельца, ведя историю здоровья питомца, управляя ежемесячными расходами и
              подключая вас к активному сообществу родителей домашних животных.
            </p>
            <Link
              href="#"
              className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors inline-block"
            >
              Получить сейчас!
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/group ilustration.svg?height=300&width=300" alt="Иллюстрация питомца" width={300} height={300} className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="app" className="container mx-auto p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Изображение */}
          <div className="md:w-1/2">
            <Image src="/iphone.svg?height=600&width=500" alt="Скриншот приложения" width={500} height={600} className="mx-auto" />
          </div>


          {/* Контент */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">СКАЧАЙТЕ НАШЕ ПРИЛОЖЕНИЕ!</h3>

            {/* Список преимуществ */}
            {[
              {
                title: "Умные уведомления и напоминания",
                description:
                  "Получайте персонализированные уведомления о прививках, визитах к ветеринару и других потребностях, гарантируя, что вы ничего не забудете.",
              },
              {
                title: "Удобный интерфейс для всех",
                description:
                  "Простой и интуитивно понятный дизайн, чтобы все члены семьи, независимо от цифрового опыта, могли получить доступ к той же информации приложения.",
              },
              {
                title: "Интуитивный и привлекательный дизайн",
                description: "Наслаждайтесь визуально приятным и простым в навигации интерфейсом, разработанным для обеспечения плавного и приятного опыта для каждого пользователя.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start mb-6">
                <div className="mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="12" fill="#FFC107" />
                    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Кнопка скачивания */}
            <Link href="#" className="inline-block">
              <Image src="/button app.svg?height=50&width=150" alt="Скачать в App Store" width={150} height={50} />
            </Link>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-12 mt-[-60px]">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-10">
          Узнайте, что пользователи Pet<span className="text-yellow-500">Zen</span> думают о приложении!
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Карлос Сантана",
              role: "Владелец кошек",
              image: "/ian-dooley-d1UPkiFd04A-unsplash 1.svg?height=60&width=60",
              review: "Приложение упростило лечение и держит меня в курсе здоровья моего пушистого друга. Я больше никогда не забываю о прививке или визите к врачу. Рекомендую всем любителям животных!",
            },
            {
              name: "Джованна Лима",
              role: "Владелец собак",
              image: "/suad-kamardeen-khewjy5l4Zo-unsplash 2.svg?height=60&width=60",
              review: "С тех пор как я начала использовать приложение, я заметила положительные изменения в поведении моего питомца! Советы невероятные, а сообщество очень поддерживающее!",
            },
            {
              name: "Регина Сантос",
              role: "Владелец питомцев",
              image: "/christian-buehner-DItYlc26zVI-unsplash 1.svg?height=60&width=60",
              review: "Приложение не только напоминает мне о прививках и визитах, но и подключило меня к невероятному сообществу владельцев питомцев!",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 relative w-full">
              <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Image src="/fi-rr-paw.svg?height=20&width=20" alt="Иконка" width={20} height={20} className="object-contain" />
              </div>
              <div className="flex items-center mb-4">
                <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full mr-3" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center">
          {/* Левый блок с текстом */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Не пропустите наши обновления!</h3>
            <p className="text-gray-600 mb-6">
              Зарегистрируйтесь, чтобы получать новости, новые инструменты, акции и многое другое.
            </p>

            {/* Динамически рендерим список преимуществ */}
            {[
              "Получайте обновления первыми",
              "Получайте купоны на скидки",
              "Читайте статьи на актуальные темы",
            ].map((text, index) => (
              <div key={index} className="flex items-center mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                  <rect width="24" height="24" rx="12" fill="#FFC107" />
                  <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" />
                </svg>
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            ))}

            {/* Поле ввода email */}
            <div className="flex mt-6">
              <input
                type="email"
                placeholder="Введите ваш email..."
                className="px-4 py-2 border border-gray-300 rounded-l-full w-full focus:outline-none"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Блок с изображением */}
          <div className="md:w-1/2 mb-12 flex items-center justify-center">
            <Image src="/illustration2.svg" alt="Иллюстрация" width={300} height={300} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">
                <span className="text-black">Pet</span>
                <span className="text-yellow-500">Zen</span>
              </h2>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="#home" className="text-sm text-gray-700 hover:text-gray-900">
                  Главная
                </Link>
                <Link href="#about" className="text-sm text-gray-700 hover:text-gray-900">
                  О нас
                </Link>
                <Link href="#services" className="text-sm text-gray-700 hover:text-gray-900">
                  Услуги
                </Link>
                <Link href="#app" className="text-sm text-gray-700 hover:text-gray-900">
                  Наше приложение
                </Link>
                <Link href="#testimonials" className="text-sm text-gray-700 hover:text-gray-900">
                  Блог
                </Link>
              </nav>
              <div className="flex space-x-4 mt-4">
                <Link href="#" aria-label="VK">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-600">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Telegram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-600">
                    <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="WhatsApp">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-600">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-yellow-500 text-white text-xs font-semibold py-1 px-3 rounded-full inline-block mb-4">
                Свяжитесь с нами
              </div>
              <p className="text-sm text-gray-600 mb-1">Email: email@email.com</p>
              <p className="text-sm text-gray-600 mb-1">Телефон: +7 999 999-99-99</p>
              <p className="text-sm text-gray-600">Адрес:</p>

              <div className="mt-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none"
                  />
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-md text-sm">
                    Подписаться на рассылку
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>© 2025 Ангелина. Этот сайт создан в рамках университетской практики.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
