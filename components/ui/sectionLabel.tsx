export type SectionLabelProps = {
    index: string;
    label: string;
  };
  
  export function SectionLabel({ index, label }: SectionLabelProps) {
    return (
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="font-mono text-xs text-accent border border-accent px-3 py-1">
            {index}
          </div>
          <div className="font-mono text-xs text-muted-foreground uppercase">
            {label}
          </div>
        </div>
      </div>
      );
  }