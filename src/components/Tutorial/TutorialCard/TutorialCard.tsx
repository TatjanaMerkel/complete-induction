import './TutorialCard.css';
import React from "react";
import {MathJax} from "better-react-mathjax";

const DOMPurify = require('dompurify')(window);

function TutorialCard(props: { page: number, title: string, text_1: string, text_2: string }) {

    return (
        <div className="card">
            <h2 className="card-title">
                {props.title}
            </h2>
            <MathJax className="card-body" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.text_1)}}/>
            {props.page === 0 ? <img className="domino-image" src={require('../../../assets/DominoEffect.jpg')}
                                     alt="DominoEffekt"/> : ''}
            <MathJax className="card-body" dangerouslySetInnerHTML={{__html: props.text_2}}/>
        </div>
    );
}

export default TutorialCard;
