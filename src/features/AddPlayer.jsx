import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { playerAdded } from "./playerSlice";

export default function AddPlayer(){

    const dispatch= useDispatch();
    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[position,setPosition]=useState("");

    const justLetter=/[A-Za-z]/;
    const justNumbers=/[0-9]/;
    const validatename= document.getElementById("nameAd");
    const validatenumber=document.getElementById("numberAd");
    const validateposition=document.getElementById("positionAd");

    const sendPlayer=()=>{



        if(justLetter.test(name) && justLetter.test(position) && justNumbers.test(number)){

            validatename.style.visibility= "hidden";
            validatenumber.style.visibility= "hidden";
            validateposition.style.visibility= "hidden";

            if(name && number && position){
                dispatch(playerAdded(name, number, position));
            }
        }else{
            alert('The data is not correct, check it out!');
            validatename.style.visibility= "visible";
            validatenumber.style.visibility= "visible";
            validateposition.style.visibility= "visible";
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
                        minLength="3"
                        maxLength="20"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <p id="nameAd">This field must contain just letters</p>
                </div>
                <div className="input">
                    <label htmlFor="number">Dorsal:</label>
                    <input type="text"
                        name="number"
                        id="number"
                        minLength="1"
                        maxLength="4"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                     <p id="numberAd">This field must contain just numbers</p>
                </div>
                <div className="input">
                    <label htmlFor="position">Posición:</label>
                    <input type="text"
                        name="position"
                        minLength="3"
                        maxLength="20"
                        id="position"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                    />
                     <p id="positionAd">This field must contain just letters</p>
                </div>

            </form>
            <button className="btn-register" onClick={sendPlayer}>Registrar</button>
        </section>
    )
}