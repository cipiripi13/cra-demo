
import './App.css';
// import { Header } from './components/Header'; // NAMED IMPORT
import Header from './components/Header'; // DEFAULT IMPORT
import DrugoIme from './components/Header'; // DEFAULT IMPORT
// import CicaGlisa from './components/Header'; // DEFAULT IMPORT
import { MainContent } from './components/MainContent' // NAMED IMPORT
// import { Footer, nestoDrugo, obimKruga, povrsinKruga } from './components/Footer'; // NAMED IMPORT
import Footer, { nestoDrugo, obimKruga, povrsinKruga } from './components/Footer'; // NAMED IMPORT
// import { Footer as CicaGlisa } from './components/Footer';

export function App() { // NAMED EXPORT
  // function App() { // 
  // const povrsina = povrsinKruga(70);

 const handleEvent = (e) => {
    alert('Pozdrav');
    console.log(e.target);
  };


  return (
    <div className='App' >
      <Header poruka="Zdravo svima" />
      <DrugoIme text={'Ovo je pozdrav iz Header-a'} />
      <MainContent onClick={handleEvent} />
      <Footer onClick={handleEvent} message ={'Ovo je props'}/>
      {nestoDrugo}
      {/* <br />
      Obim kruga: {obimKruga(70)}
      <br />
      Povrsina kruga: {povrsina}
      <br />
      {3 + 2}
      {null}
      {5}
      {(5)} */}

    </div>
  );
}

// export default App; // DEFAULT EXPORT
