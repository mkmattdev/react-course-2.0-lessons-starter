////////
//// 3. Propsy, czyli argumenty komponentu
////////
//
// Więcej o tym temacie: https://react.dev/learn/passing-props-to-a-component

import { OrderCard } from "./components/OrderCard";

// Napis podajemy w cudzysłowie, liczbę i zmienną w klamrach. Druga karta nie dostaje note.
export const Lesson = () => {
  const lastCustomer = "Mateusz Lis";

  return (
    <section className="flex flex-col gap-3">
      <OrderCard
        id="ZAM-1042"
        customer="Anna Nowak"
        totalPln={6999.5}
        note="Zostawić u sąsiada"
      />
      <OrderCard
        id="ZAM-1043"
        customer="Robert Kowalski"
        totalPln={79}
      />
      <OrderCard
        id="ZAM-1044"
        customer={lastCustomer}
        totalPln={1249.9}
        note="Dzwonić przed dostawą"
      />
    </section>
  );
};

// Każda karta korzysta z tego samego komponentu, ale dostaje inne dane przez propsy.
