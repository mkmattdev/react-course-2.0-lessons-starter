import type { Shipment } from "./shipments";

// Karta przesyłki jest gotowa. Zadanie rozwiąż w pliku ShipmentList.start.tsx.
export const ShipmentCard = ({ id, customer, courier, isDelivered }: Shipment) => (
  <article className="rounded-lg border border-line p-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{id}</h3>
      <span className={isDelivered ? "text-green" : "text-orange"}>
        {isDelivered ? "Dostarczona" : "W drodze"}
      </span>
    </div>
    <p>
      Klient: {customer}, kurier: {courier}
    </p>
  </article>
);
