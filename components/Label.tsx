export default function Label({ text }: { text: string }) {
  return (
    <div className="rounded-md border border-white px-4 py-2">
      <p className="text-sm">{text}</p>
    </div>
  );
}
