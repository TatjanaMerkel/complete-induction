import React from "react";
import '../Home/Home.css';
import './Tutorial.css';
import TableOfContents from '../TableOfContents/TableOfContents';
import { Heading } from "../TableOfContents/TableOfContents";
import { MathJax } from "better-react-mathjax";
import TutorialButton from '../TutorialButton/TutorialButton';
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from 'react-router';
import BackBar from "./../BackButton/BackBar";

function Tutorial() {

    const DummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
    //variable for navigation function
    let navigate = useNavigate();

    return (
        <div>
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
                        <h1>The documentation page</h1>
                        <p>{DummyText}</p>
                        <p>{DummyText}</p>
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
            <div >
            <TableOfContents/>
            
            </div>
        </div>
    );
}

export default Tutorial;
