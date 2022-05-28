import React, { useState } from "react";
import '../Home/Home.css';
import './Tutorial2.css';
import Navbar from "../Navbar/Navbar";
import TableOfContents from '../TableOfContents/TableOfContents';
import { Heading } from "../TableOfContents/TableOfContents";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import TutorialButton from '../TutorialButton/TutorialButton';
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from 'react-router';

function Tutorial2() {
    const [childData, setState] = useState(false);


    function handleCallback(childData: boolean) {
        setState(childData)
    }
    
    const DummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    //functions to set value of each input field
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

    //latex code for a sum symbol
    const tex = `$$\\sum_{n = }^{}\\left(\\frac{10\\sqrt{n}}{n}\\right)$$`
    let buttonIndex:any;

    //function that saves which input field is currently selected
    function setButtonIndex(index:any){
        buttonIndex = index;
    }

    //function that adds latex code to the last selected input field
    function changing(symbol:any){
        if (buttonIndex == 1){
            setValue(`${value} ${symbol}`)
        }
        else{
            setValue2(`${value2} ${symbol}`)
        }
    }

    //variable for navigation function
    let navigate = useNavigate();

    return (
        <div>
            <Navbar parentCallback={handleCallback}/>
            
            <TutorialButton onClick={() => {{navigate("/tutorial");}}}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--medium"
            buttonPosition="btn--left"><IoArrowBack size='2em'></IoArrowBack>
            </TutorialButton>
            <TutorialButton onClick={() => {console.log("You Clicked on Me!");}}
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
                                <input value={value} onClick={() => setButtonIndex(1)} onChange={(event) => setValue(event.target.value)} />
                                <input value={value2} onClick={() => setButtonIndex(2)} onChange={(event) => setValue2(event.target.value)} />
                                <div className="symbolBackground">
                                <button className="symbolButton" onClick={() => changing(`\\sum_{n = }^{}\\left(\\right)`)}>Σ</button>
                                <button className="symbolButton">√</button>
                                <button className="symbolButton">α</button>
                                <button className="symbolButton">∏</button>
                                <button className="symbolButton">∫</button>
                                <button className="symbolButton">π</button>
                                </div>
                            </MathJax>
                            <MathJax>{`An example is the equation $$${value} + ${value2}$$`}</MathJax>
                        </div>
                        
                        <p>{DummyText}</p>
                        <Heading as="h2">The introduction</Heading>
                        i write text here
                        <Heading as="h2">How to get started</Heading>
                        cool text
                        <Heading as="h2">Advanced usage</Heading>
                        indeed text
                        <Heading as="h3">Using upside-down</Heading>
                        i see text
                        <Heading as="h3">Easter eggs</Heading>
                        some text
                        <Heading as="h2">Contributing</Heading>
                        come on text
                        <Heading as="h3">Your first pull request</Heading>
                        here as well
                        <Heading as="h3">Governance</Heading>
                        text is here
                        <Heading as="h2">FAQ</Heading>
                        text
                    </main>
                </article>
            </div>
            <div className="mainTable">
            <TableOfContents/>
            </div>
        </div>
    );
}

export default Tutorial2;