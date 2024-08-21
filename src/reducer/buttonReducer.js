import { createSlice } from "@reduxjs/toolkit";

// const [display, setDisplay] = useState[[]]
// const [result,setResult] = useState()

const initialState = {
    equation:[],
    value:null,
    result:"",
    btn:[1,2,3,"/",4,5,6,"*",7,8,9,"+","=",0,"<","-","C"]

}

const inputSlice =  createSlice({
    name:"input",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.equation.push(action.payload)
        },
        clear:(state,action)=>{
            state.result = ""
            state.equation = []
        },
        pop:(state,action)=>{
            state.equation.pop()
        },
        calculation:(state,action)=>{
            state.result = eval(state.equation.join(""))
            state.equation= [state.result]
        },
    }
})

export const action = inputSlice.actions;
export const reducer = inputSlice.reducer;
export const selector = (state)=>state
