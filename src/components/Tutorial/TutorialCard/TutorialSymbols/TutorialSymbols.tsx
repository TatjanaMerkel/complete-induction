import React from 'react'
import './TutorialSymbols.css';

function TutorialSymbols() {
  return (
    
    <div className="container">
        <div className="nVariable">
            <input className="inputField" type="number" id="quantity" name="quantity"/>
        </div>
        <div className="flex">
            <img className="symbol" src={require('../../../../assets/icons/MathsSymbols/sum.png')}
                alt="DominoEffekt"/>
            <input className="inputField" type="number" id="quantity" name="quantity"/>
        </div>
        <div className="runVariable flex">
            <input className="inputField" type="number" id="quantity" name="quantity"/>
            =
            <input className="inputField" type="number" id="quantity" name="quantity"/>
        </div>
    </div>
  )
} export default TutorialSymbols;