# react-course-2.0-lessons-starter

Lekcje z 1. dnia szkolenia z Reacta: TypeScript i pierwsze komponenty. Node.js 24 (24.15 lub nowszy) i npm; z `nvm` wystarczy `nvm install`.

```sh
npm ci
npm run dev
```

Otwieramy http://127.0.0.1:5173/. Na stronie widać nagłówek „1. Komponent jako funkcja”. Po zapisaniu pliku strona odświeża się sama.

## Lekcje

Pliki lekcji (`Lesson.tsx` i pliki w `components/`) są puste. Wypełniamy je razem na zajęciach.

Na stronie widać jedną lekcję. Zmieniamy ją jednym importem w `src/App.tsx`, np. `import { Lesson } from "./03-props/Lesson";`. Lista lekcji i zadań jest w komentarzu na górze `src/App.tsx`.

## Zadania

Zadania piszemy w plikach `*.start.*`. Zadanie pokazujemy na stronie tak: `import { Task as Lesson } from "./03-props-task/Task";`.

Zadania z TypeScriptu uruchamiamy w terminalu:

```sh
node src/00-typescript/tasks/promo-price.start.ts
node src/00-typescript/tasks/count-by-key.start.ts
```

## Po zajęciach

Do tego repo dodamy pełne lekcje i rozwiązania zadań. Najprościej pobrać je nowym `git clone` do innego folderu, wtedy Wasz kod z zajęć zostaje bez zmian.
