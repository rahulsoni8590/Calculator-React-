import { useDispatch } from "react-redux"
import { action} from "../reducer/buttonReducer"

export default function Button(props) {
    const dispatch = useDispatch()
    const { name,equation } = props

    const handleValues = (value)=>{
        const endValueType = typeof(equation[equation.length-1])
        const currValueType = typeof(value)
        console.log(equation.length)
        if(equation.length !== 0 && endValueType !== "number" && currValueType !== "number"){
            alert("Invalid Input")
            return
        }  
        dispatch(action.add(value))
    }


    if(name === "="){
        return(
            <button id={name} onClick={()=>dispatch(action.calculation())} className="rounded keys strong m-1">{name}</button>
        )

    } else if(name === "C"){
        return(
            <button id={name} onClick={()=>dispatch(action.clear())} className="rounded bg-danger keys strong m-1">{name}</button>

        )
    } else if(name === "<"){
        return(
            <button id={name} onClick={()=>dispatch(action.pop())} className="rounded keys strong m-1">{name}</button>
        )
    } else{
        return(
            <button id={name} onClick={(e)=>handleValues(name)} className="rounded keys strong m-1">{name}</button>
        )

    }
    
}