import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard nombre="Juan" apellido="Depp" edad="45" colorcabello="rojo"/>
      <PersonCard nombre="Pedro" apellido="Solez" edad="15" colorcabello="negro"/>
      <PersonCard nombre="Hector" apellido="Diaz" edad="5" colorcabello="blanco"/>
      <PersonCard nombre="Amber" apellido="Sotoz" edad="25" colorcabello="verde"/>
    </div>
  );
}

export default App;
