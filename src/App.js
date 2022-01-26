export default function App() {
  return (
    <div>
      <Hello></Hello>
      <Hello id="1" name="Pari"></Hello>
    </div>
  );
}

//function with parameter restructuring
function Hello({ name, id }) {
  return <h1>Hello {name}</h1>;
}
