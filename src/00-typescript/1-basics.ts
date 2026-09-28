////////
//// Typy proste, funkcje i unia literałów
////////
//
// TypeScript to JavaScript z typami. Typ mówi, jaka wartość siedzi w zmiennej: napis, liczba
// albo prawda/fałsz. Typy sprawdza edytor: gdy coś się nie zgadza, podkreśla to na czerwono.
//
// Uruchamiamy: node src/00-typescript/1-basics.ts
// Node przed uruchomieniem wycina typy i wykonuje zwykły JavaScript.

////////
//// 1. Typ po dwukropku
////////
{
  // Typ piszemy po dwukropku, za nazwą zmiennej. Na co dzień wystarczą trzy:
  // string (napis), number (liczba) i boolean (prawda albo fałsz).
  const customerName: string = "Anna";
  const orderTotalPln: number = 249;
  const isPaid: boolean = true;

  console.log(customerName, orderTotalPln, isPaid); // Anna 249 true
}

////////
//// 2. Lista
////////
{
  // Lista liczb to number[], a lista napisów to string[]. Najpierw typ elementu, potem [].
  const pricesPln: number[] = [199, 49, 1250];

  console.log(pricesPln); // [ 199, 49, 1250 ]
}

////////
//// 3. TypeScript sam zgaduje typ
////////
{
  // Przy zmiennych typu zwykle nie piszemy, bo TypeScript sam bierze go z wartości.
  // productName nie ma „: string”, a i tak jest napisem: inny napis wpiszemy, liczby już nie.
  let productName = "Laptop";

  console.log(productName); // Laptop

  productName = "Tablet";

  console.log(productName); // Tablet

  // Typ widać po najechaniu myszką na nazwę zmiennej.
}

////////
//// 4. Typy parametrów funkcji
////////
{
  // Przy parametrach funkcji TypeScript nie ma skąd wziąć typu, więc tu piszemy go zawsze.
  const describeOrder = (customer: string, totalPln: number) => `${customer}: ${totalPln} zł`;

  console.log(describeOrder("Anna", 249)); // Anna: 249 zł

  // Gdy zamienimy argumenty miejscami, edytor od razu to podkreśli.
}

////////
//// 5. Typ zwracany
////////
{
  // To, co funkcja zwraca, też może mieć typ. Piszemy go po dwukropku za nawiasem z parametrami
  // i wtedy TypeScript pilnuje, żeby funkcja naprawdę zwróciła taką wartość.
  const hasFreeShipping = (totalPln: number): boolean => totalPln >= 200;

  console.log(hasFreeShipping(249)); // true
  console.log(hasFreeShipping(99)); // false
}

////////
//// 6. Parametr opcjonalny
////////
{
  // Znak zapytania za nazwą parametru znaczy: można go pominąć. Pominięty parametr ma wartość
  // undefined, a ?? podstawia wtedy wartość zastępczą.
  const formatPrice = (amount: number, currency?: string) => `${amount} ${currency ?? "zł"}`;

  console.log(formatPrice(249)); // 249 zł
  console.log(formatPrice(249, "EUR")); // 249 EUR
}

////////
//// 7. Unia literałów, czyli jedna z kilku wartości
////////
{
  // Status zamówienia to zawsze jeden z trzech napisów. Wypisujemy je po kolei, a kreska |
  // znaczy „albo”. Słowem type nadajemy temu zapisowi nazwę, tak jak zmiennej.
  type OrderStatus = "new" | "paid" | "sent";

  const isShipped = (status: OrderStatus) => status === "sent";

  console.log(isShipped("sent")); // true
  console.log(isShipped("new")); // false

  // Edytor podpowie te trzy napisy, a każdy inny, np. "lost", podkreśli.
}

////////
//// 8. any, czyli TypeScript nie pilnuje
////////
{
  // JSON.parse zwraca any, czyli „cokolwiek”. Tak samo response.json() przy fetch.
  // Przy any TypeScript nic nie sprawdza, więc literówka w nazwie pola po cichu da undefined.
  const order = JSON.parse('{"customer":"Anna","totalPln":249}');

  console.log(order.customer); // Anna
  console.log(order.custommer); // undefined

  // Sami any nie piszemy, u nas blokuje go ESLint. Zamiast any opisujemy dane własnym typem.
}

////////
//// Wiedza w pigułce
////////
{
  //  1. TypeScript to JavaScript z typami. Typy sprawdza edytor, a Node je wycina
  //     i wykonuje zwykły JavaScript.
  //
  //  2. Typ piszemy po dwukropku: string, number, boolean. Lista to np. number[].
  //
  //  3. Przy zmiennych TypeScript sam zgaduje typ. Przy parametrach funkcji piszemy go zawsze.
  //
  //  4. Typ zwracany stoi za nawiasem z parametrami: (totalPln: number): boolean.
  //
  //  5. Parametr ze znakiem zapytania można pominąć. Ma wtedy wartość undefined.
  //
  //  6. Unia, np. "new" | "paid" | "sent", dopuszcza tylko wymienione wartości.
  //     Słowem type dajemy jej nazwę.
  //
  //  7. any wyłącza sprawdzanie. Przychodzi z JSON.parse i response.json(), sami go nie piszemy.
}

////////
//// Zadanie
////////
// Cena promocyjna: tasks/promo-price.start.ts
