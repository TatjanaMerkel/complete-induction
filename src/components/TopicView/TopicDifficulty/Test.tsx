import React from "react";

import BackBar from "./../../BackButton/BackBar";
import styles from './TopicView.module.css';
import { Equation, EquationEvaluate, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'


function Test() {

    return (
        <div>

            <BackBar texts={["Home"]}/>
                <div>
                    <p>Test </p>
                    <input></input>
                    <p></p>
                    <EquationOptions
                        variables={defaultVariables}
                        functions={defaultFunctions}
                        errorHandler={defaultErrorHandler}
                    >
                    <Equation
                        value='sum(i,1,n+1, 2*i -1)'
                        
                    />
                    <br/>
                    <EquationEvaluate
                        value='sum(i,1,n+1, 2*i -1)'
                        variables={{ n: { type: 'number', value: 17 }}}
                     />
                    <br/>
                    <EquationEvaluate
                        value='2*(n+1) -1 + sum(i,1,n, 2*i -1)'
                        variables={{ n: { type: 'number', value: 17 }}}
                     />
                    </EquationOptions>
                </div>
        </div>
    );
}

export default Test;
