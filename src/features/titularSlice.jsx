import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const TitularSlice= createSlice({
    name: 'titulares',
    initialState,
    reducers:{
        addTitular: {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(name,number,position){
                return{
                    payload: {
                        name, 
                        number,
                        position
                    }
                }
            }
        },
        deleteTitular(state,action){
            const number = action.payload
            console.log(number)
            const existingPlayer = state.findIndex(titular => titular.number === number)
            if(existingPlayer!=-1){
                state.splice(existingPlayer,1);
            }
        } 
    }
})

export const {addTitular, deleteTitular}=TitularSlice.actions;
export default TitularSlice.reducer;