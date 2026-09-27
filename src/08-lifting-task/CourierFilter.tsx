import type { CourierChoice } from "./shipments";

type CourierFilterProps = {
  activeCourier: CourierChoice;
  onCourierChange: (courier: CourierChoice) => void;
};

const COURIER_OPTIONS: { value: CourierChoice; label: string }[] = [
  { value: "all", label: "Wszyscy" },
  { value: "DPD", label: "DPD" },
  { value: "InPost", label: "InPost" },
  { value: "DHL", label: "DHL" },
];

// Filtr kuriera jest gotowy. Zadanie rozwiąż w pliku ShipmentPanel.start.tsx.
export const CourierFilter = ({ activeCourier, onCourierChange }: CourierFilterProps) => (
  <div
    role="group"
    aria-label="Kurier"
    className="mb-4 flex flex-wrap gap-2"
  >
    {COURIER_OPTIONS.map(({ value, label }) => (
      <button
        key={value}
        aria-pressed={value === activeCourier}
        className="rounded-lg border p-2 aria-pressed:bg-accent aria-pressed:text-surface"
        onClick={() => onCourierChange(value)}
      >
        {label}
      </button>
    ))}
  </div>
);
