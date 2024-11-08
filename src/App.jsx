import "./App.css";
import Card from "./componentes/Card";

function App() {
  const lugar= ["Cruncy Butterscotch","Supermans Secret","Wonder Woman Shake"] 
  const descripcion =["Butterscotch & Cashews", "Peanut Butter. Dry fruit. With Vainilla Ice Cream","Saffon. With Vainilla Ice Cream"]
  const plata =["18","21","19"]

  return (
    <>
      <div className="cartatotal">
        <p>Milk Shakes</p>
        {lugar.map((estado,index) => (
          <Card lugares={estado} concepto={descripcion[index]} pago={plata[index]}/>
        ))}
          
        
      </div>
    </>
  );
}

export default App;
