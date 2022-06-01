import React from "react";
import "./TableOfContents2.css";

type HeadingType = { id: string; text: string; level: number };

function useHeadings() {
    const [headings, setHeadings] = React.useState<HeadingType[]>([]);
    React.useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
            .filter((element) => element.id)
            .map((element) => ({
                id: element.id,
                text: element.textContent ?? "",
                level: Number(element.tagName.substring(1))
            }));
        setHeadings(elements);
    }, []);
    return headings;
}

function getId(children: string) {
    return children
        .split(" ")
        .map((word) => word.toLowerCase())
        .join("-");
}

type HeadingProps = {
    children: string;
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    id?: string;
};

function Heading({children, id, as: Element, ...props}: HeadingProps) {
    const theId = id ?? getId(children);
    return (
        <Element id={theId} {...props}>
            {children}
        </Element>
    );
}

function useScrollSpy(ids: string[], options: IntersectionObserverInit) {
    const [activeId, setActiveId] = React.useState<string>();
    const observer = React.useRef<IntersectionObserver>();
    React.useEffect(() => {
        const elements = ids.map((id) => document.getElementById(id));
        observer.current?.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, options);
        elements.forEach((el) => {
            if (el) {
                observer.current?.observe(el);
            }
        });
        return () => observer.current?.disconnect();
    }, [ids, options]);
    return activeId;
}


function TableOfContent2() {
    const headings = useHeadings();
    const activeId = useScrollSpy(
        headings.map(({id}) => id),
        {rootMargin: "0% 0% -25% 0%"}
    );
    return (
        <nav className="toc">
            <h2>Table of content</h2>
            <ul>
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <a
                            style={{
                                marginLeft: `${heading.level - 2}em`,
                                fontWeight: activeId === heading.id ? "bold" : "normal"
                            }}
                            href={`#${heading.id}`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export {Heading};
export default TableOfContent2;
