export default function App() {
  return (
    <div>
      <Hello></Hello>
      <Hello id="1" name="Pari"></Hello>
    </div>
  );
}

//function with parameter
function Hello(p1) {
  return <h1>Hello {p1.name}</h1>;
}
