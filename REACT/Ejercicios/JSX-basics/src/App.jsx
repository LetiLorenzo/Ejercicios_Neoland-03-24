import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Parrafo } from "./Components";

// Ha llegado el momento de ponerse a trabajar con ReactJS, para ello os proponemos una pequeña práctica que os ayude afianzar el funcionamiento de `JSX`.

// 1. Crea una aplicación de ReactJS con vite → name: jsx-basics.
// 2. Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el valor numérico asignado.
// 3. Recorrer los elementos de un array y renderizalos ⇒ Si os da un error de keys en la consola podéis usar el index como `key={index}` .
// 4. Mappea un array de objetos para pintarlos.
// 5. Crea un botón que modifique un valor de false a true y renderice un contenido cuando este valor se modifique.

const App = () => {
  const [count, setCount] = useState(0);
  const [valor, setValor] = useState(false); //--------->>> ejercicio 5

  // 5. Crea un botón que modifique un valor de false a true y renderice un contenido cuando este valor se modifique.
  const toggleBooleano = () => {
    setValor(!valor); //Cambia el valor de false a true y viceversa.
  };

  const actualizarEstado = () => {
    setCount((value) => (value + 1) % 25); // esto hace que cuando alcance el número 24, vuelcva a empezar el recorrido (así sería como un  reloj)
    console.log("estado debajo de la actualizacion", count);
  };

const print = () => {
  if (count > 5 && count < 13) {
    return <Parrafo texto={"Buenos días"} />; // ------->> ejercicio 2
  } else if (count > 12 && count < 20) {
    return <Parrafo texto={"Buenas tardes"} />;
  } else {
    return <Parrafo texto={"Buenas noches"} />;
  }
};

const frutas = ["peras", "manzanas", "cerezas", "kiwis"]; // ----> ejercicio 3

/*Ejercicio 4*/
const animales = [
  {
    nombre: 'León',
    especie: 'Panthera leo',
    habitat: 'Sabana',
    
  },
  {
    nombre: 'Elefante',
    especie: 'Loxodonta',
    habitat: 'Selva tropical',
    
  },
  {
    nombre: 'Tigre',
    especie: 'Panthera tigris',
    habitat: 'Bosque tropical',
   
  },
  {
    nombre: 'Oso polar',
    especie: 'Ursus maritimus',
    habitat: 'Ártico',
    
  }
];

  return (
    <>
      <div>
        {console.log("estado en el template ", count)}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/*count > 4 && <p>Count es mayor que 4</p>*/}
      {print()}
      <h2>Frutas:</h2> {/* ---->>> ejercicio 3*/}
      {frutas.map((fruta, index) => (
        <Parrafo key={index} texto={fruta} />
      ))}
      <h2>Animales:</h2> {/* ---->>> ejercicio 4 */}
      {animales.map((animal, index) => ( 
        <div key={index}>
          <p>Nombre: {animal.nombre}</p>
          <p>Especie: {animal.especie}</p>
          <p>Hábitat: {animal.habitat}</p>
        </div>
      ))}

      <h2>Booleano:</h2>
      <div className="card">
        <button onClick={toggleBooleano}>Toggle booleano:</button>
        {valor ? (
          <Parrafo texto={"El valor está en true"} />
        ) : (
          <Parrafo texto={"El valor está en false"} />
        )}
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => actualizarEstado()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Parrafo
        className="read-the-docs"
        texto={"Click on the Vite and React logos to learn more"}
      />
    </>
  );
};

export default App;

