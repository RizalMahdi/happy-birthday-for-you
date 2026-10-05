type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-xl text-center">
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.3em] text-rose uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading text-3xl text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="mt-4 flex items-center justify-center gap-3 text-rose">
        <span className="h-px w-12 bg-line" />
        <span aria-hidden>♥</span>
        <span className="h-px w-12 bg-line" />
      </div>
      {subtitle ? (
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
