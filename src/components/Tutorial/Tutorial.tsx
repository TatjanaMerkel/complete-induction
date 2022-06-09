import React, {useState} from "react";
import '../Home/Home.css';
import './Tutorial.css';
import TutorialCard from './TutorialCard/TutorialCard';
import TableOfContents from './TableOfContents/TableOfContents';
import BackBar from './../BackButton/BackBar';


function Tutorial() {

    const min = 0;
    const max = 1;

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
            </div>`,
            task: '',
            solution: ''
        },
        {
            titlePage: 'Das Induktionskonzept',
            contentPage1: `
            <div>
                <p>
                Der Beweis, dass eine Aussage für alle natürliche Zahlen ab $n_0$ gilt, wird in drei Etappen durchgeführt:
                <br/>
                 <br/>
                <ol>
                    <li id="heading">1. Induktionsanfang (IA): </li>
                    <li> Im Induktionsanfang wird eine Aussage A($n_0$) mit einem <b id="markBlue">Startwert</b> getestet, 
                        ob die <b id="markBlue">Aussage wahr</b> ist. In der Regel ist der Startwert vorgegeben, ansonsten
                         wird die kleinste Zahl $n_0$ verwendet. Fast immer ist der Startwert <b id="markGreen">$n_0=0$</b> 
                         oder <b id="markGreen">$n_0=1$</b>  und für die Aussage der Form <b id="markGreen">
                         "Alle natürlichen Zahlen ab m"</b> ist m der Startwert.
                     </li>
                      <br/>
                    <li id="heading">2. Induktionsvoraussetzung (IV):</li>
                    <li> In der Induktionsvoraussetzung ist die Voraussetzung damit der Beweis gelingen kann. Dabei wird
                    eine <b id="markBlue">Behauptung</b> aufgestellt, dass die zu beweisende Aussage für <b id="markBlue">
                    (mindestens) eine natürliche Zahl $n_k$</b> gilt. Während in der Induktionsvoraussetzung angenommen wird, dass die Behauptung für eine natürliche Zahl n_k gilt,
                    wird gleichzeitig auch angenommen, die Aussage A($n_k$) auch für den <b id="markBlue">Nachfolger $n_k+1$</b> gilt. 
                    Dabei wird sichergestellt, dass der nachfolgende Stein $n_k+1$ ebenfalls umfällt. 
                    Die Induktionsbehauptung lautet: <b id="markGreen">"Wenn A($n_k$) für ein $n_k$ gilt, dann gilt sie 
                    auch für den Nachfolger $n_k+1$". </b>
                    </li>
                     <br/>
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
            contentPage2: '',
            task: '',
            solution: ''
        },
        {
            titlePage: 'Der Klassiker der Induktionsbeweise',
            contentPage1: '<b id="example">Beispiel:</b> Gauß\'sche Summenformel ',
            contentPage2: '<b>Beweise die Aussage:</b>',
            task: `
                    \\[ A(n): \\sum_{k=1}^n = \\frac{n \\cdot (n + 1)}{2} \\] gilt für 
                    alle $n \\in \\mathbb{N}$, also für alle natürlichen Zahlen <b id="markGreen">für alle natürlichen Zahlen</b>.
                   `,
            solution: `
                        <bold id="heading">1. Induktionsanfang</bold> $A(n_0)$
                        <br/>
                        Im Induktionsanfang wird gezeigt, dass die Behauptung für einen Startwert $n_0$ gilt.
                        Die Summenformel beginnt mit dem Startwert $k = 1$, so wählen wir $n_0 = 1$.
                        Diesen Startwert setzen wir für $A(n)$ ein und überprüfen, ob dasselbe Ergebnis
                        auf beiden Seiten herauskommt.
                        <br/>
                        \\[ n_0=1: \\sum_{k=1}^{\\color{orange}1} = \\frac{ {\\color{orange}1} 
                        \\cdot ({\\color{orange}1} + 1)}{2}  \\] 
                        
                         \\[ \\enspace   1 = 1  \\] 
                         <br/>
                         <bold id="heading">2. Induktionsvoraussetzung</bold> $A(n)$
                         <br/>
                         Die Induktionsvoraussetzung zu formulieren ist überhaupt kein Problem.
                        Schreibe einfach die Behauptung $A(n)$ ab und setze ein „es existiert (mindestens) eine natürliche Zahl n“ 
                        in Form von „$ \\exists n \\in \\mathbb{N}$“ davor:
                         \\[ \\exists n \\in \\mathbb{N}: {\\color{violet}(\\sum_{k=1}^n) = \\frac{n \\cdot (n + 1)}{2}} \\]
                         
                         <br/>
                         <bold id="heading">3. Induktionsschritt</bold> $A(n) \\Longrightarrow A(n+1)$
                         <br/>
                         Jedes $n$ in $A(n)$ wird durch $n+1$ ersetzt:
                          \\[ \\text{Induktionsbehauptung:} \\quad n_0=1: \\sum_{k=1}^{\\color{cyan}n+1} = \\frac{ {\\color{cyan}(n+1)} 
                        \\cdot ({\\color{cyan}(n+1)} + 1)}{2}  \\] 
                         <br/>
                         Als nächstes muss aus $A(n)$ (der Induktionsvoraussetzung) gefolgert werden, dass $A(n+1)$ eine wahre Aussage ist.
                         Beginne dafür mit der rechten Seite der Summenformel aus der Induktionsbehauptung:
                         <br/>
                          \\[  \\sum_{k=1}^{n+1} = \\] 
                          Das Summenzeichen kann aufgespalten  und die Induktionsvoraussetzung kann wieder gefunden werden:
                          \\[  \\sum_{k=1}^{n+1} = \\, {\\color{violet}(\\sum_{k=1}^n)} + (n+1) \\]
                          Ersetze den eingeklammerten Teil also durch die rechte Seite der Induktionsvoraussetzung:
                          \\[  \\sum_{k=1}^{n+1} = \\, {\\color{violet}\\frac{n \\cdot (n + 1)}{2} } + (n+1) \\qquad \\qquad | \\; \\text{auf einen Nenner bringen} \\] 
                          \\[   = \\, {\\color{violet}\\frac{n \\cdot (n + 1)}{2} } + \\frac{2 \\cdot (n+1)}{2} \\qquad \\qquad | \\; \\text{gemeinsamer Bruch} \\]
                          \\[   = \\, \\frac{n \\cdot (n + 1) + 2 \\cdot (n+1)}{2}  \\qquad \\qquad  | \\; (n+1) \\; \\text{ausklammern} \\]
                          \\[   = \\, \\frac{(n + 1) \\cdot (n+2)}{2} \\qquad \\qquad \\qquad  \\qquad  | \\; (n+1) \\; \\text{umformen} \\]
                          \\[   = \\, \\frac{(n + 1) \\cdot ((n+1)+1)}{2} _{q.e.d.}     \\qquad \\qquad  \\qquad \\qquad \\qquad  \\qquad \\] 
                        
                        
            `
        }
    ]);


    return (
        <div>
            <BackBar texts={["Home"]}/>
            <div className="container_1">
                <div className="item_1">
                    <TutorialCard page={pageNumber} title={pageContent[pageNumber].titlePage}
                                  text_1={pageContent[pageNumber].contentPage1}
                                  text_2={pageContent[pageNumber].contentPage2}
                                  task={pageContent[pageNumber].task}
                                  solution={pageContent[pageNumber].solution}

                    />
                </div>
                <div className="item_2">
                    <TableOfContents pageNumber={pageNumber}/>
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
                                onClick={() => {setPageNumber(pageNumber + 1); console.log(pageNumber)}}
                        >&#8250; </button>
                    </div> : pageNumber === max}
                </div>
            </div>
        </div>
    );
}

export default Tutorial;
