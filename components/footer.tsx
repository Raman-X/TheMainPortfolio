export default function Footer() {
  return (
    <footer
      className="py-4 opacity-0"
      style={{ animation: "fadeIn 0.5s ease-out 0.4s forwards" }}
    >
      <div className="container mx-auto max-w-3xl">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Raman Maharjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
