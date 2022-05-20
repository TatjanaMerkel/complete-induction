import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { MathJax, MathJaxContext } from "better-react-mathjax";

function InputField({textBefore, textAfter}: {textBefore:any, textAfter:any}){
  const [name, setName] = useState("");

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
        {textBefore}
        <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
        {textAfter}
    </form>
  )
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<InputField />);
export default InputField;