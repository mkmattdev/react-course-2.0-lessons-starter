////////
//// 1. Komponent, czyli funkcja, która zwraca ekran
////////
//
// Więcej o tym temacie: https://react.dev/learn/your-first-component

import { OrderCard } from "./components/OrderCard";
import { PanelHeader } from "./components/PanelHeader";

export const Lesson = () => (
  <section>
    <PanelHeader />
    <OrderCard />
    <OrderCard />
    <OrderCard />
    <OrderCard />
  </section>
);
