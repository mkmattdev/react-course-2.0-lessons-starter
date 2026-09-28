type OrderCardProps = {
  id: string;
  customer: string;
  totalPln: number;
  note?: string;
};

// W parametrze funkcji odczytujemy konkretne pola z obiektu propsów.
// Dla note ustawiamy wartość domyślną, używaną wtedy, gdy ten props nie został przekazany
// lub ma wartość undefined.
export const OrderCard = ({ id, customer, totalPln, note = "brak uwag" }: OrderCardProps) => (
  <article className="rounded-lg border border-line p-4">
    <h3 className="text-lg font-semibold">{id}</h3>
    <p>Klient: {customer}</p>
    <p>Uwagi: {note}</p>
    <p className="font-semibold">Razem: {totalPln.toFixed(2)} zł</p>
  </article>
);
