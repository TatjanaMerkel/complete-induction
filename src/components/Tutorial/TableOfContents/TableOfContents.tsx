import React from "react";
import './TableOfContents.css';


function TableOfContents(props: { pageNumberToParent: (pageNumber: number) => void }) {



    return (
        <nav className="tableOfContent">
            <h2>Tutorial</h2>
            <nav>
                <li><a href="#" onClick={() => {
                    props.pageNumberToParent(0)
                }}>Was ist vollständige Induktion?</a></li>
                <li><a href="#" onClick={() => {
                    props.pageNumberToParent(1)
                }}>Das Induktionskonzept</a></li>
                <li><a href="#" onClick={() => {
                    props.pageNumberToParent(2)
                }}>Der Klassiker der Induktionsbeweise</a></li>
            </nav>

        </nav>
    );
}

export default TableOfContents;
