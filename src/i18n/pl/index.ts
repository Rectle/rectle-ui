// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Niepowodzenie',
  success: 'Akcja powiodła się',
  dashboard: {
    title: 'Linki',
    setting: {
      title: 'Ustawienia',
      darkmode: 'Darkmode',
    },
    links: {
      home: {
        title: 'Rectle',
        caption: 'strona główna',
        icon: 'o_home',
        link: 'home',
      },
      setting: {
        title: 'Ustawienia',
        caption: 'więcej ustawień',
        icon: 'o_settings',
        link: 'setting',
      },
      competitions: {
        title: 'Zawody',
        caption: 'Rywalizacja w naszych konkursach',
        icon: 'o_emoji_events',
        link: 'competitions',
      },
      yourworkspace: {
        title: 'Twój Workspace',
        caption: 'Twoje projekty',
        icon: 'o_workspaces',
        link: 'yourworkspace',
      },
    },
    icons: {
      labels: {
        menu: 'Menu',
      },
    },
  },
  searchBar: {
    search: 'Szukaj',
    filterBar: {
      sort: 'Sortuj',
      filter: 'Filtruj',
      date: 'Data',
      active: 'Aktytwne',
      ended: 'Zakończone',
      toggleActive: 'Aktywne',
      toggleEnd: 'Zakończone',
      uploadDate: 'Date',
    },
  },
  tabs: {
    creator: 'Twórca',
    participant: 'Uczestnik',
  },
  addProject: {
    form: {
      title: 'Stwórz projekt',
      projectName: 'Nazwa projektu',
      description: 'Opis (opcjonalne)',
      baner: 'Wgraj zdjęcie baneru (opcjonalne)',
    },
    browse: {
      title: 'WYBIERZ',
    },
  },
  projectCard: {
    author: 'Autor: ',
    users: 'użytkowników',
    date: 'Data: ',
  },
  projectTabs: {
    overview: 'Przegląd',
    code: 'Kod',
    approaches: 'Twoje podejście',
    leaderboard: 'Tablica wyników',
  },
  codePage: {
    model: {
      title: 'Wgraj model',
      create: 'Stwórz model',
      modelName: 'Nazwa modelu',
      errorName: 'Najpierw wgraj projekt!',
    },
    project: {
      title: 'Wgraj projekt',
    },
    title: 'Code',
    uploadLabel: 'Wgraj plik',
    emptyData: 'Przesłany formularz zawiera puste dane formularza!',
    successData: 'Plik został pomyślnie przesłany',
    errorData: 'Podczas przesyłania pliku wystąpił problem',
  },
  approcheTab: {
    empty: 'Projekt nie ma żadnych podejść',
    details: {
      compileId: 'ID: ',
      status: 'Status: ',
      name: 'Nazwa: ',
    },
  },
  logsPage: {
    title: 'Logi',
    empty: 'Logi nie są w tej chwili dostępne!',
  },
  projectOverviewTitle: {
    author: 'Autor: ',
    users: 'użytkowników',
    date: 'Data: ',
  },
  approcheStatusTitle: {
    id: 'ID: ',
    score: 'Wynik: ',
  },
  logs: {
    id: '#',
    name: 'Logi',
  },
  auth: {
    signin: {
      title: 'Zaloguj się przy użyciu',
      meta: {
        title: 'Logowanie',
      },
    },
    signup: {
      title: 'Zarejestruj się przy użyciu',
      meta: {
        title: 'Register',
      },
    },
  },
  settingPage: {
    title: 'Ustawienia',
    list: {
      account: {
        title: 'Konto',
        icon: 'o_person',
      },
      notification: {
        title: 'Powiadomienia',
        icon: 'o_notifications',
      },
      privacy: {
        title: 'Prywatność & Bezpieczeństwo',
        icon: 'o_lock',
      },
      help: {
        title: 'Pomoc i wsparcie',
        icon: 'o_headphones',
      },
      about: {
        title: 'O nas',
        icon: 'o_info',
      },
      logout: {
        title: 'Wyloguj',
        icon: 'o_logout',
      },
    },
    accountSettings: {
      title: 'Konto',
      toggleJWT: {
        trueValue: 'JWT włączone',
        falseValue: 'JWT wyłączone',
      },
    },
    notificationsSettings: {
      title: 'Powdiadomienia',
      empty: 'Brak powiadomien',
    },
    privacyAndSecurity: {
      title: 'Prywatność & Bezpieczeństwo',
    },
    helpAndSupport: {
      title: 'Pomoc i wsparcie',
    },
    about: {
      title: 'O nas',
    },
  },
};
