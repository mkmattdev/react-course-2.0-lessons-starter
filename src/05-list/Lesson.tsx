////////
//// 5. Listy i klucze
////////
//
// Więcej o tym temacie: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

import { OrderList } from "./components/OrderList";
import { orders } from "./orders";

// Metoda map tworzy element JSX dla każdego zamówienia. Jej użycie zobaczymy w OrderList.
export const Lesson = () => (
  <section>
    <h2 className="mb-4 text-xl font-semibold">Zamówień: {orders.length}</h2>
    <OrderList />
  </section>
);

// Identyfikator zamówienia jest dobrym kluczem, bo nie zmienia się razem z pozycją na liście.
