import Button from "./component/button";
import { useSelector } from "react-redux";
import { selector } from "./reducer/buttonReducer";
import "./App.css"

function App() {
  const {btn,result,equation} = useSelector(selector)

  return (
    <div className="cal rounded d-flex flex-column align-items-center justify-content-center m-auto text-light">
    Calculator
    <div className="screen d-flex flex-column align-items-center justify-content-center">
        <div className="eq p-2 m-1">{equation}</div>
        <div className="ans p-2">{result}</div>
    </div>
    <div className="keypad d-flex flex-wrap flex-row align-items-center justify-content-center">
    {btn.map((value,idx)=>{
      return(
        <Button key={idx} equation={equation} name={value}/>
      )
    })}
    </div>
</div>
    
  );
}

export default App;
