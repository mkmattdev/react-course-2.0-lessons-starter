import { ShipmentCard } from "./ShipmentCard.start";

// Gotowy podgląd zadania. Edytujemy ShipmentCard.start.tsx.
export const Task = () => (
  <section className="flex flex-col gap-3">
    <ShipmentCard
      id="PRZ-2207"
      customer="Robert Kowalski"
      courier="InPost"
      weightKg={1.2}
    />
    <ShipmentCard
      id="PRZ-2208"
      customer="Anna Nowak"
      courier="DPD"
      weightKg={4}
      note="Kruche"
    />
  </section>
);
