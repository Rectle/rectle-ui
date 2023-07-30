<template>
  <div class="q-my-md row items-start justify-center text-h4">
    {{ $t('settingPage.about.title') }}
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

const en = `About Us

Welcome to our platform dedicated to algorithmic competitions and evaluations, with a primary focus on reinforcement learning. Our mission is to create a portal that allows participants to compete and assess their algorithms through challenging simulations, ensuring a dynamic and interactive learning experience.

Our Purpose

Our primary objective is to provide a platform where participants can showcase their expertise in various algorithmic domains, with a special emphasis on reinforcement learning. We aim to promote innovation and collaboration among enthusiasts, researchers, and professionals in the field of artificial intelligence and machine learning.

What Sets Us Apart

Unlike traditional platforms, we go beyond static data analysis. Our system is inspired by platforms like Kaggle but with a unique twist. We assess the performance of reinforcement learning algorithms, which necessitates dynamic simulations (e.g., games) to evaluate their implementation effectively.

Key Features

Algorithmic Competitions: Participate in exciting algorithmic competitions to showcase your skills and knowledge in reinforcement learning. Test your algorithms against others and gain recognition for your expertise.

Challenging Simulations: Our platform offers challenging simulations that mimic real-world scenarios, ensuring a comprehensive evaluation of reinforcement learning algorithms.

Community Engagement: Connect with a vibrant community of AI and machine learning enthusiasts, researchers, and experts. Collaborate, share insights, and learn from each other to further enhance your understanding of the field.

Learning Opportunities: Our competitions and simulations provide valuable learning opportunities, enabling participants to sharpen their problem-solving abilities and stay up-to-date with the latest advancements in reinforcement learning.

Get Involved

Whether you are an experienced professional, a student, or an AI enthusiast, you are welcome to join our community. Participate in competitions, engage with other members, and take advantage of our resources to improve your skills and expertise in reinforcement learning.

Contact Us

If you have any questions, suggestions, or inquiries, we would love to hear from you. Please feel free to reach out to us at help@rectle.com, and our team will be happy to assist you.

Join us on this exciting journey of exploring the fascinating world of reinforcement learning and algorithmic competitions. Let's push the boundaries of AI together and unlock the potential of cutting-edge algorithms!`;

const pl = `O nas

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

Dołącz do naszej ekscytującej podróży odkrywania fascynującego świata uczenia ze wzmocnieniem i rywalizacji algorytmicznych. Razem poszerzajmy granice sztucznej inteligencji i odblokowujmy potencjał najnowszych algorytmów!`;

const editor = ref(locale.value == 'en-US' ? en : pl);

const text = computed(() => {
  return xss(editor.value);
});
</script>
