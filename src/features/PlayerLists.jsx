import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitular } from "./titularSlice";
import { deletePlayer } from "./playerSlice";

export default function PlayerLists(){

    const dispatch=useDispatch();


    const players= useSelector(state=>state.players);
    const listofplayers=players.map(player=>(
        <div className="player" key={player.name}>
            <h3>{player.name}</h3>
            <p>{player.number}-{player.position}</p>
            <button onClick={()=>dispatch(addTitular(player.name, player.number, player.position))}>Titular</button>
            <button onClick={()=>dispatch(deletePlayer(player.number))}>Eliminar</button>
        </div>
    ))


    return(
        <section>
            <h2>List of Players:</h2>
            <div className="players">
                {listofplayers}
            </div>
        </section>
    )

}