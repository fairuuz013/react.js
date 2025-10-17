export default function HeavyComponent() {
  console.log("Render HeavyComponent");
  let total = 0;
  for (let i = 0; i < 10_000_000; i++) total += i;
  return <div>Heavy Component hasil: {total}</div>;
}
