import React from "react";
import '../Home/Home.css';
import './Tutorial.css';
import TutorialCard from "./TutorialCard/TutorialCard";
import TableOfContent2 from "./TableOfContents/TableOfContents";
import {Heading} from "./TableOfContents/TableOfContents";
import TutorialButton from "./TutorialButton/TutorialButton";
import {IoArrowBack} from "react-icons/io5";
import {IoArrowForward} from "react-icons/io5";
import BackBar from "./../BackButton/BackBar";
import {useNavigate} from 'react-router';
import {MathJax} from "better-react-mathjax";

function Tutorial() {

    //variable for navigation function
    let navigate = useNavigate();

    return (
        <div>
            <BackBar texts={["Home"]}/>
            <TutorialButton onClick={() => {
                navigate("/");
            }}
                            type="button"
                            buttonStyle="btn--primary--solid"
                            buttonSize="btn--medium"
                            buttonPosition="btn--left"><IoArrowBack size='2em'/>
            </TutorialButton>
            <TutorialButton onClick={() => {
                navigate("/tutorial_2");
            }}
                            type="button"
                            buttonStyle="btn--primary--solid"
                            buttonSize="btn--medium"
                            buttonPosition="btn--right"><IoArrowForward size='2em'/>
            </TutorialButton>

            <TutorialCard>
                <h1>The documentation page</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>

                <Heading as="h2">The introduction</Heading>
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

                <Heading as="h2">How to get started</Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>

                <Heading as="h2">Advanced usage</Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>

                <Heading as="h3">Using upside-down</Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit,
                    voluptates assumenda eos accusamus eius magnam similique aspernatur
                    incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores
                    laudantium dignissimos!
                </p>

                <Heading as="h3">Easter eggs</Heading>
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

            </TutorialCard>
            <TableOfContent2/>
        </div>
    );
}

export default Tutorial;
