export default function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border hairline bg-white px-3 py-1 text-xs text-neutral-700">
      {text}
    </span>
  );
}
