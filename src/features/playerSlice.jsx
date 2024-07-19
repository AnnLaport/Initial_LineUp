import { createSlice } from "@reduxjs/toolkit";

    const initialState=[
        {name: "Simon Kjaer", number: 8, position:"defence"},
        {name: "Theo Hernandez", number: 5, position:"winger"},
        {name: "Matteo Gabbia", number: 46, position:"defence"},
        {name: "Christian Pulisic", number: 10, position:"playmaker"},
        {name: "Yacine Adli", number: 7, position:"midfield"},
        {name: "Zlatan Ibrahimovic", number: 11, position:"forward"},
        {name: "Andriy Shevchenko", number: 19, position:"forward"}
    ]

const PlayerSlice= createSlice({
    name: 'players',
    initialState: initialState.sort((a,b)=>a.name.localeCompare(b.name)),
    reducers: {
        playerAdded: {
            reducer(state, action){
                state.push(action.payload);
                state=state.sort((a,b)=>a.name.localeCompare(b.name))
            },
            prepare(name, number, position){
                return {
                    payload: {
                        name,
                        number,
                        position
                    }
                }
            }
        },
        deletePlayer(state,action){
            const number = action.payload
            const existingPlayer = state.findIndex(player => player.number === number)
            if(existingPlayer!=-1){
                state.splice(existingPlayer,1);
            }
        }
    }
})

export const {playerAdded, deletePlayer} = PlayerSlice.actions;
export default PlayerSlice.reducer;