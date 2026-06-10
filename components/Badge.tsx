export default function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border hairline bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950 hover:shadow-md">
      {text}
    </span>
  );
}