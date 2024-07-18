import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { playerAdded } from "./playerSlice";

export default function AddPlayer(){

    const dispatch= useDispatch();
    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[position,setPosition]=useState("");

    const sendPlayer=()=>{

        if(name && number && position){
            dispatch(playerAdded(name, number, position));
        }
        setName("");
        setNumber("");
        setPosition("");
    }

    return(
        <section className="addPlayer">
            <form>
                <div className="input">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label htmlFor="number">Dorsal:</label>
                    <input type="text"
                        name="number"
                        id="number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </div>
                <div className="input">
                    <label htmlFor="position">Posición:</label>
                    <input type="text"
                        name="position"
                        id="position"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                    />
                </div>

            </form>
            <button className="btn-register" onClick={sendPlayer}>Registrar</button>
        </section>
    )
}