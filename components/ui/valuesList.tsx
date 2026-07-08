import { values } from "@/data/values";

export function ValuesList() {
  return (
    <ul className="mb-16 space-y-4">
      {values.map((value) => (
        <li
          key={value}
          className="flex gap-3 text-body-lg leading-relaxed"
        >
          <span className="shrink-0 text-secondary" aria-hidden>
            —
          </span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}
