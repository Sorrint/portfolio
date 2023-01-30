const booking = {
    title: 'Бронирование номеров в отеле',
    description: `<p>Fullstack-приложение. Проект выполнен на стеке MongoDB, Express, React и NodeJS. </p> <p>В проекте реализована авторизация/регистрация пользователя, функционал бронирования номеров, панель администратора (просмотр статуса комнат, просмотр и редактирование записей бронирования клиентов), страница отзывов.</p>`,
    slides: [
        'hotel_admin_rooms',
        'hotel_booking_calendar',
        'hotel_booking_page',
        'hotel_calendar',
        'hotel_popup_booking',
        'hotel_popup_review',
        'hotel_profile_booking',
        'hotel_reviews_page',
        'hotel_room_card',
        'hotel_room_page'
    ],
    deploy: 'http://194.87.235.87/',
    github: 'https://github.com/Sorrint/graduation_project'
};

const fastCompany = {
    title: 'Приложение для знакомств',
    description:
        '<p>Проект выполнен на  React и FireBase.</p> <p>Пользователи могут регистрироваться в системе, просматривать других пользователей после авторизации, оставлять в профилях сообщения.</p>',
    slides: ['fast-company__users', 'fast-company__profile', 'fast-company__edit', 'fast-company__register'],
    deploy: 'https://sorrint.github.io/Fast-Company/',
    github: 'https://github.com/Sorrint/Fast-Company'
};

const teamSite = {
    title: 'Сайт-представление команды',
    description:
        '<p>Проект выполнен моей командой на React в рамках хакатона.</p> <p>Исполнял роль тимлида, помимо разработки своих модулей занимался сведением всех модулей в рабочий проект и делал деплой на github.  </p><p>И это была правда моя DreamTeam те пару дней, ребята также выкладывались на результат!))</p>',
    slides: [
        'team-site__main',
        'team-site__developers1',
        'team-site__developers2',
        'team-site__anton',
        'team-site__dmitriy',
        'team-site__evhen',
        'team-site__yakov'
    ],
    deploy: 'https://sorrint.github.io/react-team-site/',
    github: 'https://github.com/Sorrint/react-team-site'
};

const hackathon01 = {
    title: 'Контекстное меню',
    description:
        '<p>Проект выполнен моей командой на JavaScript в рамках хакатона.</p> <p>В приложении заменено дефолтное меню на кастомное, и в него добавлены модули, разработанные участниками. </p><p>Управление меню с клавиатуры: </p><p>- клавиша (z) или (x) поворачивает меню </p><p>- клавиша (s) запускает модуль, который расположен на 12 часов. </p>',
    slides: [
        'custom-menu__menu',
        'custom-menu__timer',
        'custom-menu__game',
        'custom-menu__message',
        'custom-menu__music'
    ],
    deploy: 'https://sorrint.github.io/roundMenu/',
    github: 'https://github.com/Sorrint/01-hackathon'
};

export const examples = [booking, fastCompany, teamSite, hackathon01];
