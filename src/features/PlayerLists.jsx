import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitular } from "./titularSlice";
import { deletePlayer } from "./playerSlice";

export default function PlayerLists(){

    const dispatch=useDispatch();
    const numTitulares= useSelector(state=>state.titulares.length);

    function addPlayerIfOnly(name, number, position){
        
        if(numTitulares<11){
            dispatch(addTitular(name, number, position)); 
            dispatch(deletePlayer(number))
        }else{
            alert('Ya tienes once jugadores en tu cuadro titular!');
        }
    }


    const players= useSelector(state=>state.players);
    const listofplayers=players.map(player=>(
        <div className="player" key={player.name}>
            <h3>{player.name}</h3>
            <p>{player.number}-{player.position}</p>
            <button onClick={()=>{addPlayerIfOnly(player.name,player.number,player.position)}}>Titular</button>
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