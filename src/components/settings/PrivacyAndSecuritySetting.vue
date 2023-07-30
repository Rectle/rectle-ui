<template>
  <div class="q-my-md row items-start justify-center text-h4">
    {{ $t('settingPage.privacyAndSecurity.title') }}
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

const en = `Effective Date: 31.07.2023

Welcome to Rectle! This Privacy & Security Policy outlines how we collect, use, disclose, and protect your information when you use the Rectle application ("App"). Your privacy and security are of utmost importance to us, and we are committed to safeguarding your personal data. By using Rectle, you agree to the terms of this Privacy & Security Policy.

1. Information We Collect:

a. Personal Information: When you create an account on Rectle, we may collect certain personal information, including but not limited to your name, email address, and profile picture. This information is essential for providing you with a personalized experience and enabling specific features within the App.

b. Device Information: We may collect data about the device you use to access Rectle, such as the device's unique identifier, operating system, and mobile network information. This information helps us optimize our services for different devices and troubleshoot technical issues.

c. Usage Data: Our servers automatically record information about your interactions with Rectle, such as the pages you visit, the features you use, and the content you view. This data is collected anonymously and is used to improve the overall user experience and performance of the App.

2. How We Use Your Information:

a. Personalization: We use your personal information to personalize your experience with Rectle, provide relevant content, and suggest tailored recommendations.

b. Communication: We may use your email address to send you important updates, announcements, and promotional materials related to Rectle. You can opt-out of receiving marketing communications at any time.

c. Analytics: The usage data we collect is utilized for analytical purposes, enabling us to understand user behavior, preferences, and trends. This data helps us enhance the App's functionality and identify areas for improvement.

3. Data Sharing and Disclosure:

a. Third-party Service Providers: We may share your information with trusted third-party service providers that assist us in delivering our services, such as cloud storage providers, analytics platforms, and customer support tools. These entities are bound by strict confidentiality agreements and are not allowed to use your data for any other purpose.

b. Legal Requirements: We may disclose your information if required by law, such as to comply with a court order, legal process, or government request.

4. Data Security:

a. Encryption: We implement industry-standard encryption protocols to protect your personal data during transmission and storage.

b. Access Control: Access to your personal information is restricted to authorized personnel only, who need the data to perform their designated tasks.

c. Data Minimization: We retain your information only for as long as necessary to fulfill the purposes outlined in this policy.

5. Children's Privacy:

Rectle is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us immediately.

6. Changes to This Policy:

We reserve the right to update this Privacy & Security Policy from time to time. When we do so, we will notify you through the App or via the email address associated with your account. It is your responsibility to review this policy periodically to stay informed about any changes.

7. Contact Us:

If you have any questions, concerns, or requests regarding this Privacy & Security Policy or the practices of Rectle, please contact us at:

help@rectle.com

By using Rectle, you acknowledge that you have read and understood this Privacy & Security Policy and consent to the collection, use, and disclosure of your information as described herein.`;

const pl = `Data wchodzenia w życie: 31.07.2023

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

Korzystając z Rectle, potwierdzasz, że zapoznałeś się z niniejszą Polityką prywatności i bezpieczeństwa, rozumiesz jej treść i wyrażasz zgodę na zbieranie, wykorzystywanie i ujawnianie Twoich danych zgodnie z opisanymi w niej warunkami.`;

console.log(locale);
const editor = ref(locale.value == 'en-US' ? en : pl);

const text = computed(() => {
  return xss(editor.value);
});
</script>
