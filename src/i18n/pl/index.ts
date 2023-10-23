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
      teams: {
        title: 'Zaspoły',
        caption: 'Zarządzaj zespołami',
        icon: 'o_groups',
        link: 'teams',
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
      tags: 'Tagi (opcjonalne)',
      team: 'Zespoł',
      baner: 'Wgraj zdjęcie baneru (opcjonalne)',
    },
    browse: {
      title: 'WYBIERZ',
    },
  },
  addTeam: {
    form: {
      title: 'Stwórz zespół',
      teamName: 'Nazwa zespołu',
      avatar: 'Wgraj zdjęcie awatara (opcjonalne))',
      tab: 'Stwórz',
      noPendingInvitations: "Brak zaproszeń"
    },
    join: {
      title: 'Dołącz do zespołu',
      tab: 'Dołącz',
    },
  },
  projectCard: {
    team: 'Zespoł: ',
    users: 'użytkowników',
    date: 'Data: ',
    description: 'Opis: ',
  },
  projectTabs: {
    overview: 'Przegląd',
    code: 'Kod',
    approaches: 'Twoje podejście',
    leaderboard: 'Tablica wyników',
    projectError: 'Wystąpił błąd przy odczycie projektu',
  },
  codePage: {
    model: {
      title: 'Wgraj model',
      create: 'Stwórz model',
      modelName: 'Nazwa modelu',
      errorName: 'Najpierw wgraj projekt!',
      submitButton: 'Zapisz i kompiluj',
    },
    project: {
      title: 'Wgraj projekt',
      successData: 'Projekt został pomyślnie stworzony',
      errorData: 'Wystąpił problem przy tworzeniu projektu',
    },
    teams: {
      successData: 'Zespół został pomyślnie stworzony',
      inviteSuccessData: 'Dołączyłeś do zespołu',
      errorData: 'Wystąpił problem przy tworzeniu teamu',
      manage: {
        members: 'Członkowie zespołu',
        inviteUsers: 'Zaproś nowych członków',
        inviteId: 'Id nowego członka',
        invitedUsers: 'Zaproszeni członkowie',
        invite: 'Zaproś',
        cancel: 'Anuluj'
      }
    },
    title: 'Code',
    invalidData: 'Nieprawidłowe dane',
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
    compileDetailsProblemInformation:
      'Wystąpił problem z odczytem podejścia o id: ',
  },
  overviewTab: {
    empty: 'Brak przeglądu.',
  },
  logsPage: {
    title: 'Logi',
    empty: 'Logi nie są w tej chwili dostępne!',
  },
  projectOverviewTitle: {
    team: 'Zespół: ',
    description: 'Opis: ',
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
      description: `Pomoc i wsparcie dla aplikacji Rectle

      Witamy na stronie Pomocy i Wsparcia dla aplikacji Rectle! Jesteśmy tutaj, aby Ci pomóc i udzielić niezbędnych wskazówek, zapewniając płynne korzystanie z aplikacji Rectle. Poniżej znajdziesz najczęściej zadawane pytania oraz odpowiedzi, które mogą pomóc Ci znaleźć potrzebne informacje:

      1. Najczęściej zadawane pytania (FAQ):

      Q1. Jak założyć konto w aplikacji Rectle?
      A1. Aby założyć konto, otwórz aplikację Rectle i kliknij przycisk "Zarejestruj się". Wprowadź swój adres e-mail, utwórz hasło i postępuj zgodnie z wyświetlanymi instrukcjami, aby ukończyć proces rejestracji.

      Q2. Jak zresetować hasło?
      A2. Jeśli zapomniałeś swojego hasła, przejdź do ekranu logowania i kliknij link "Zapomniałeś hasła". Otrzymasz e-mail z instrukcjami dotyczącymi zresetowania hasła.

      Q3. Jak zmienić zdjęcie profilowe?
      A3. Aby zmienić zdjęcie profilowe, przejdź do ustawień profilu i kliknij opcję "Edytuj profil". Stamtąd możesz przesłać nowe zdjęcie lub wybrać je z galerii urządzenia.

      Q4. Jak zgłosić nieodpowiednią treść?
      A4. Jeśli natkniesz się na treść, która narusza nasze wytyczne społeczności lub wydaje się nieodpowiednia, możesz zgłosić to, klikając przycisk "Zgłoś" obok treści. Nasz zespół przeanalizuje zgłoszenie i podejmie odpowiednie działania.

      2. Kontakt z działem wsparcia:

      Jeśli masz jakiekolwiek problemy, wątpliwości lub pytania, które nie są objęte sekcją FAQ, nasz oddany zespół wsparcia jest gotowy do pomocy. Skontaktuj się z nami, korzystając z jednej z poniższych metod:

      a. Wsparcie w aplikacji:
      Możesz skontaktować się z działem wsparcia bezpośrednio z aplikacji Rectle. Przejdź do menu "Ustawienia" i kliknij opcję "Pomoc i Wsparcie", aby uzyskać dostęp do opcji wsparcia. Stamtąd możesz złożyć zgłoszenie wsparcia lub rozpocząć czat na żywo z jednym z naszych przedstawicieli wsparcia.

      b. Wsparcie e-mail:
      W przypadku mniej pilnych pytań możesz wysłać do nas e-mail na adres wsparcie@rectleapp.com. Staramy się odpowiadać na wszystkie zapytania e-mailowe w ciągu 24-48 godzin.

      3. Forum Społeczności:

      Dołącz do naszego forum społeczności, aby komunikować się z innymi użytkownikami Rectle, dzielić się swoimi pomysłami i otrzymywać wskazówki i triki, które pomogą Ci w pełni wykorzystać aplikację. Nasza społeczność jest żywa i pomocna, a tam możesz znaleźć odpowiedzi na różne pytania od doświadczonych użytkowników.

      4. Aktualizacje i ogłoszenia dotyczące aplikacji:

      Bądź na bieżąco z najnowszymi funkcjami, usprawnieniami i ogłoszeniami, śledząc nasz oficjalny blog lub kanały mediów społecznościowych. Regularnie udostępniamy ekscytujące wiadomości i aktualizacje dla naszych użytkowników.

      5. Opinie i sugestie:

      Cenimy Twoją opinię i sugestie w celu ciągłego doskonalenia Rectle. Jeśli masz jakieś pomysły lub sugestie dotyczące nowych funkcji lub ulepszeń, podziel się nimi z nami za pośrednictwem opcji "Opinie" w ustawieniach aplikacji.

      6. Prywatność i bezpieczeństwo:

      Jeśli masz obawy dotyczące prywatności i bezpieczeństwa swoich danych na Rectle, zapoznaj się z naszą Polityką prywatności i bezpieczeństwa, która opisuje, w jaki sposób traktujemy i chronimy Twoje informacje.

      Dziękujemy, że wybrałeś Rectle! Jesteśmy zobowiązani do zapewnienia Ci jak najlepszego doświadczenia, a nasz zespół wsparcia jest gotowy do pomocy w przypadku jakichkolwiek pytań lub problemów.`,
    },
    about: {
      title: 'O nas',
      description: `O nas

      Witamy na naszej platformie poświęconej konkursom algorytmicznym i ocenie wyników, ze szczególnym uwzględnieniem uczenia ze wzmocnieniem. Naszym celem jest stworzenie portalu, który umożliwia uczestnikom rywalizację oraz ocenę ich algorytmów poprzez wymagające symulacje, zapewniając dynamiczne i interaktywne doświadczenie nauki.

      Nasza Misja

      Naszym głównym celem jest zapewnienie platformy, na której uczestnicy mogą zaprezentować swoją wiedzę i umiejętności w różnych dziedzinach algorytmicznych, ze szczególnym naciskiem na uczenie ze wzmocnieniem. Dążymy do promowania innowacji i współpracy między pasjonatami, badaczami i specjalistami w dziedzinie sztucznej inteligencji i uczenia maszynowego.

      Co Nas Wyróżnia

      W przeciwieństwie do tradycyjnych platform, sięgamy poza statyczną analizę danych. Nasz system jest inspirowany platformami takimi jak Kaggle, ale posiada unikalne cechy. Oceniamy działanie algorytmów uczenia ze wzmocnieniem, co wymaga przeprowadzenia dynamicznych symulacji (np. gier), aby skutecznie ocenić ich implementację.

      Główne Funkcje

      Konkursy Algorytmiczne: Weź udział w ekscytujących konkursach algorytmicznych, aby zaprezentować swoje umiejętności w dziedzinie uczenia ze wzmocnieniem. Testuj swoje algorytmy w rywalizacji z innymi i zdobywaj uznanie za swoją wiedzę.

      Wymagające Symulacje: Nasza platforma oferuje wyzwania symulacyjne, które odzwierciedlają scenariusze ze świata rzeczywistego, zapewniając kompleksową ocenę algorytmów uczenia ze wzmocnieniem.

      Zaangażowanie Społeczności: Poznaj aktywną społeczność pasjonatów sztucznej inteligencji i uczenia maszynowego, badaczy i ekspertów. Współpracuj, dziel się wiedzą i ucz się od innych, aby jeszcze bardziej rozwijać swoje umiejętności w tej dziedzinie.

      Okazje Do Nauki: Nasze konkursy i symulacje dostarczają cennych okazji do nauki, umożliwiając uczestnikom doskonalenie umiejętności rozwiązywania problemów oraz pozostanie na bieżąco z najnowszymi osiągnięciami w dziedzinie uczenia ze wzmocnieniem.

      Dołącz do Nas

      Nie ważne, czy jesteś doświadczonym specjalistą, studentem czy pasjonatem sztucznej inteligencji, serdecznie zapraszamy do naszej społeczności. Weź udział w konkursach, nawiąż kontakt z innymi członkami i korzystaj z naszych zasobów, aby poprawić swoje umiejętności i wiedzę z zakresu uczenia ze wzmocnieniem.

      Skontaktuj Się z Nami

      Jeśli masz jakieś pytania, sugestie lub zapytania, chętnie wysłuchamy Twojej opinii. Prosimy o kontakt pod adresem help@rectle.com, a nasz zespół z przyjemnością Ci pomoże.

      Dołącz do naszej ekscytującej podróży odkrywania fascynującego świata uczenia ze wzmocnieniem i rywalizacji algorytmicznych. Razem poszerzajmy granice sztucznej inteligencji i odblokowujmy potencjał najnowszych algorytmów!`,
    },
  },
};
