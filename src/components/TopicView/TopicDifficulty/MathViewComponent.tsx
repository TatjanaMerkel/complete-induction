import React from 'react';
import { useRef, useCallback, useState } from 'react';
import MathView, { MathViewRef, MathViewProps } from 'react-math-view';
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
            <strong>
                Yen Math input {focus && (<code>  hackable_ </code>)} and reactive <code>  { } </code> .
            </strong>
            <br></br>
            <MathView
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
            <h2>Recent commit: {recentCommit}</h2>
        </>)
}