import { createSlice } from "@reduxjs/toolkit";

    const initialState=[
        {name: "Simon Kjaer", number: 8, position:"defense"},
        {name: "Theo Hernandez", number: 5, position:"winger"},
        {name: "Matteo Gabbia", number: 46, position:"defense"},
        {name: "Christian Pulisic", number: 10, position:"playmaker"},
        {name: "Yacine Adli", number: 7, position:"midfield"},
        {name: "Zlatan Ibrahimovic", number: 11, position:"forward"},
        {name: "Andriy Shevchenko", number: 19, position:"forward"},
        {name: "Paolo Maldini", number: 2, position:"defense"},
        {name: "Rafael Leao", number: 12, position:"forward"},
        {name: "Ignazio Abate", number: 3, position:"defense"},
        {name: "Jack Bonaventura", number: 13, position: "midfield"},
        {name: "Aymeric Laporte", number: 111, position:"defense"}
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