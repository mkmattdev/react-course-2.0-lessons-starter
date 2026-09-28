////////
//// Zadanie: lista przesyłek, rozwiązanie
////////

import { ShipmentCard } from "./ShipmentCard";
import { shipments } from "./shipments";

export const ShipmentList = () => (
  <section>
    <h2 className="mb-4 text-xl font-semibold">Przesyłek: {shipments.length}</h2>
    <ul className="flex flex-col gap-3">
      {shipments.map((shipment) => (
        <li key={shipment.id}>
          <ShipmentCard {...shipment} />
        </li>
      ))}
    </ul>
  </section>
);
