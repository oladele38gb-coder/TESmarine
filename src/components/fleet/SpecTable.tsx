import type { SpecGroup } from "@/content/fleet";

/** Grouped specification table: one <table> per group so screen readers announce each section. */
export function SpecTable({ groups }: { groups: SpecGroup[] }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-12 gap-y-10 lg:grid-cols-2">
      {groups.map((g) => (
        <table key={g.title} className="w-full border-collapse text-left text-[15px]">
          <caption className="eyebrow mb-3 text-left text-blue">{g.title}</caption>
          <tbody>
            {g.rows.map((r) => (
              <tr key={r.label} className="border-t border-line">
                <th scope="row" className="w-[42%] py-3 pr-4 align-top font-normal text-slate">
                  {r.label}
                </th>
                <td className="py-3 align-top text-ink">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
