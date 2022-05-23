import { useNavigate } from "react-router-dom";



function Back(props: { text: string;}) {
  let navigate = useNavigate();
  return (
      <button onClick={() => navigate(-1)}>
          {props.text}      
      </button>
  );
}


export default Back;