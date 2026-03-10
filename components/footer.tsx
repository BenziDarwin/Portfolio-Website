export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>Ssali Benjamin Tamale</p>
        <p>Software Engineer</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
