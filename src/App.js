import './App.css';
import Header from './Header';
import InputSaisi from './InputSaisi';

function App() {

  function colorChange(color) {
    localStorage.setItem('background', color);
    const bg = document.querySelector('.App');
    let classesActuelles = bg.classList;
    if (classesActuelles.length > 2) {
      let derniereClasse = classesActuelles[classesActuelles.length - 1];
      bg.classList.remove(derniereClasse);
    }
    bg.classList.add(localStorage.getItem('background'));
    }

  return (
    <>
    <div className="App mx-auto">
      <Header colorChange={colorChange}/>
      <InputSaisi />
    </div>

    </>
  );
}

export default App;
