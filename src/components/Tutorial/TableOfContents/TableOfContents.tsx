import React from "react";
import './TableOfContents.css';


function TableOfContents() {

    return (
        <nav className="tableOfContent">
            <h2>Tutorial</h2>
            <ul>
                <li>Was ist vollständige Induktion?</li>
                <li>Das Induktionskonzept</li>
                <li>Der Klassiker der Induktionsbeweise</li>
            </ul>

        </nav>
    );
}

export default TableOfContents;
