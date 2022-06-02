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

    let navigate = useNavigate();

    //functions to set value of each input field
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');

    //latex code for a sum symbol
    const tex = `$$\\sum_{n = }^{}\\left(\\frac{10\\sqrt{n}}{n}\\right)$$`
    let buttonIndex: any;

    //function that saves which input field is currently selected
    function setButtonIndex(index: any) {
        buttonIndex = index;
    }

    //function that adds latex code to the last selected input field
    function changing(symbol: any) {
        if (buttonIndex == 1) {
            setValue(`${value} ${symbol}`)
        } else {
            setValue2(`${value2} ${symbol}`)
        }
    }

    return (
        <div>
            <BackBar texts={["Home"]}/>
            <TutorialCard>
                <Heading as="h1">Was ist vollständige Induktion?</Heading>

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
                                    onClick={() => changing(`\\sum_{n = }^{}\\left(\\right)`)}>Σ
                            </button>
                            <button className="symbolButton">√</button>
                            <button className="symbolButton">α</button>
                            <button className="symbolButton">∏</button>
                            <button className="symbolButton">∫</button>
                            <button className="symbolButton">π</button>
                        </div>
                    </MathJax>
                    <MathJax>{`An example is the equation $$${value} + ${value2}$$`}</MathJax>
                </div>


                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>
                <MathJax hideUntilTypeset={"first"}>
                    {`Dies ist eine Testaufgabe um Aufgaben auszuprobieren. Beweise das folgendes gilt: \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), beweise anschließend,
                                dass auch folgendes gilt:
                                \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)= 4^{7} +28*\\sqrt{5}\\]
                                Beweise schlussendlich dass gilt:`}
                </MathJax>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>

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
            </TutorialCard>
            <TableOfContents/>

            <button onClick={() => {
                navigate("/")
            }}
                    className="btn previous round">&#8250; </button>
            <button
                onClick={() => {
                    navigate("/")
                }}
                className="btn next round">&#8249; </button>
        </div>
    )
        ;
}

export default Tutorial
;
