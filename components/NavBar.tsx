export default function ({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={`${index}_${item}`}>{item}</li>
      ))}
    </ul>
  );
}
