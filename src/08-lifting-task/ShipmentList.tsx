import { ShipmentCard } from "./ShipmentCard";
import type { Shipment } from "./shipments";

type ShipmentListProps = {
  shipments: Shipment[];
};

// Lista przesyłek jest gotowa. Zadanie rozwiąż w pliku ShipmentPanel.start.tsx.
export const ShipmentList = ({ shipments }: ShipmentListProps) => (
  <ul className="flex flex-col gap-3">
    {shipments.map((shipment) => (
      <li key={shipment.id}>
        <ShipmentCard {...shipment} />
      </li>
    ))}
  </ul>
);
