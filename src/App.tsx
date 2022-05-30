import React from 'react';
import Home from "./components/Home/Home";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Tutorial from './components/Tutorial/Tutorial';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import TopicView from './components/TopicView/TopicView';
import TopicDifficultyView from './components/TopicView/TopicDifficulty/TopicDifficultyView';
import Tutorial2 from './components/Tutorial2/Tutorial2';

function App() {
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
            <MathJaxContext version={3} config={config}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tutorial" element={<Tutorial />} />
                        <Route path="/tutorial_2" element={<Tutorial2 />} />
                        <Route path="/topics" element={<TopicView />} />
                        <Route path="/topicdifficulty" element={<TopicDifficultyView />} />
                    </Routes>
                </Router>
            </MathJaxContext>
        </div>
    );
}

export default App;



