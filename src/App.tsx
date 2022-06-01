import React, {useState} from 'react';
import Home from "./components/Home/Home";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Tutorial from './components/Tutorial/Tutorial';
import {MathJaxContext} from "better-react-mathjax";
import TopicView from './components/TopicView/TopicView';
import Tutorial2 from './components/Tutorial2/Tutorial2';
import Login from "./components/Login/Login";
import Navbar from "../src/components/Navbar/Navbar";
import TableOfContent2 from "./components/TableOfContents2/TableOfContents2";
import {Heading} from "./components/TableOfContents2/TableOfContents2";
import TutorialCard from "./components/TutorialCard/TutorialCard";

function App() {

    const [childData, setState] = useState(false);


    function handleCallback(childData: boolean) {
        setState(childData)
    }

    // const config = {
    //     loader: { load: ["[tex]/html"] },
    //     tex: {
    //       packages: { "[+]": ["html"] },
    //       inlineMath: [
    //         ["$", "$"],
    //         ["\\(", "\\)"]
    //       ],
    //       displayMath: [
    //         ["$$", "$$"],
    //         ["\\[", "\\]"]
    //       ]
    //     }
    //   };

    // return (
    //
    //     // <div className='App'>
    //     //     {/*<Navbar parentCallback ={handleCallback}/>*/}
    //     //
    //     //     {/*<MathJaxContext version={3} config={config}>*/}
    //     //     {/*    <Router>*/}
    //     //     {/*        <Routes>*/}
    //     //     {/*            <Route path="/" element={<Home />} />*/}
    //     //     {/*            <Route path="/tutorial" element={<Tutorial />} />*/}
    //     //     {/*            <Route path="/tutorial_2" element={<Tutorial2 />} />*/}
    //     //     {/*            <Route path="/topics" element={<TopicView />} />*/}
    //     //     {/*        </Routes>*/}
    //     //     {/*    </Router>*/}
    //     //     {/*</MathJaxContext>*/}
    //     //     {/*{childData && <Login parentCallback ={handleCallback}/>}*/}
    //     // </div>
    // );

    return (
        <div className="App">
            <Navbar parentCallback={handleCallback}/>
            <TutorialCard>
                <article>
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
                </article>
            </TutorialCard>
            <TableOfContent2/>
        </div>
    );
}

export default App;



