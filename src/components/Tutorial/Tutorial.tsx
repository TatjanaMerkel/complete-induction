import React from "react";
import '../Home/Home.css';
import Navbar from "../Navbar/Navbar";
import TutorialCard from '../TutorialCard/TutorialCard';
import TableOfContents from '../TableOfContents/TableOfContents';
import { Heading } from "../TableOfContents/TableOfContents";

function Tutorial() {
    const DummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
        <div>
            <Navbar/>
            {/*<TutorialCard title='Test' body="ldsfhshfslhfsoihdfsoiihf"/>*/}
            <article>
            <h1>The documentation page</h1>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>

                <Heading as="h2">The introduction</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <Heading as="h2">How to get started</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <Heading as="h2">Advanced usage</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <Heading as="h3">Using upside-down</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <Heading as="h3">Easter eggs</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <Heading as="h2">Contributing</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <Heading as="h3">Your first pull request</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <Heading as="h3">Governance</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <Heading as="h2">FAQ</Heading>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
                <p>{DummyText}</p>
            </article>
            <TableOfContents/>
        </div>
    );
}

export default Tutorial;