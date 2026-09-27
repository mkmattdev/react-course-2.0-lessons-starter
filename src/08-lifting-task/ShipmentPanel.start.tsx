// Zadanie: filtr kuriera
//
// Przyciski wyboru kuriera są już widoczne, ale lista się nie zmienia: kliknięcie
// tylko wypisuje kuriera w konsoli. Połącz filtr z listą przesyłek,
// aby po wybraniu kuriera zostały na niej tylko jego przesyłki.
//
// Przechowaj wybranego kuriera w stanie ShipmentPanel, czyli we wspólnym rodzicu
// filtra i listy. Stan ma typ CourierChoice z pliku shipments.ts i zaczyna od "all".
// Przekaż do CourierFilter stan w activeCourier, a funkcję zmieniającą stan
// w onCourierChange. Typy obu propsów znajdziesz w CourierFilter.tsx.
// Wylicz visibleShipments: dla "all" cała tablica shipments, a dla kuriera tylko
// jego przesyłki. Przekaż tę listę do ShipmentList i pokaż jej długość
// w wierszu "Pokazanych".
//
// Sprawdź efekt: kliknięcie "DPD" powinno zaznaczyć ten przycisk i pozostawić
// na liście tylko przesyłki DPD. Sprawdź też pozostałych kurierów.
// Przycisk "Wszyscy" powinien ponownie pokazać całą listę.
//
// Wskazówka: z samego "all" TypeScript weźmie typ string. Jeśli CourierFilter
// nie przyjmie stanu, podaj typ w nawiasach <> przy useState.
//
// Edytuj: src/08-lifting-task/ShipmentPanel.start.tsx
// W src/App.tsx ustaw import: import { Task as Lesson } from "./08-lifting-task/Task";
// W JSX pozostaw <Lesson />.

import { CourierFilter } from "./CourierFilter";
import { ShipmentList } from "./ShipmentList";
import { shipments } from "./shipments";

export const ShipmentPanel = () => {
  // TODO: Przechowaj wybranego kuriera w stanie i wylicz z niego widoczne przesyłki.
  return (
    <section>
      <CourierFilter
        activeCourier="all"
        onCourierChange={(courier) => console.log(courier)}
      />
      <p
        role="status"
        className="mb-4"
      >
        Pokazanych: {shipments.length}
      </p>
      <ShipmentList shipments={shipments} />
    </section>
  );
};
