// Otwieramy po npm run dev: http://127.0.0.1:5173/
// Na stronie widać jedną lekcję. Żeby pokazać inną, zmieniamy tylko ścieżkę w imporcie poniżej.
// Nazwa Lesson i <Lesson /> zostają bez zmian.
// Zadanie eksportuje Task, więc importujemy je pod nazwą Lesson:
//   import { Task as Lesson } from "./03-props-task/Task";
// Pełne lekcje i rozwiązania zadań dodamy do tego repo po zajęciach.
//
// #   Temat                             Lekcja                  Zadanie
// 01  Komponent jako funkcja            ./01-component/Lesson   –
// 02  JSX, klamry i pierwsze klasy      ./02-jsx/Lesson         –
// 03  Propsy i ich typ                  ./03-props/Lesson       ./03-props-task/Task
// 05  Listy przez map i dobór key       ./05-list/Lesson        ./05-list-task/Task
// 07  Stan przez useState               ./07-state/Lesson       ./07-state-task/Task
// 08  Wspólny stan w rodzicu            ./08-lifting/Lesson     ./08-lifting-task/Task
//
// Zadania z TypeScriptu (lekcja 00) uruchamiamy w terminalu, bez przeglądarki:
//   node src/00-typescript/tasks/promo-price.start.ts
//   node src/00-typescript/tasks/count-by-key.start.ts

import { Lesson } from "./01-component/Lesson";

export const App = () => (
  <main className="mx-auto max-w-2xl px-4 py-8">
    <Lesson />
  </main>
);
