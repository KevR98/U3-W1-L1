import './App.css';
import Button from './components/Button';
import Image from './components/Image';

function App() {
  return (
    <>
      <h1>ESERCIZIO BOTTONI</h1>
      <div>
        <Button content='CLICCAMI!' />
        <Button content='UN ALTRO BOTTONE' />
        <Button content='TERZO BOTTONE' />
      </div>
      <h1>ESERCIZIO IMMAGINI</h1>
      <div>
        <Image src='https://placecats.com/300/200' alt='Gatto' />
      </div>
      <Image src='https://placedog.net/300/200' alt='Cane' />
    </>
  );
}

export default App;
