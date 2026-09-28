////////
//// Obiekty, zawężanie i strażnik typu
////////
//
// Uruchamiamy: node src/00-typescript/2-shapes.ts

////////
//// 1. Typ obiektu
////////
{
  // Kształt obiektu opisujemy słowem type: w klamrach nazwy pól i ich typy.
  // Obiekt musi mieć każde z tych pól. Brak pola albo literówkę w nazwie edytor podkreśli.
  type Order = { id: string; customer: string; totalPln: number };

  const order: Order = { id: "ZAM-1042", customer: "Anna", totalPln: 249 };

  console.log(order.customer, order.totalPln); // Anna 249

  // Ten sam kształt da się zapisać też słowem interface. U nas zawsze type.
}

////////
//// 2. Pole opcjonalne
////////
{
  // Znak zapytania za nazwą pola znaczy: tego pola może nie być. Wtedy jego odczyt daje
  // undefined, a ?? podstawia wartość zastępczą.
  type Order = { id: string; customer: string; note?: string };

  const firstOrder: Order = { id: "ZAM-1042", customer: "Anna", note: "Zostawić u sąsiada" };
  const secondOrder: Order = { id: "ZAM-1043", customer: "Robert" };

  console.log(firstOrder.note ?? "bez uwag"); // Zostawić u sąsiada
  console.log(secondOrder.note ?? "bez uwag"); // bez uwag
}

////////
//// 3. Sprawdzenie === undefined
////////
{
  // find zwraca znalezione zamówienie albo undefined, gdy nic nie pasuje. Dopóki tego
  // nie sprawdzimy, TypeScript nie pozwoli czytać found.customer.
  type Order = { id: string; customer: string };

  const orders: Order[] = [
    { id: "ZAM-1042", customer: "Anna" },
    { id: "ZAM-1043", customer: "Robert" },
  ];

  const findCustomer = (id: string) => {
    const found = orders.find((order) => order.id === id);

    if (found === undefined) {
      return "nie ma takiego zamówienia";
    }

    return found.customer;
  };

  console.log(findCustomer("ZAM-1043")); // Robert
  console.log(findCustomer("ZAM-9999")); // nie ma takiego zamówienia

  // Za tym if TypeScript wie, że found to zamówienie. Takie sprawdzenie nazywamy zawężaniem.
}

////////
//// 4. unknown i typeof
////////
{
  // unknown znaczy „nie wiem, co to jest”. Przy any TypeScript pozwala na wszystko,
  // a przy unknown na nic, dopóki nie sprawdzimy wartości, np. przez typeof.
  const formatAmount = (value: unknown) => {
    if (typeof value === "number") {
      return `${value.toFixed(2)} zł`;
    }

    return "brak kwoty";
  };

  console.log(formatAmount(249)); // 249.00 zł
  console.log(formatAmount("249")); // brak kwoty

  // W środku if TypeScript wie, że value to liczba, więc pozwala na toFixed.
  // To zawężanie przez typeof.
}

////////
//// 5. Strażnik typu
////////
{
  // Z listy rozwijanej zawsze przychodzi zwykły napis, a showOrders przyjmuje tylko OrderStatus.
  // Napis sprawdzamy więc własną funkcją, strażnikiem typu. Zapis value is OrderStatus znaczy:
  // „jeśli zwrócę true, to value jest statusem”.
  type OrderStatus = "new" | "paid" | "sent";

  const isOrderStatus = (value: string): value is OrderStatus =>
    value === "new" || value === "paid" || value === "sent";

  const showOrders = (status: OrderStatus) => `Pokazuję zamówienia: ${status}`;

  const handleStatusChange = (value: string) => {
    if (isOrderStatus(value)) {
      return showOrders(value);
    }

    return "Nieznany status";
  };

  console.log(handleStatusChange("paid")); // Pokazuję zamówienia: paid
  console.log(handleStatusChange("lost")); // Nieznany status

  // Bez tego if edytor nie pozwoli podać zwykłego napisu do showOrders.
}

////////
//// 6. as, czyli „uwierz mi na słowo”
////////
{
  // as mówi TypeScriptowi: „nie sprawdzaj, ja wiem lepiej, co tu jest”.
  // TypeScript wtedy wierzy i przestaje pilnować. Przykład:
  //
  //   type OrderStatus = "new" | "paid" | "sent";
  //   const fromSelect: string = "lost";
  //   const status = fromSelect as OrderStatus; // TypeScript: „OK, skoro tak mówisz”
  //
  // Edytor nic nie podkreśli, a w zmiennej status siedzi "lost", którego nie ma
  // wśród statusów. Kłopot wyjdzie dopiero u użytkownika.
  //
  // Dlatego u nas nie używamy as, a ESLint go blokuje. Zamiast mówić „uwierz mi”,
  // sprawdzamy wartość własną funkcją, czyli strażnikiem typu.
}

////////
//// Wiedza w pigułce
////////
{
  //  1. Kształt obiektu opisujemy słowem type. U nas zawsze type, nie interface.
  //
  //  2. Pola ze znakiem zapytania może nie być. Brak zastępujemy przez ??.
  //
  //  3. find może nic nie znaleźć, więc wynik sprawdzamy === undefined. Po takim sprawdzeniu
  //     TypeScript wie więcej. To jest zawężanie.
  //
  //  4. unknown to „nie wiem, co to jest”. Zanim coś z wartością zrobimy, sprawdzamy ją,
  //     np. przez typeof.
  //
  //  5. Strażnik typu ma typ zwracany value is Typ. Po true TypeScript wie, że zwykły napis
  //     jest jedną z wartości naszej unii.
  //
  //  6. as niczego nie sprawdza, tylko każe uwierzyć. U nas go nie ma: sprawdzamy strażnikiem.
}
