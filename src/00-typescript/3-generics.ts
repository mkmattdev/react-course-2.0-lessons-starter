////////
//// Generyki i keyof
////////
//
// Uruchamiamy: node src/00-typescript/3-generics.ts

////////
//// 1. Problem: ta sama funkcja dwa razy
////////
{
  // Chcemy wziąć kilka pierwszych pozycji z listy, np. pierwszą stronę tabeli. Na razie umiemy
  // to napisać tylko osobno dla napisów i osobno dla liczb, choć obie funkcje robią to samo.
  const takeFirstNames = (items: string[], count: number) => items.slice(0, count);
  const takeFirstPrices = (items: number[], count: number) => items.slice(0, count);

  console.log(takeFirstNames(["Anna", "Robert", "Ewa"], 2)); // [ 'Anna', 'Robert' ]
  console.log(takeFirstPrices([199, 49, 1250], 2)); // [ 199, 49 ]

  // Z any[] wystarczyłaby jedna funkcja, ale any wyłącza sprawdzanie typów.
}

////////
//// 2. <Item>: jedna funkcja dla każdej listy
////////
{
  // Generyk to funkcja z nazwą zastępczą typu w nawiasach <>, tu Item. Przy wywołaniu
  // TypeScript sam podstawia za Item typ z listy: raz string, raz number.
  const takeFirst = <Item>(items: Item[], count: number) => items.slice(0, count);

  console.log(takeFirst(["Anna", "Robert", "Ewa"], 2)); // [ 'Anna', 'Robert' ]
  console.log(takeFirst([199, 49, 1250], 2)); // [ 199, 49 ]

  // Z pustej listy TypeScript nie zgadnie typu, więc wtedy sami wpisujemy go w <>.
  console.log(takeFirst<string>([], 2)); // []

  // Co TypeScript podstawił za Item, widać po najechaniu myszką na takeFirst.
  // W dokumentacji zamiast Item często zobaczymy krótkie T.
}

////////
//// 3. Funkcja w parametrze: (item: Item) => string
////////
{
  // Parametrem może być też funkcja, tak jak w map. Zapis (item: Item) => string znaczy:
  // funkcja dostaje jeden element listy i zwraca napis.
  type Order = { id: string; customer: string; totalPln: number };

  const orders: Order[] = [
    { id: "ZAM-1042", customer: "Anna", totalPln: 249 },
    { id: "ZAM-1043", customer: "Robert", totalPln: 79 },
  ];

  const getLabels = <Item>(items: Item[], getLabel: (item: Item) => string) =>
    items.map((item) => getLabel(item));

  console.log(getLabels(orders, (order) => order.customer)); // [ 'Anna', 'Robert' ]
  console.log(getLabels(orders, (order) => `${order.totalPln} zł`)); // [ '249 zł', '79 zł' ]

  // Typu order nie wpisujemy: TypeScript wie z listy, że to Order, i podpowiada jego pola.
}

////////
//// 4. Typ z <Item>: kolumny i mała tabela
////////
{
  // Nazwę zastępczą w <> może mieć też type. Column<Item> to kolumna tabeli: nagłówek
  // i funkcja render, która z jednego wiersza robi tekst komórki.
  type Order = { id: string; customer: string; totalPln: number };
  type Column<Item> = { header: string; render: (item: Item) => string };

  const orders: Order[] = [
    { id: "ZAM-1042", customer: "Anna", totalPln: 249 },
    { id: "ZAM-1043", customer: "Robert", totalPln: 79 },
  ];

  // Column<Order> to kolumna dla zamówień, więc w render wolno czytać tylko pola zamówienia.
  const orderColumns: Column<Order>[] = [
    { header: "Klient", render: (order) => order.customer },
    { header: "Kwota", render: (order) => `${order.totalPln} zł` },
  ];

  // printTable wypisuje linię nagłówków, a potem po jednej linii na każdy wiersz. Wiersze
  // i kolumny mają ten sam Item, więc tak samo wydrukuje tabelę z każdej innej listy.
  const printTable = <Item>(items: Item[], columns: Column<Item>[]) => {
    console.log(columns.map((column) => column.header).join(" | "));

    for (const item of items) {
      console.log(columns.map((column) => column.render(item)).join(" | "));
    }
  };

  printTable(orders, orderColumns);
  // Klient | Kwota
  // Anna | 249 zł
  // Robert | 79 zł
}

////////
//// 5. keyof: nazwy pól jako typ
////////
{
  // Czasem to, które pole odczytać, wybieramy dopiero przy wywołaniu. keyof Order to typ
  // „nazwa jednego z pól Order”, czyli "id" | "customer" | "totalPln".
  type Order = { id: string; customer: string; totalPln: number };

  const firstOrder: Order = { id: "ZAM-1042", customer: "Anna", totalPln: 249 };

  const readField = (order: Order, key: keyof Order) => order[key];

  console.log(readField(firstOrder, "customer")); // Anna
  console.log(readField(firstOrder, "totalPln")); // 249

  // order[key] czyta pole o takiej nazwie. Nazwę pola, którego zamówienie nie ma,
  // np. "price", edytor podkreśli.
}

////////
//// Wiedza w pigułce
////////
{
  //  1. Generyk to funkcja albo type z nazwą zastępczą typu w <>, np. <Item>.
  //     Za Item TypeScript sam podstawia typ z wywołania.
  //
  //  2. Gdy TypeScript nie ma z czego zgadnąć, np. przy pustej liście, sami wpisujemy typ w <>:
  //     takeFirst<string>([], 2).
  //
  //  3. (item: Item) => string to funkcja w parametrze: dostaje element listy, zwraca napis.
  //
  //  4. Column<Order> to kolumna dla zamówień: render dostaje zamówienie i zwraca tekst komórki.
  //
  //  5. keyof Order to nazwy pól Order: "id" | "customer" | "totalPln".
  //     order[key] czyta wartość pola o takiej nazwie.
}

////////
//// Zadanie
////////
// Ile zamówień w każdym statusie: tasks/count-by-key.start.ts
