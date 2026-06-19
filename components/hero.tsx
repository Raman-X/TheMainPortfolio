export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-8 pb-20 pt-8 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <p
          className="mb-3 text-xs uppercase tracking-[0.2em] text-primary animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          Web developer and marketer
        </p>
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Hey, I&apos;m Raman Maharjan.
        </h1>
        <p
          className="mt-4 max-w-2xl font-light leading-7 text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          I&apos;m a web developer and marketer based in Lalitpur, Nepal.
          I&apos;m passionate about building fast, useful web experiences and
          sharing what I learn along the way.
        </p>
      </div>

      <div
        className="flex size-32 shrink-0 items-center justify-center border bg-muted text-4xl font-bold text-primary sm:size-40 animate-scale-in"
        style={{ animationDelay: "0.2s" }}
      >
        RM
      </div>
    </section>
  );
}
