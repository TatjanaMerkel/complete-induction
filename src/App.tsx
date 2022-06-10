import React, {useState} from 'react';
import Home from "./components/Home/Home";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Tutorial from './components/Tutorial/Tutorial';
import {MathJaxContext} from "better-react-mathjax";
import TopicView from './components/TopicView/TopicView';
import TopicDifficultyView from './components/TopicView/TopicDifficulty/TopicDifficultyView';
import Test from './components/TopicView/TopicDifficulty/Test';
import Login from "./components/Login/Login";
import Navbar from "../src/components/Navbar/Navbar";

function App() {

    const [childData, setState] = useState(false);


    function handleCallback(childData: boolean) {
        setState(childData)
    }

    const config = {
        loader: { load: ["[tex]/html"] },
        tex: {
          packages: { "[+]": ["html"] },
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"]
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"]
          ]
        }
      };

    return (

        <div className='App'>
            <Navbar parentCallback ={handleCallback}/>

            <MathJaxContext version={3} config={config}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tutorial" element={<Tutorial />} />
                        <Route path="/topics" element={<TopicView />} />
                        <Route path="/topics/topicdifficulty/:id" element={<TopicDifficultyView />} />
                        <Route path="/topics/topicdifficulty/:id/test" element={<Test />} />
                    </Routes>
                </Router>
            </MathJaxContext>
            {childData && <Login parentCallback ={handleCallback}/>}
        </div>
    );


}

export default App;



