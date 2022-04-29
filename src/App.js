import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard nombre="Juan" apellido="Depp" edad={45} colordecabello="rojo"/>
      <PersonCard nombre="Pedro" apellido="Solez" edad={15} colordecabello="negro"/>
      <PersonCard nombre="Hector" apellido="Diaz" edad={5} colordecabello="blanco"/>
      <PersonCard nombre="Amber" apellido="Sotoz" edad={25} colordecabello="verde"/>
    </div>
  );
}

export default App;
