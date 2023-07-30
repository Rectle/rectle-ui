<template>
  <div class="q-my-md row items-start justify-center text-h4">
    {{ $t('settingPage.helpAndSupport.title') }}
  </div>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <pre style="white-space: pre-line">{{ text }}</pre>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import xss from 'xss';

const { locale } = useI18n({ useScope: 'global' });

const en = `Help and Support for Rectle Application

Welcome to the Help and Support page for Rectle! We are here to assist you and provide the necessary guidance to ensure a seamless experience while using the Rectle application. Below are some of the common topics and frequently asked questions that might help you find the answers you need:

1. Frequently Asked Questions (FAQs):

Q1. How do I create an account on Rectle?
A1. To create an account, open the Rectle app and click on the "Sign Up" button. Enter your email address, create a password, and follow the on-screen instructions to complete the registration process.

Q2. How can I reset my password?
A2. If you've forgotten your password, go to the login screen and click on the "Forgot Password" link. You will receive an email with instructions on how to reset your password.

Q3. How do I change my profile picture?
A3. To change your profile picture, go to your profile settings and click on the "Edit Profile" option. From there, you can upload a new picture or choose one from your device's gallery.

Q4. How can I report inappropriate content?
A4. If you come across any content that violates our community guidelines or seems inappropriate, you can report it by tapping on the "Report" button next to the content. Our team will review the report and take appropriate action.

2. Contacting Support:

If you have any issues, concerns, or questions that are not covered in the FAQs, our dedicated support team is here to help. Please reach out to us using one of the following methods:

a. In-App Support:
You can contact support directly from within the Rectle app. Go to the "Settings" menu, and click on "Help & Support" to access the support options. From there, you can submit a support ticket or start a live chat with one of our support representatives.

b. Email Support:
For non-urgent inquiries, you can send us an email at support@rectleapp.com. We aim to respond to all email inquiries within 24-48 hours.

3. Community Forums:

Join our community forums to engage with other Rectle users, share your ideas, and get tips and tricks for making the most out of the app. Our community is vibrant and helpful, and you can find answers to various questions from experienced users.

4. App Updates and Announcements:

Stay up-to-date with the latest features, improvements, and announcements by following our official blog or social media channels. We regularly share exciting news and updates with our users.

5. Feedback and Suggestions:

We value your feedback and suggestions to improve Rectle continually. If you have any ideas or suggestions for new features or enhancements, please share them with us through the "Feedback" option in the app's settings.

6. Privacy and Security:

If you have concerns about your privacy and the security of your data on Rectle, please review our Privacy & Security Policy, which outlines how we handle and protect your information.

Thank you for choosing Rectle! We are committed to providing you with the best possible experience, and our support team is ready to assist you with any inquiries or issues you may have.`;

const pl = `Pomoc i wsparcie dla aplikacji Rectle

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

Dziękujemy, że wybrałeś Rectle! Jesteśmy zobowiązani do zapewnienia Ci jak najlepszego doświadczenia, a nasz zespół wsparcia jest gotowy do pomocy w przypadku jakichkolwiek pytań lub problemów.`;

const editor = ref(locale.value == 'en-US' ? en : pl);

const text = computed(() => {
  return xss(editor.value);
});
</script>
