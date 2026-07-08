export type SectionLabelProps = {
  section: string;
  label: string;
};

export function SectionLabel({ section, label }: SectionLabelProps) {
  return (
    <div className="mb-14">
      <p className="font-mono text-[0.8rem] font-normal tracking-[0.16em] text-foreground md:text-sm">
        [{section} // {label}]
      </p>
    </div>
  );
}
