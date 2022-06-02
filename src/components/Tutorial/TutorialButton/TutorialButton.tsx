import React from "react";
import "./TutorialButton.css"

const STYLES = [
    "btn--primary--solid",
];

const SIZES = ["btn--medium"];

const POSITIONS = ["btn--left", "btn--right"];

export const TutorialButton = ({children, type, onClick, buttonStyle, buttonSize, buttonPosition}: any) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonPosition = POSITIONS.includes(buttonPosition) ? buttonPosition : POSITIONS[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonPosition}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default TutorialButton;
