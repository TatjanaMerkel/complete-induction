import React from "react";

import BackBar from "./../../BackButton/BackBar";
import styles from './TopicView.module.css';
import { Equation, EquationEvaluate, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'
import { parse} from 'equation-parser'
import { resolve , format,  formatPreresolved, FormatOptions, ResultNode, ResultResolveError, EquationResolveError } from 'equation-resolver'
import { MathViewComponent } from './MathViewComponent';

function checkEqual(equation1: string, equation2: string){

    var floor : number = 0;
    if (equation1.includes("sum(")){
        var newFloor = equation1.split("sum")[1].split(",")[1];
        floor = parseInt(newFloor);
        console.log("floor:" + floor);
    }
    for (var i = 0; i < 1000; i++) {
        var num =Math.floor(Math.random()*1000+floor);
        var ranNumAsStr = num.toString();
        var equa1 = parse(equation1.replaceAll('n', ranNumAsStr));
        var equa2 = parse(equation2.replaceAll('n', ranNumAsStr));
        const result1:ResultNode | ResultResolveError = resolve(equa1,{ functions: defaultFunctions });
        const result2:ResultNode | ResultResolveError = resolve(equa2,{ functions: defaultFunctions });

        if ('value' in result1 && 'value' in result2) {
            if (result1["value"] !== result2["value"]){
                return "false";
            }
          }
        
        
    }
    return "true";
}


function Test() {
    return (
        <div>
            <MathViewComponent />
            <BackBar texts={["Home"]}/>
                <div>
                    <p>Test </p>
                    <textarea id="latex"></textarea>
                    <input></input>
                    <p>{checkEqual('sum(i,1,n+1, 2*i -1)','2*(n+1) -1 + sum(i,1,n, 2*i -1)' )}</p>
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
                        variables={{ n: { type: 'number', value: 13 }}}
                     />
                    <br/>
                    <EquationEvaluate
                        value='2*(n+1) -1 + sum(i,1,n, 2*i -1)'
                        variables={{ n: { type: 'number', value: 13 }}}
                     />
                    </EquationOptions>
                </div>
        </div>
    );
}

export default Test;
