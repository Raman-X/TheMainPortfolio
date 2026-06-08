export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container max-w-3xl mx-auto">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Raman Maharjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
