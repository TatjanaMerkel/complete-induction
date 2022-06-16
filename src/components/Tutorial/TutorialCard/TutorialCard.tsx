import './TutorialCard.css';
import React, {useState} from "react";
import {MathJax} from "better-react-mathjax";
import TutorialSymbols from "./TutorialSymbols/TutorialSymbols";

const DOMPurify = require('dompurify')(window);

function TutorialCard(props: { page: number, title: string, text_1: string, text_2: string, task: string, solution: string }) {
    
    var symbolArray = new Array;
    const [showButton, setShowButton] = useState(0);
    const [symbolList, setSymbolList] = useState([<TutorialSymbols/>]);

    function changing() {
        symbolList.push(<TutorialSymbols/>)
        setSymbolList(symbolList)
    }

    return (
        <div className="card">
            <h2 className="card-title">
                <MathJax dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.title)}}/>
            </h2>
            <MathJax className="card-body" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.text_1)}}/>
            {props.page === 0 ? <img className="domino-image" src={require('../../../assets/img/DominoEffect.jpg')}
                                     alt="DominoEffekt"/> : ''}
            <MathJax className="card-body" dangerouslySetInnerHTML={{__html: props.text_2}}/>

            {props.page === 2 ?
                <div>
                    <MathJax className="card-body task" dangerouslySetInnerHTML={{__html: props.task}}/>
                    <MathJax className="card-body" dangerouslySetInnerHTML={{__html: props.solution}}/>
                </div>
                : ''}

            {props.page === 3  ?
                <>
                    {showButton === 1 ?
                        <div>
                            <div className="container">
                                <div className="nVariable">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                                <div className="flex">
                                    <img className="symbol" src={require('../../../assets/icons/MathsSymbols/sum.png')}
                                         alt="DominoEffekt"/>
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                                <div className="runVariable flex">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                    =
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                            </div>
                        </div>
                       : ''}
                        <div>
                        {symbolList}
                        </div>

                    {showButton === 2 ?
                        <div>
                            <div className="container">
                                <div className="nVariable">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                                <div className="flex">
                                    <img className="symbol" src={require('../../../assets/icons/MathsSymbols/product-small.png')}
                                         alt="DominoEffekt"/>
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                                <div className="runVariable flex">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                    =
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                            </div>
                        </div>
                       : ''}
                    
                    {showButton === 3 ?
                        <div>
                            <div className="container">
                                <div className="exponent">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                                <div className="base">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                            </div>
                        </div>
                       : ''}

                    {showButton === 4 ?
                        <div>
                            <div className="container">
                                <div className="sqrt">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                                <img className="symbol" src={require('../../../assets/icons/MathsSymbols/root.png')}
                                         alt="DominoEffekt"/>
                            </div>
                        </div>
                       : ''}

                    {showButton === 5 ?
                        <div>
                            <div className="container">
                                <div className="nVariable">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                                <div className="flex">
                                    <img className="fraction_symbol" src={require('../../../assets/icons/MathsSymbols/fraction_placeholder.png')}
                                         alt="DominoEffekt"/>
                                </div>
                                <div className="fraction_down">
                                    <input className="inputField" type="number" id="quantity" name="quantity"/>
                                </div>
                            </div>
                        </div>
                       : ''}
                    <br/>
                    <div className="button-row">
                        <button className="button" onClick={() => setShowButton(1)}>
                            <img className="buttonIcon" src={require('../../../assets/icons/MathsSymbols/sumButton.png')} alt="sum"/>
                        </button>
                        <button className="button" onClick={() => setShowButton(2)}>
                            <img className="buttonIcon" src={require('../../../assets/icons/MathsSymbols/product.png')} alt="sum"/>
                        </button>
                        <button className="button" onClick={() => setShowButton(3)}>
                            <img className="buttonIcon" src={require('../../../assets/icons/MathsSymbols/power.png')} alt="sum"/>
                        </button>
                        <button className="button" onClick={() => setShowButton(4)}>
                            <img className="buttonIcon" src={require('../../../assets/icons/MathsSymbols/root.png')} alt="sum"/>
                        </button>
                        <button className="button" onClick={() => setShowButton(5)}>
                            <img className="buttonIcon" src={require('../../../assets/icons/MathsSymbols/fracture.png')} alt="sum"/>
                        </button>
                    </div>
                </>
                : ''}
        </div>
    );
}

export default TutorialCard;