// Zadanie: lista przesyłek
//
// Na stronie widać tylko jedną kartę, której dane wpisaliśmy ręcznie.
// Zmień komponent tak, aby pokazywał wszystkie przesyłki z tablicy shipments.
//
// Zamiast pojedynczej karty dodaj <ul> z klasami flex flex-col gap-3. Użyj metody map,
// aby dla każdej przesyłki utworzyć <li> z komponentem ShipmentCard.
// Przekaż do karty wszystkie pola obiektu za pomocą {...shipment}.
// Każdemu <li> nadaj key z wartością id danej przesyłki.
// Dane z pliku shipments.ts i komponent ShipmentCard.tsx są gotowe.
//
// Sprawdź efekt: pod nagłówkiem "Przesyłek: 4" powinny pojawić się cztery karty,
// każda z właściwymi danymi i statusem "Dostarczona" albo "W drodze".
//
// Edytuj: src/05-list-task/ShipmentList.start.tsx
// W src/App.tsx ustaw import: import { Task as Lesson } from "./05-list-task/Task";
// W JSX pozostaw <Lesson />.

import { ShipmentCard } from "./ShipmentCard";
import { shipments } from "./shipments";

export const ShipmentList = () => {
  // TODO: Zbuduj listę kart na podstawie całej tablicy shipments.
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Przesyłek: {shipments.length}</h2>
      <ShipmentCard
        id="PRZ-2207"
        customer="Robert Kowalski"
        courier="InPost"
        isDelivered={true}
      />
    </section>
  );
};
