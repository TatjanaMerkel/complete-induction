import './TutorialCard.css';
import React, {useState} from "react";
import {MathJax} from "better-react-mathjax";

const DOMPurify = require('dompurify')(window);

function TutorialCard(props: { page: number, title: string, text_1: string, text_2: string, task: string, solution: string }) {

    const [showButton, setShowButton] = useState(0);


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
                    <br/>
                    <div className="button-row">
                        <button className="button" onClick={() => setShowButton(1)}>
                            <img className="buttonIcon" src={require('../../../assets/icons/MathsSymbols/sumButton.png')} alt="sum"/>
                        </button>
                        <button className="button"/>
                        <button className="button"/>
                        <button className="button"/>
                        <button className="button"/>
                    </div>
                </>
                : ''}
        </div>
    );
}

export default TutorialCard;
