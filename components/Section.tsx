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
    <section id={id} className="scroll-mt-24 py-6 md:py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.35em] text-neutral-500">{eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
        </div>
        <div className="hidden md:block h-px flex-1 hairline border-t" />
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
