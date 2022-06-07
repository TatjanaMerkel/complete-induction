import React from "react";
import './TableOfContents.css';


function TableOfContents(props: { title: string }) {

    return (
        <nav className="tableOfContent">
            <h2>Tutorial</h2>
            <ul>{props.title}</ul>
        </nav>
    );
}

export default TableOfContents;
