// Zadanie: dane karty przekazywane przez propsy
//
// Ten sam komponent wyświetla dwie przesyłki. Dane otrzymuje przez propsy,
// a w JSX odczytuje je jako props.id, props.customer itd. Uprość ten zapis.
//
// W parametrach funkcji ShipmentCard użyj destrukturyzacji, aby odczytać
// id, customer, courier, weightKg i note. Dla note ustaw wartość domyślną
// "brak uwag". W JSX odwołuj się do tych nazw bez przedrostka props.
// Typ ShipmentCardProps zostaje bez zmian i nadal opisuje parametr funkcji.
//
// Sprawdź efekt: na stronie powinny być dwie karty:
//   PRZ-2207: Robert Kowalski, InPost, 1.2 kg, Uwagi: brak uwag
//   PRZ-2208: Anna Nowak, DPD, 4.0 kg, Uwagi: Kruche
// Pozostałe informacje i wygląd kart powinny pozostać bez zmian.
// Sprawdź też, co powie TypeScript, gdy w Task.tsx usuniesz weightKg z jednej karty.
//
// Edytuj: src/03-props-task/ShipmentCard.start.tsx
// W src/App.tsx ustaw import: import { Task as Lesson } from "./03-props-task/Task";
// W JSX pozostaw <Lesson />.

type ShipmentCardProps = {
  id: string;
  customer: string;
  courier: string;
  weightKg: number;
  note?: string;
};

// TODO: Odczytaj propsy w parametrach funkcji, ustaw domyślne uwagi i uprość JSX.
export const ShipmentCard = (props: ShipmentCardProps) => (
  <article className="rounded-lg border border-line p-4">
    <h3 className="text-lg font-semibold">{props.id}</h3>
    <p>Klient: {props.customer}</p>
    <p>Kurier: {props.courier}</p>
    <p>Waga: {props.weightKg.toFixed(1)} kg</p>
    <p>Uwagi: {props.note}</p>
  </article>
);
