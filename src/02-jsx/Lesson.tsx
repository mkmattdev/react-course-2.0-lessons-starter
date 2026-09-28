////////
//// 2. JSX, czyli JavaScript w środku znaczników
////////
//
// Więcej o tym temacie: https://react.dev/learn/javascript-in-jsx-with-curly-braces

import { OrderCard } from "./components/OrderCard";
import { PanelHeader } from "./components/PanelHeader";

export const Lesson = () => (
  <section>
    <PanelHeader />
    <OrderCard />
  </section>
);

// W klamrach JSX możemy używać wyrażeń JavaScriptu, np. zmiennych i wywołań funkcji.
