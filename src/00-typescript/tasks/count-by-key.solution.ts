////////
//// Zadanie – ile zamówień w każdym statusie, rozwiązanie
////////
//
// Uruchamiamy: node src/00-typescript/tasks/count-by-key.solution.ts
// Treść zadania: tasks/count-by-key.start.ts
{
  // readKey dostaje element typu Item, więc przy wywołaniu TypeScript wie, że to Order,
  // i podpowiada jego pola.
  type Order = { id: string; status: string; courier: string };

  const countByKey = <Item>(items: Item[], readKey: (item: Item) => string) => {
    const counts: Record<string, number> = {};

    for (const item of items) {
      const key = readKey(item);

      counts[key] = (counts[key] ?? 0) + 1;
    }

    return counts;
  };

  const orders: Order[] = [
    { id: "ZAM-1042", status: "paid", courier: "DPD" },
    { id: "ZAM-1043", status: "paid", courier: "InPost" },
    { id: "ZAM-1044", status: "new", courier: "DPD" },
    { id: "ZAM-1045", status: "paid", courier: "InPost" },
  ];

  console.log(countByKey(orders, (order) => order.status)); // { paid: 3, new: 1 }
  console.log(countByKey(orders, (order) => order.courier)); // { DPD: 2, InPost: 2 }
}
