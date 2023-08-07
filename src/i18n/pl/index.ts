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
      description: `Data wchodzenia w życie: 31.07.2023

      Witamy w Rectle! Niniejsza Polityka prywatności i bezpieczeństwa określa, w jaki sposób zbieramy, wykorzystujemy, udostępniamy i chronimy Twoje informacje podczas korzystania z aplikacji Rectle ("Aplikacja"). Twoja prywatność i bezpieczeństwo są dla nas najważniejsze, dlatego zobowiązujemy się do ochrony Twoich danych osobowych. Korzystając z Rectle, akceptujesz warunki tej Polityki prywatności i bezpieczeństwa.

      1. Informacje, które zbieramy:

      a. Dane osobowe: Podczas tworzenia konta w Rectle możemy zbierać pewne dane osobowe, takie jak Twoje imię, adres e-mail i zdjęcie profilowe. Te informacje są niezbędne do dostarczenia Ci spersonalizowanego doświadczenia i umożliwienia korzystania z określonych funkcji w Aplikacji.

      b. Informacje o urządzeniu: Możemy zbierać dane dotyczące urządzenia, z którego korzystasz w celu uzyskania dostępu do Rectle, takie jak unikalny identyfikator urządzenia, system operacyjny i informacje o sieci mobilnej. Te dane pomagają nam zoptymalizować nasze usługi pod kątem różnych urządzeń i rozwiązywać problemy techniczne.

      c. Dane o korzystaniu z aplikacji: Nasze serwery automatycznie rejestrują informacje o Twoich interakcjach z Rectle, takie jak odwiedzane strony, używane funkcje i wyświetlane treści. Te dane są zbierane anonimowo i służą do poprawy ogólnego doświadczenia użytkownika oraz wydajności Aplikacji.

      2. W jaki sposób wykorzystujemy Twoje dane:

      a. Personalizacja: Wykorzystujemy Twoje dane osobowe do spersonalizowania Twojego doświadczenia z Rectle, dostarczenia odpowiednich treści i sugerowania spersonalizowanych rekomendacji.

      b. Komunikacja: Możemy użyć Twojego adresu e-mail do przesyłania ważnych aktualizacji, ogłoszeń i materiałów promocyjnych związanych z Rectle. Możesz w dowolnym momencie zrezygnować z otrzymywania komunikacji marketingowej.

      c. Analizy: Dane dotyczące korzystania z Aplikacji są wykorzystywane do celów analitycznych, umożliwiając nam zrozumienie zachowań, preferencji i trendów użytkowników. Te informacje pomagają nam ulepszyć funkcjonalność Aplikacji i zidentyfikować obszary wymagające poprawy.

      3. Udostępnianie i ujawnianie danych:

      a. Usługodawcy zewnętrzni: Możemy udostępniać Twoje dane zaufanym usługodawcom zewnętrznym, którzy pomagają nam świadczyć nasze usługi, takim jak dostawcy usług przechowywania w chmurze, platformy analityczne i narzędzia do obsługi klienta. Te podmioty są zobowiązane do ściśle tajnych umów i nie mają prawa wykorzystywać Twoich danych w żadnym innym celu.

      b. Wymogi prawne: Możemy ujawnić Twoje dane, jeśli jest to wymagane przez prawo, na przykład w celu zgodności z nakazem sądowym, procesem prawnym lub żądaniem organu rządowego.

      4. Bezpieczeństwo danych:

      a. Szyfrowanie: Wprowadzamy protokoły szyfrowania standardów branżowych, aby chronić Twoje dane osobowe podczas przesyłania i przechowywania.

      b. Kontrola dostępu: Dostęp do Twoich danych osobowych jest ograniczony wyłącznie do upoważnionego personelu, którzy potrzebują danych do wykonywania swoich określonych zadań.

      c. Minimalizacja danych: Zachowujemy Twoje dane jedynie przez okres niezbędny do realizacji celów określonych w niniejszej polityce.

      5. Prywatność dzieci:

      Aplikacja Rectle nie jest przeznaczona dla osób poniżej 13. roku życia. Nie zbieramy świadomie danych osobowych od dzieci. Jeśli jesteś rodzicem lub opiekunem i uważasz, że Twoje dziecko podało nam dane osobowe bez Twojej zgody, skontaktuj się z nami natychmiast.

      6. Zmiany w tej Polityce:

      Zastrzegamy sobie prawo do aktualizacji tej Polityki prywatności i bezpieczeństwa w miarę potrzeby. W przypadku zmian poinformujemy Cię za pośrednictwem Aplikacji lub na adres e-mail powiązany z Twoim kontem. Twoim obowiązkiem jest okresowe zapoznanie się z tą polityką, aby być na bieżąco z ewentualnymi zmianami.

      7. Skontaktuj się z nami:

      Jeśli masz jakiekolwiek pytania, obawy lub wnioski dotyczące tej Polityki prywatności i bezpieczeństwa lub praktyk Rectle, skontaktuj się z nami pod adresem:

      help@rectle.com

      Korzystając z Rectle, potwierdzasz, że zapoznałeś się z niniejszą Polityką prywatności i bezpieczeństwa, rozumiesz jej treść i wyrażasz zgodę na zbieranie, wykorzystywanie i ujawnianie Twoich danych zgodnie z opisanymi w niej warunkami.`,
    },
    helpAndSupport: {
      title: 'Pomoc i wsparcie',
    },
  },
};
