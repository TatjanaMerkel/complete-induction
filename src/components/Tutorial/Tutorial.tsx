import React, {useState} from "react";
import '../Home/Home.css';
import './Tutorial.css';
import TutorialCard from './TutorialCard/TutorialCard';
import TableOfContents from './TableOfContents/TableOfContents';
import BackBar from './../BackButton/BackBar';

function Tutorial() {

    const min = 0;
    const max = 4;

    const [pageNumber, setPageNumber] = useState(0);
    const [pageContent,] = useState([
        {
            titlePage: 'Was ist vollständige Induktion?',
            contentPage1: ` 
           <div>
                <p>
                Die vollständige Induktion ist ein Beweisschema, nach der eine Aussage <b id="markBlue">für alle
                natürlichen Zahlen </b> bewiesen wird. Die natürlichen Zahlen $\\mathbb{N}$ sind dabei die Menge 
                $\\mathbb{N}=\\{1, 2, 3, ... \\}$. $\\mathbb{N}_0$ beschreibt alle natürlichen Zahlen inklusive der 0.
                </p>
                <br/>
                <p>
                Da es unendlich viele Zahlen gibt und deine Lebenszeit begrenzt ist, können nicht alle Zahlen
                durchprobiert werden. Stattdessen wird ein <b id="markBlue">Domino-Prinzip </b> verwendet.
                <br/>
                </p>
            </div>`,
            contentPage2: ` 
            <div>  
            <p>
            Es wird gedanklich den ersten Dominostein einer Dominokette umgestoßen. Der erste Dominostein 
            <b id="markBlue">$n_0$</b> fällt um und stößt den nächten Dominostein, seinen <b id="markBlue">Nachfolger 
            (n+1)</b> in der Kette um. Der (n+1)-te Stein stößt wiederum seinen Nachfolger (n+2) um und immer so weiter.
             <p>
             <br/>
             Am Ende werden alle Dominosteine fallen. Der Fall eines Steins entspricht im Kontext eines <b id="markBlue">
             Induktionsbeweises</b> dem Testen der Behauptung für ein $n$. </p>
            </p>
            </div>`
        },
        {
            titlePage: 'Das Induktionsrezept',
            contentPage1: `
            <div>
                <p>
                Der Beweis, dass eine Aussage für alle natürliche Zahlen ab $n_0$ gilt, wird in drei Etappen durchgeführt:
                <br/>
                <ol>
                    <li id="heading">1. Induktionsanfang (IA): </li>
                    <li>Im Induktionsanfang wird eine Aussage A($n_0$) mit einem <b id="markBlue">Startwert</b> getestet, 
                        ob die <b id="markBlue">Aussage wahr</b> ist. In der Regel ist der Startwert vorgegeben, ansonsten
                         wird die kleinste Zahl $n_0$ verwendet. Fast immer ist der Startwert <b id="markGreen">$n_0=0$</b> 
                         oder <b id="markGreen">$n_0=1$</b>  und für die Aussage der Form <b id="markGreen">
                         "Alle natürlichen Zahlen ab m"</b> ist m der Startwert.
                     </li>
                    <li id="heading">2. Induktionsvoraussetzung (IV):</li>
                    <li> In der Induktionsvoraussetzung ist die Voraussetzung damit der Beweis gelingen kann. Dabei wird
                    eine <b id="markBlue">Behauptung</b> aufgestellt, dass die zu beweisende Aussage für <b id="markBlue">
                    (mindestens) eine natürliche Zahl $n_k$</b> gilt. Während in der Induktionsvoraussetzung angenommen wird, dass die Behauptung für eine natürliche Zahl n_k gilt,
                    wird gleichzeitig auch angenommen, die Aussage A($n_k$) auch für den <b id="markBlue">Nachfolger $n_k+1$</b> gilt. 
                    Dabei wird sichergestellt, dass der nachfolgende Stein $n_k+1$ ebenfalls umfällt. 
                    Die Induktionsbehauptung lautet: <b id="markGreen">"Wenn A($n_k$) für ein $n_k$ gilt, dann gilt sie 
                    auch für den Nachfolger $n_k+1$". </b>
                    </li>
                    <li id="heading">3. Induktionsschritt: (IS)</li>
                    <li>Im Induktionsschritt wird einfach die <b id="markBlue">Induktionsbehauptung bewiesen </b>. Gilt die Aussage für eine beliebige Zahl $n_k$,
                     so gilt sie auch für die Zahl eins größer. Wenn die Aussage A für einen Startwert $n_0 \\in \\mathbb{N}$ gilt und 
                     aus der Gültigkeit dieser Aussage für ein $n_0 \\in \\mathbb{N}$ folgt, dass A auch für den Nachfolger $n+1$ gültig ist,
                     gilt die Behauptung für alle natürlichen Zahlen.
                     </li>               
                </ol>
                </p>
            </div>
            `,
            contentPage2: ''
        },
        {titlePage: '', contentPage1: '', contentPage2: ''}
    ]);


    return (
        <div>
            <BackBar texts={["Home"]}/>
            <div className="container_1">
                <div className="item_1">
                    <TutorialCard page={pageNumber} title={pageContent[pageNumber].titlePage}
                                  text_1={pageContent[pageNumber].contentPage1}
                                  text_2={pageContent[pageNumber].contentPage2}/>
                </div>
                <div className="item_2">
                    <TableOfContents/>
                </div>
            </div>
            <div className="container_2">
                <div className="item_3">
                    {pageNumber > min ? <div>
                        <button className="btn round"
                                onClick={() => setPageNumber(pageNumber - 1)}
                        >&#8249; </button>
                    </div> : pageNumber === min}

                </div>
                <div className="item_4">
                    {pageNumber <= max ? <div>
                        <button className="btn round"
                                onClick={() => setPageNumber(pageNumber + 1)}
                        >&#8250; </button>
                    </div> : pageNumber === max}
                </div>
            </div>
        </div>
    );
}

export default Tutorial;
