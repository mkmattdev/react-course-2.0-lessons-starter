import type { Order } from "../orders";

export const OrderCard = ({ id, customer, totalPln, isPaid }: Order) => (
  <article className="rounded-lg border border-line p-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{id}</h3>
      <span className={isPaid ? "text-green" : "text-orange"}>
        {isPaid ? "Opłacone" : "Czeka na płatność"}
      </span>
    </div>
    <p>Klient: {customer}</p>
    <p className="font-semibold">Razem: {totalPln.toFixed(2)} zł</p>
  </article>
);
