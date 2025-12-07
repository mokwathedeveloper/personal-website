export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} Mokwa The Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
