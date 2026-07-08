export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant">
      <div className="page-margin mx-auto flex max-w-7xl flex-col gap-2 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-mono-meta text-foreground">MATT_SMITH</p>
        <p className="text-mono-meta text-muted-foreground">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
