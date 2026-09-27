// Zadanie: potwierdzenie odbioru
//
// Po kliknięciu "Potwierdź odbiór" karta powinna od razu pokazać,
// że przesyłka została dostarczona, bez odświeżania strony.
//
// Zaimportuj useState z pakietu react. Zastąp zwykłą zmienną isDelivered
// stanem o początkowej wartości false. Po kliknięciu przycisku ustaw true.
// Tekst statusu, wygląd karty i widoczność przycisku zależą już od isDelivered.
//
// Sprawdź efekt: na początku widać status "W drodze" i przycisk
// "Potwierdź odbiór". Po kliknięciu status zmienia się na "Dostarczona",
// karta ma zielone oznaczenie, a przycisk znika.
//
// Edytuj: src/07-state-task/ShipmentCard.start.tsx
// W src/App.tsx ustaw import: import { Task as Lesson } from "./07-state-task/Task";
// W JSX pozostaw <Lesson />.

export const ShipmentCard = () => {
  // TODO: Przechowuj isDelivered w stanie i zmieniaj go po kliknięciu przycisku.
  const isDelivered = false;

  return (
    <article className="rounded-lg border border-line p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">PRZ-2207</h3>
        <span
          role="status"
          className={isDelivered ? "text-green" : "text-orange"}
        >
          {isDelivered ? "Dostarczona" : "W drodze"}
        </span>
      </div>
      <p>Klient: Robert Kowalski</p>
      {!isDelivered && <button className="mt-2 rounded-lg border p-2">Potwierdź odbiór</button>}
    </article>
  );
};
