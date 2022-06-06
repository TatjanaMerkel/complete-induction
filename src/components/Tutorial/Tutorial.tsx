import React, {useState} from "react";
import '../Home/Home.css';
import './Tutorial.css';
import TutorialCard from './TutorialCard/TutorialCard';
import TableOfContents from './TableOfContents/TableOfContents';
import {Heading} from "./TableOfContents/TableOfContents";
import BackBar from "./../BackButton/BackBar";
import {useNavigate} from 'react-router';
import {MathJax} from "better-react-mathjax";


function Tutorial() {

    const naturalNumber = `\\(\\mathbb{N}\\)`;
    const naturalNumberNull = `\\(\\mathbb{N}_0\\) `;
    const naturalNumberAmount = `\\(\\mathbb{N}=\\{1, 2, 3, ... \\}\\)`;
    const nNull = `\\(n_0 \\) `;
    const n = `\\(n \\)`;

    let navigate = useNavigate();

    //functions to set value of each input field
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

    let buttonIndex: any;

    //function that saves which input field is currently selected
    function setButtonIndex(index: any) {
        buttonIndex = index;
    }

    //function that adds latex code to the last selected input field
    function changing(symbol: any) {
        if (buttonIndex === 1) {
            setValue(`${value} ${symbol}`)
        }
        if (buttonIndex === 2) {
            setValue2(`${value2} ${symbol}`)
        }
    }

    return (
        <div>
            <BackBar texts={["Home"]}/>
            <TutorialCard>
                <div className="cardTitle">
                    <Heading as="h2">Was ist vollständige Induktion?</Heading>
                </div>

                <p>
                    Die vollständige Induktion ist ein Beweisschema, nach der eine Aussage <b id="colorText">für alle
                    natürlichen Zahlen </b> bewiesen wird.
                    Die natürlichen Zahlen {naturalNumber} sind dabei die
                    Menge {naturalNumberAmount}. {naturalNumberNull}
                    beschreibt alle natürlichen Zahlen inklusive der 0.
                </p>
                <br/>
                <p>
                    Da es unendlich viele Zahlen gibt und deine Lebenszeit begrenzt ist, können nicht alle Zahlen
                    durchprobiert werden.
                    Stattdessen wird ein <b id="colorText">Domino-Prinzip </b> verwendet.
                    <br/>
                    <img className="picture" src={require('../../../src/assets/DominoEffect.jpg')} alt="DominoEffekt"/>
                </p>

                <p>
                    Es wird gedanklich den ersten Dominostein einer Dominokette umgestoßen. Der erste
                    Dominostein <b id="colorText">{nNull}</b>
                    fällt um und stößt den nächten Dominostein, seinen <b id="colorText">Nachfolger (n+1)</b> in der Kette um. Der (n+1)-te
                    Stein
                    stößt wiederum seinen Nachfolger (n+2) um und immer so weiter. Am Ende werden alle Dominosteine
                    fallen.
                    Der Fall eines Steins entspricht im Kontext eines <b id="colorText">Induktionsbeweises</b> dem Testen der Behauptung für
                    ein {n}.
                </p>
                <br/>
               

                <Heading as="h2">Von Dominoketten und der Unendlichkeit</Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>

                <Heading as="h2">Das Induktionsrezept</Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>

                <Heading as="h2">Interaktive Beispiel</Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>

                <div>
                    <MathJax hideUntilTypeset={"first"}>
                        {`Dies ist eine Testaufgabe um Aufgaben auszuprobieren. Beweise das folgendes gilt: \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), beweise anschließend,
                                dass auch folgendes gilt:
                                \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)= 4^{7} +28*\\sqrt{5}\\]
                                Beweise schlussendlich dass gilt:`}
                        <input value={value} onClick={() => setButtonIndex(1)}
                               onChange={(event) => setValue(event.target.value)}/>
                        <input value={value2} onClick={() => setButtonIndex(2)}
                               onChange={(event) => setValue2(event.target.value)}/>
                        <div className="symbolBackground">
                            <button className="symbolButton"
                                    onClick={() => changing(`\\sum_{n = 1}^{k}`)}>
                                <img src={require("./../../files/icons/sum-button.png")} style={{margin: 0}}/>
                            </button>
                            <button className="symbolButton"
                                    onClick={() => changing(`\\prod_{i = 0}^{n}`)}>
                                <img src={require("./../../files/icons/mult-button.png")} style={{margin: 0}}/>
                            </button>
                            <button className="symbolButton"
                                    onClick={() => changing(`\\frac{n}{k}`)}>
                                <img src={require("./../../files/icons/fraction-button.png")} style={{margin: 0}}/>
                            </button>
                            <button className="symbolButton"
                                    onClick={() => changing(`x^{n}`)}>
                                <img src={require("./../../files/icons/exponent-button.png")} style={{margin: 0}}/>
                            </button>
                            <button className="symbolButton"
                                    onClick={() => changing(`\\left(x\\right)`)}>
                                <img src={require("./../../files/icons/braket-button.png")} style={{margin: 0}}/>
                            </button>
                            <button className="symbolButton"
                                    onClick={() => changing(`\\sqrt{}`)}>
                                <img src={require("./../../files/icons/root-button.png")} style={{margin: 0}}/>
                            </button>
                            <button className="symbolButton"
                                    onClick={() => changing(`\\sqrt[2]{}`)}>
                                <img src={require("./../../files/icons/root-button2.png")} style={{margin: 0}}/>
                            </button>
                            <button className="symbolButton"
                                    onClick={() => changing(`\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`)}>
                                <img src={require("./../../files/icons/matrix-button.png")} style={{margin: 0}}/>
                            </button>
                        </div>
                    </MathJax>
                    <MathJax>{`An example is the equation $$${value} + ${value2}$$`}</MathJax>
                </div>
                <MathJax hideUntilTypeset={"first"}>
                    {`Dies ist eine Testaufgabe um Aufgaben auszuprobieren. Beweise das folgendes gilt: \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), beweise anschließend,
                                dass auch folgendes gilt:
                                \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)= 4^{7} +28*\\sqrt{5}\\]
                                Beweise schlussendlich dass gilt:`}
                </MathJax>
            </TutorialCard>
            <TableOfContents/>

            {/*<button onClick={() => {*/}
            {/*    navigate("/")*/}
            {/*}}*/}
            {/*        className="btn previous round">&#8250; </button>*/}
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        navigate("/")*/}
            {/*    }}*/}
            {/*    className="btn next round">&#8249; </button>*/}
        </div>
    )
        ;
}

export default Tutorial
;
