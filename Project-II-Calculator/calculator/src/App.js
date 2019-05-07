import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalcContainer from './components/ButtonComponents/CalcContainer';

class App extends React.Component { 
  render (){
    return (
      <div className = "calc-wrapper">
        <CalculatorDisplay/>
        <CalcContainer className = "weird">
          <ActionButton text = "clear"/>
          <NumberButton text = "/"/>
        </CalcContainer>
        <CalcContainer>
          <NumberButton text = "7"/>
          <NumberButton text = "8"/>
          <NumberButton text = "9"/>
          <NumberButton text = "X"/>
        </CalcContainer>
        <CalcContainer>
          <NumberButton text = "4"/>
          <NumberButton text = "5"/>
          <NumberButton text = "6"/>
          <NumberButton text = "-"/>
        </CalcContainer>
        <CalcContainer>
          <NumberButton text = "1"/>
          <NumberButton text = "2"/>
          <NumberButton text = "3"/>
          <NumberButton text = "+"/>
        </CalcContainer>
        <CalcContainer className = "weird">
          <ActionButton text = "0"/>
          <NumberButton text = "="/>
        </CalcContainer>

      </div>
    )
  };
};

export default App;
