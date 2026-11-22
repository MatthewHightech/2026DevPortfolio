export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant">
      <div className="page-margin mx-auto flex max-w-7xl flex-col gap-2 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Matt Smith. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
