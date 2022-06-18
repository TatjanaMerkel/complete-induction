import React from 'react';
import { useRef, useCallback, useState } from 'react';
import MathView, { MathViewRef, MathViewProps } from 'react-math-view';
import MathWithKeyboardButton from 'react-math-view';
import ControlledMathView from 'react-math-view';
import MathWithKeyboard from 'react-math-view';
import styles from './MathView.module.css';


interface State {
    latex: string;
}



export function MathViewComponent() {
    // const [latex, setLatex] = React.useState<State>({ latex: "f(x)=\\log _10 x" });
    const [latex, setLatex] = useState("x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}");
    const [focus, setFocus] = useState(false);
     const [value, setValue] = useState("\\beta");
    const [recentCommit, setRecentCommit] = useState("");
    const ref = useRef<MathViewRef>(null);
    const toggleKeyboard = useCallback(() => ref.current?.executeCommand('toggleVirtualKeyboard'), [ref]);
    const getSpokenValue = useCallback(() => ref.current?.getValue('spoken'), [ref]);

    const [k, setK] = useState<"off" | "auto" | "manual" | "onfocus" | undefined>("off");

    const onFocus = (event:any ) => {
        // console.log('onFocus', event);
        console.log('onFocus', event)
        setFocus(false);
    }
    const onCommit = (event: any) => {
    //  console.log('onCommit', event.target.childNodes[0].data);
        setRecentCommit( "event");
        console.log('onCommit', event)
        setFocus(true);
    }

    return (

        <>
            <div>
                <MathWithKeyboardButton
                    className = {styles.mathInputField}
                    value={latex}
                    
                    ref={ref}
                    // onKeystroke={(sender, key, event) => {
                    //     console.log('onKeystroke', { sender, key, event });
                    //     return true;
                    // }}
                    onCommit={onCommit}
                    onChange={e => console.log('change', e.target)}
                    onFocus={onFocus}
                />
                <span onClick={() => ref.current?.executeCommand('toggleVirtualKeyboard')} style={{ width: '21px', marginTop: '4px' }}><svg className={styles.keyboardToggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16V112c0-8.823 7.177-16 16-16h480c8.823 0 16 7.177 16 16v288zM168 268v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-336 80v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm384 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zM120 188v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-96 152v-8c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"></path></svg></span>
                <br/>
            </div>
        </>)
}