import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10 md:py-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.38em] text-neutral-500">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="hidden h-px flex-1 border-t hairline md:block" />
      </div>

      <div className="mt-10 md:mt-12">{children}</div>
    </section>
  );
}
