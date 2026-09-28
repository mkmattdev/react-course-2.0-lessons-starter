import { orders } from "../orders";
import { OrderCard } from "./OrderCard";

// key pozwala Reactowi rozpoznać ten sam element, gdy lista się zmienia.
// Używamy stałego id zamówienia i przekazujemy key do <li>, bo ten element zwraca map.
// Zapis {...order} przekazuje pola obiektu jako propsy, bez wypisywania każdego z osobna.
export const OrderList = () => (
  <ul className="flex flex-col gap-3">
    {orders.map((order) => (
      <li key={order.id}>
        <OrderCard {...order} />
      </li>
    ))}
  </ul>
);
