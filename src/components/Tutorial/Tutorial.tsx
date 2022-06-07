import React, {useState} from "react";
import '../Home/Home.css';
import './Tutorial.css';
import TutorialCard from './TutorialCard/TutorialCard';
import TableOfContents from './TableOfContents/TableOfContents';
import BackBar from "./../BackButton/BackBar";

function Tutorial() {

    const [pageNumber, setPageNumber] = useState(0);
    const [pageContent,] = useState([
        {
            titlePage: 'Was ist vollständige Induktion?',
            contentPage1: ` 
           <Latex>
                <p>
                Die vollständige Induktion ist ein Beweisschema, nach der eine Aussage <b id="colorText">für alle
                natürlichen Zahlen </b> bewiesen wird. Die natürlichen Zahlen $\\mathbb{N}$ sind dabei die Menge 
                $\\mathbb{N}=\\{1, 2, 3, ... \\}$. $\\mathbb{N}_0$ beschreibt alle natürlichen Zahlen inklusive der 0.
                </p>
                <br/>
                <p>
                Da es unendlich viele Zahlen gibt und deine Lebenszeit begrenzt ist, können nicht alle Zahlen
                durchprobiert werden. Stattdessen wird ein <b id="colorText">Domino-Prinzip </b> verwendet.
                <br/>
                </p>
            </Latex>`,
            contentPage2: ` 
            <Latex>  
            <p>
            Es wird gedanklich den ersten Dominostein einer Dominokette umgestoßen. Der erste Dominostein 
            <b id="colorText">$n_0$</b> fällt um und stößt den nächten Dominostein, seinen <b id="colorText">Nachfolger 
            (n+1)</b> in der Kette um. Der (n+1)-te Stein stößt wiederum seinen Nachfolger (n+2) um und immer so weiter.
             <p>
             <br>
             Am Ende werden alle Dominosteine fallen. Der Fall eines Steins entspricht im Kontext eines <b id="colorText">
             Induktionsbeweises</b> dem Testen der Behauptung für ein $n$. </p>
            </p>
            </Latex>`
        },
        {
            titlePage: 'next',
            contentPage1: '',
            contentPage2: ''
        }
    ]);

    return (
        <div>
            <BackBar texts={["Home"]}/>
            <div className="container_1">

                <div className="item_1">
                    <TutorialCard title={pageContent[pageNumber].titlePage}
                                  text_1={pageContent[pageNumber].contentPage1}
                                  text_2={pageContent[pageNumber].contentPage2}/>
                </div>
                <div className="item_2">
                    <TableOfContents title={pageContent[pageNumber].titlePage}/>
                </div>
            </div>
            <div className="container_2">
                <div className="item_3">
                    <button className="btn round"
                            onClick={() => setPageNumber(pageNumber - 1)}
                    >&#8249; </button>
                </div>
                <div className="item_4">
                    <button className="btn round"
                            onClick={() => setPageNumber(pageNumber + 1)}
                    >&#8250; </button>
                </div>
            </div>
        </div>
    );
}

export default Tutorial;
