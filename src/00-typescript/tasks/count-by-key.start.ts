////////
//// Zadanie – ile zamówień w każdym statusie
////////
//
// Uruchamiamy: node src/00-typescript/tasks/count-by-key.start.ts
// Rozwiązanie: tasks/count-by-key.solution.ts
{
  // Panel sklepu pokazuje, ile zamówień jest w każdym statusie i ile jedzie każdym kurierem.
  //
  // 1. Napisz funkcję countByKey z <Item>. Dostaje dwa argumenty:
  //    - items: Item[], czyli listę,
  //    - readKey: (item: Item) => string, czyli funkcję, która z elementu wyciąga napis.
  //    Zwraca obiekt, w którym kluczem jest napis, a wartością liczba wystąpień.
  //    Typ takiego obiektu to Record<string, number>.
  //
  // 2. Wywołaj ją dwa razy, raz dla statusu i raz dla kuriera, i wypisz oba wyniki.
  //
  // Wskazówka: zacznij od pustego obiektu const counts: Record<string, number> = {}.
  // Klucza może jeszcze nie być, więc licz od zera: counts[key] = (counts[key] ?? 0) + 1.
  //
  // Program wypisuje:
  //   { paid: 3, new: 1 }
  //   { DPD: 2, InPost: 2 }

  type Order = { id: string; status: string; courier: string };

  const orders: Order[] = [
    { id: "ZAM-1042", status: "paid", courier: "DPD" },
    { id: "ZAM-1043", status: "paid", courier: "InPost" },
    { id: "ZAM-1044", status: "new", courier: "DPD" },
    { id: "ZAM-1045", status: "paid", courier: "InPost" },
  ];

  // TODO: Tu napisz countByKey i oba wywołania. Tę linię potem usuń.
  console.log(orders.length); // 4
}
