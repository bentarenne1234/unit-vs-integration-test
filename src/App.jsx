import './App.css';
import { Title } from './components/Title'
import { RedButton } from './components/RedButton'
import { BlueButton } from './components/BlueButton'
import { useState } from "react";


function App() {
  const [titleColor, setTitleColor] = useState('black');

  const changeColorToBlue = () => {
    setTitleColor('blue');
  };

  const changeColorToRed = () => {
    setTitleColor('red');
  };

  return (
    <div className="App">
      <Title titleColor={titleColor}/>
      <RedButton handleClick={changeColorToRed}/>
      <br/>
      <BlueButton handleClick={changeColorToBlue}/>
    </div>
  );
}

export default App;
