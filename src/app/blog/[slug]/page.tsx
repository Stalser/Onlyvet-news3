import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const blogPosts: Record<string, {
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
}> = {
  'vaccination-schedule': {
    title: 'График вакцинации щенков и котят',
    content: `
      <h2>Зачем нужна вакцинация?</h2>
      <p>Вакцинация — это самый эффективный способ защитить вашего питомца от опасных инфекционных заболеваний. Многие болезни, от которых делают прививки, смертельны для молодых животных.</p>
      
      <h2>Первая вакцинация</h2>
      <p><strong>Щенки:</strong> первая прививка в 8-9 недель, ревакцинация в 12 недель, затем в 6 месяцев.</p>
      <p><strong>Котята:</strong> первая прививка в 8-9 недель, ревакцинация в 12 недель.</p>
      
      <h2>От чего прививают?</h2>
      <ul>
        <li>Чума плотоядных</li>
        <li>Парвовирусный энтерит</li>
        <li>Аденовироз</li>
        <li>Парагрипп</li>
        <li>Лептоспироз (для собак)</li>
        <li>Бешенство (обязательно с 3 месяцев)</li>
        <li>Панлейкопения (для кошек)</li>
        <li>Калицивироз (для кошек)</li>
        <li>Ринотрахеит (для кошек)</li>
      </ul>
      
      <h2>Подготовка к вакцинации</h2>
      <ol>
        <li>За 10-14 дней до прививки обработайте от паразитов</li>
        <li>Животное должно быть полностью здорово</li>
        <li>Не вакцинируйте в период смены зубов (4-6 месяцев)</li>
      </ol>
      
      <h2>После вакцинации</h2>
      <p>В течение 2 недель после прививки соблюдайте карантин — не гуляйте с щенком, не допускайте контакта с другими животными.</p>
    `,
    date: '5 марта 2026',
    readTime: '5 мин',
    category: 'Профилактика',
    image: '💉',
    author: 'Курилов Андрей Степанович',
  },
  'signs-of-illness': {
    title: '10 признаков болезни у кошек',
    content: `
      <h2>Как понять, что кошка заболела?</h2>
      <p>Кошки мастерски скрывают симптомы болезни — это инстинкт выживания. Поэтому важно знать ранние признаки недомогания.</p>
      
      <h2>10 тревожных симптомов:</h2>
      <ol>
        <li><strong>Изменение аппетита:</strong> отказ от еды или повышенный аппетит</li>
        <li><strong>Изменение веса:</strong> резкая потеря или набор веса</li>
        <li><strong>Вялость:</strong> кошка больше спит, меньше играет</li>
        <li><strong>Изменение поведения:</strong> агрессия, скрытность</li>
        <li><strong>Проблемы с туалетом:</strong> диарея, запор, кровь в моче</li>
        <li><strong>Рвота:</strong> особенно если чаще 1-2 раз в неделю</li>
        <li><strong>Изменения шерсти:</strong> тусклая, выпадает, свалялась</li>
        <li><strong>Выделения:</strong> из глаз, носа, ушей</li>
        <li><strong>Изменение жажды:</strong> пьёт больше или меньше обычного</li>
        <li><strong>Дыхание:</strong> затруднённое, учащённое, с хрипами</li>
      </ol>
      
      <h2>Когда нужен срочный визит к врачу?</h2>
      <p>Немедленно обратитесь в клинику, если:</p>
      <ul>
        <li>Кошка не ест больше 24 часов</li>
        <li>Многократная рвота или диарея</li>
        <li>Затруднённое дыхание</li>
        <li>Кровь в моче, кале, рвоте</li>
        <li>Судороги или потеря сознания</li>
      </ul>
    `,
    date: '3 марта 2026',
    readTime: '7 мин',
    category: 'Здоровье',
    image: '🐱',
    author: 'Диана Чемерилова',
  },
  'dog-nutrition': {
    title: 'Правильное питание для собак',
    content: `
      <h2>Основы сбалансированного рациона</h2>
      <p>Правильное питание — залог здоровья и долголетия вашей собаки. Разберёмся, что нужно вашему питомцу.</p>
      
      <h2>Сухой корм или натуралка?</h2>
      <p><strong>Сухой корм:</strong></p>
      <ul>
        <li>✅ Сбалансирован по составу</li>
        <li>✅ Удобно дозировать</li>
        <li>✅ Долго хранится</li>
        <li>❌ Качественные корма дорогие</li>
      </ul>
      
      <p><strong>Натуральное питание:</strong></p>
      <ul>
        <li>✅ Контроль качества продуктов</li>
        <li>✅ Разнообразие</li>
        <li>❌ Требует времени на приготовление</li>
        <li>❌ Нужно добавлять витамины</li>
      </ul>
      
      <h2>Что должно быть в рационе?</h2>
      <ul>
        <li><strong>Белки (50%):</strong> мясо (говядина, индейка, кролик), рыба, яйца</li>
        <li><strong>Углеводы (30%):</strong> рис, гречка, овсянка</li>
        <li><strong>Овощи (20%):</strong> морковь, кабачок, тыква</li>
      </ul>
      
      <h2>Запрещённые продукты:</h2>
      <ul>
        <li>❌ Шоколад</li>
        <li>❌ Виноград и изюм</li>
        <li>❌ Лук и чеснок</li>
        <li>❌ Кости (особенно трубчатые)</li>
        <li>❌ Сладкое, солёное, острое</li>
      </ul>
    `,
    date: '1 марта 2026',
    readTime: '6 мин',
    category: 'Питание',
    image: '🐕',
    author: 'Федосова Мария Александровна',
  },
  'parasite-prevention': {
    title: 'Защита от паразитов',
    content: `
      <h2>Почему это важно?</h2>
      <p>Паразиты не только вызывают дискомфорт, но и могут переносить опасные заболевания, некоторые из которых опасны и для человека.</p>
      
      <h2>Дегельминтизация (от глистов)</h2>
      <p><strong>Как часто:</strong> каждые 3 месяца круглогодично</p>
      <p><strong>Препараты:</strong> Мильбемакс, Дронтал, Каниквантел, Празител</p>
      <p><strong>Дозировка:</strong> по весу животного, строго по инструкции</p>
      
      <h2>Обработка от блох</h2>
      <p><strong>Как часто:</strong> с марта по ноябрь — ежемесячно, зимой — по необходимости</p>
      <p><strong>Препараты:</strong></p>
      <ul>
        <li>Капли на холку (Стронгхолд, Адвантикс, Фронтлайн)</li>
        <li>Таблетки (Бравекто, Симпарика) — действуют до 3 месяцев</li>
        <li>Ошейники (Форесто) — действуют до 8 месяцев</li>
      </ul>
      
      <h2>Защита от клещей</h2>
      <p>Иксодовые клещи переносят пироплазмоз — смертельно опасное заболевание для собак.</p>
      <p><strong>Сезон:</strong> март-июнь и август-октябрь</p>
      <p><strong>Препараты:</strong> те же, что и от блох (большинство средств комплексные)</p>
      
      <h2>Важно!</h2>
      <p>Перед вакцинацией обязательна дегельминтизация за 10-14 дней!</p>
    `,
    date: '28 февраля 2026',
    readTime: '4 мин',
    category: 'Профилактика',
    image: '🛡️',
    author: 'Иванов Олег Сергеевич',
  },
  'senior-pet-care': {
    title: 'Уход за пожилым животным',
    content: `
      <h2>Когда животное считается пожилым?</h2>
      <p><strong>Собаки:</strong></p>
      <ul>
        <li>Мелкие породы — с 7-8 лет</li>
        <li>Средние породы — с 6-7 лет</li>
        <li>Крупные породы — с 5-6 лет</li>
      </ul>
      <p><strong>Кошки:</strong> с 7-8 лет</p>
      
      <h2>Особенности ухода</h2>
      <h3>1. Питание</h3>
      <p>Переходите на корма для пожилых животных (Senior). Они содержат меньше калорий и добавки для суставов.</p>
      
      <h3>2. Обследования</h3>
      <p>Диспансеризация каждые 6 месяцев:</p>
      <ul>
        <li>Общий и биохимический анализ крови</li>
        <li>Анализ мочи</li>
        <li>УЗИ сердца и органов брюшной полости</li>
        <li>Измерение давления</li>
      </ul>
      
      <h3>3. Условия содержания</h3>
      <ul>
        <li>Тёплое место без сквозняков</li>
        <li>Противоскользящие коврики</li>
        <li>Пандусы вместо лестниц</li>
        <li>Легкодоступные миски с водой</li>
      </ul>
      
      <h2>Тревожные симптомы</h2>
      <p>Обратитесь к врачу, если заметили:</p>
      <ul>
        <li>Повышенную жажду</li>
        <li>Изменение веса</li>
        <li>Хромоту или скованность движений</li>
        <li>Изменение поведения</li>
        <li>Недержание</li>
      </ul>
    `,
    date: '25 февраля 2026',
    readTime: '8 мин',
    category: 'Уход',
    image: '🧓',
    author: 'Курилов Андрей Степанович',
  },
  'emergency-signs': {
    title: 'Когда нужна срочная помощь?',
    content: `
      <h2>Симптомы, требующие немедленного обращения к врачу</h2>
      <p>Не ждите утра или записи — в этих случаях каждая минута на счету!</p>
      
      <h2>🚨 Критические состояния:</h2>
      <ol>
        <li><strong>Затруднённое дыхание:</strong> хрипы, кашель, синюшность языка</li>
        <li><strong>Потеря сознания:</strong> животное не реагирует на кличку, прикосновения</li>
        <li><strong>Судороги:</strong> длятся больше 2-3 минут или повторяются</li>
        <li><strong>Кровотечение:</strong> не останавливается более 10 минут</li>
        <li><strong>Травмы:</strong> падение с высоты, ДТП</li>
        <li><strong>Подозрение на отравление:</strong> рвота, слюнотечение, судороги</li>
        <li><strong>Вздутие живота:</strong> особенно у крупных собак (риск заворота желудка)</li>
        <li><strong>Неудачные потуги:</strong> животное тужится более 30 минут без результата</li>
        <li><strong>Температура:</strong> выше 40°C или ниже 36°C</li>
        <li><strong>Бледные или синие слизистые:</strong> признак шока или внутреннего кровотечения</li>
      </ol>
      
      <h2>Что делать до визита к врачу?</h2>
      <ul>
        <li>Сохраняйте спокойствие — животное чувствует ваш стресс</li>
        <li>Позвоните в клинику — предупредите о приезде</li>
        <li>При кровотечении — наложите давящую повязку</li>
        <li>При отравлении — не вызывайте рвоту без консультации!</li>
        <li>Транспортируйте аккуратно, на твёрдой поверхности</li>
      </ul>
      
      <h2>Важно!</h2>
      <p>Онлайн-консультация не заменяет очный приём в экстренных случаях! При критических состояниях немедленно езжайте в клинику.</p>
    `,
    date: '22 февраля 2026',
    readTime: '5 мин',
    category: 'Экстренно',
    image: '🚨',
    author: 'Диана Чемерилова',
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Статья не найдена</p>
          <Link href="/blog" className="text-primary hover:text-primary-dark font-semibold">
            ← Вернуться к блогу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero с иконкой */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="text-8xl mb-6">{post.image}</div>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <span>📅 {post.date}</span>
              <span>⏱ {post.readTime}</span>
              <span>👨‍⚕️ {post.author}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Контент статьи */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="blog-content space-y-6">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </FadeIn>
        </div>
      </article>

      {/* Навигация */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
            >
              ← Вернуться к блогу
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Остались вопросы?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Запишитесь на консультацию — наши ветеринары ответят на все вопросы
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
              style={{ color: '#FFFFFF' }}
            >
              Записаться на консультацию
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
