// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Niepowodzenie',
  success: 'Akcja powiodła się',
  accountSettings: {
    title: 'Konto',
    toggleJWT: {
      trueValue: 'JWT włączone',
      falseValue: 'JWT wyłączone',
    }
  },
  settingPage: {
    title: 'Ustawienia',
    list: {
      account: {
        title: 'Konto',
        icon: 'o_person'
      },
      notification: {
        title: 'Powiadomienia',
        icon: 'o_notifications'
      },
      privacy: {
        title: 'Prywatność & Bezpieczeństwo',
        icon: 'o_lock'
      },
      help: {
        title: 'Pomoc i wsparcie',
        icon: 'o_headphones'
      },
      about: {
        title: 'O nas',
        icon: 'o_info'
      },
      logout: {
        title: 'Wyloguj',
        icon: 'o_logout'
      }
    }
  },
  dashboard: {
    title: 'Linki',
    setting: {
      title: 'Ustawienia',
      darkmode: 'Darkmode'
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
      code: {
        title: 'Wgrywanie kodu',
        caption: 'Rectle IDE',
        icon: 'o_code',
        link: 'code',
      },
      logs: {
        title: 'Logi',
        caption: 'Dziennik logów',
        icon: 'o_monitor_heart',
        link: 'logs',
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
      codeEditor: {
        title: 'Edytor',
        caption: 'Edytor kodu',
        icon: 'o_data_array',
        link: 'codeEditor',
      }
    },
    icons: {
      labels: {
        menu: 'Menu'
      }
    }
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
      uploadDate: 'Date'
    },
  },
  tabs:{
    creator: 'Twórca',
    participant: 'Uczestnik'
  },
  projectCard:{
    author: 'Autor: ',
    users: 'użytkowników',
    date: 'Data: '

  },
  codePage: {
    title: 'Code',
    uploadLabel: 'Wgraj plik',
    emptyData: 'Przesłany formularz zawiera puste dane formularza!',
    successData: 'Plik został pomyślnie przesłany',
    errorData: 'Podczas przesyłania pliku wystąpił problem'
  },
  logsPage: {
    title: 'Logi'
  },
  auth: {
    signin: {
      title: 'Zaloguj się przy użyciu',
      meta: {
        title: 'Logowanie'
      }
    }
  }
};
