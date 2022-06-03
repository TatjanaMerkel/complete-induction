import React, { useState } from "react";
import '../Home/Home.css';
import './Tutorial.css';
import Navbar from "../Navbar/Navbar";
import TableOfContents from '../TableOfContents/TableOfContents';
import { Heading } from "../TableOfContents/TableOfContents";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import TutorialButton from '../TutorialButton/TutorialButton';
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from 'react-router';
import BackBar from "./../BackButton/BackBar";

function Tutorial() {
    const [childData, setState] = useState(false);


    function handleCallback(childData: boolean) {
        setState(childData)
    }

    const DummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
    //variable for navigation function
    let navigate = useNavigate();

    return (
        <div>
            <Navbar parentCallback={handleCallback}/>
            <BackBar texts={["Home"]}/>
            <TutorialButton onClick={() => {{navigate("/");}}}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--medium"
            buttonPosition="btn--left"><IoArrowBack size='2em'></IoArrowBack>
            </TutorialButton>
            <TutorialButton onClick={() => {{navigate("/tutorial_2");}}}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--medium"
            buttonPosition="btn--right"><IoArrowForward size='2em'></IoArrowForward>
            </TutorialButton>

            <div className="container">
                <article>
                    <main>
                        <h1>Vollständige Induktion: Was ist das?</h1>
                        <p>"Die vollständige Induktion ist ein Beweisverfahren, mit dem du Aussagen für die ganzen natürlichen Zahlen beweisen kannst. Das funktioniert wie bei einer Reihe von Dominosteinen. Du schubst den ersten Stein an und musst dann nur noch dafür sorgen, dass der jeweils nächste Stein umgestoßen wird."</p>
                        <img className="domino_img" src={require("./../../files/icons/Domino.png")}></img>
                        <p>"Die vollständige Induktion besteht aus folgenden Schritten: <br/>
                            1. Der Induktionsanfang: Hier wird gezeigt, dass die Aussage für den Startwert gilt. <br/>
                            2. Die Induktionsvorraussetzung: Nun gehst du davon aus, dass die Aussage für ein beliebiges n gilt. <br/>
                            3. Die Induktionsbehauptung: Jetzt gehst du davon aus, dass es auch für jedes beliebige n+1 gilt. (n -&gt n+1)"<br/>
                            4. Der Induktionsschluss: Schlussendlich wird mit Hilfe der Induktionsvoraussetzung gezeigt, dass es auch für n+1 gilt.<br/>
                            <br/>
                            Den Induktionsbeweis kannst du für den Beweis verschiedenster Aussagen benutzen. Darunter Summengleichungen, Fakultäten, Teilbarkeitsaussagen, Ungleichungen und vieles mehr. </p>
                        <div>
                            <MathJax hideUntilTypeset={"first"}>
                                {`Dies ist eine Testaufgabe um Aufgaben auszuprobieren. Beweise das folgendes gilt: \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), beweise anschließend,
                                dass auch folgendes gilt:
                                \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)= 4^{7} +28*\\sqrt{5}\\]
                                Beweise schlussendlich dass gilt:`}
                            </MathJax>
                        </div>
                        
                        <p>{DummyText}</p>
                        <Heading as="h2">The introduction</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <Heading as="h2">How to get started</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <Heading as="h2">Advanced usage</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <Heading as="h3">Using upside-down</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <Heading as="h3">Easter eggs</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <Heading as="h2">Contributing</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <Heading as="h3">Your first pull request</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <Heading as="h3">Governance</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <Heading as="h2">FAQ</Heading>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
                    </main>
                </article>
            </div>
            <div className="mainTable">
            <TableOfContents/>
            
            </div>
        </div>
    );
}

export default Tutorial;