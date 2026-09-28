////////
//// Zadanie: karta przesyłki na propsach, rozwiązanie
////////

type ShipmentCardProps = {
  id: string;
  customer: string;
  courier: string;
  weightKg: number;
  note?: string;
};

export const ShipmentCard = ({
  id,
  customer,
  courier,
  weightKg,
  note = "brak uwag",
}: ShipmentCardProps) => (
  <article className="rounded-lg border border-line p-4">
    <h3 className="text-lg font-semibold">{id}</h3>
    <p>Klient: {customer}</p>
    <p>Kurier: {courier}</p>
    <p>Waga: {weightKg.toFixed(1)} kg</p>
    <p>Uwagi: {note}</p>
  </article>
);
