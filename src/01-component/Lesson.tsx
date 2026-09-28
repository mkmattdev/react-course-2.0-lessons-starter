////////
//// 1. Komponent, czyli funkcja, która zwraca ekran
////////
//
// Więcej o tym temacie: https://react.dev/learn/your-first-component

import { OrderCard } from "./components/OrderCard";
import { PanelHeader } from "./components/PanelHeader";

// Komponent umieszczamy w JSX jako znacznik z dużej litery.
// Jeśli nie przekazujemy nic między znacznikami, możemy użyć krótkiego zapisu <OrderCard />.
export const Lesson = () => (
  <section>
    <PanelHeader />
    <OrderCard />
    <OrderCard />
  </section>
);

// Ten sam komponent możemy umieścić na stronie kilka razy.

// Tailwind zeruje domyślne style przeglądarki, dlatego h1 wygląda jak zwykły tekst.
// Klasy dodamy w lekcji 02.
